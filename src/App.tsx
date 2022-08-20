import * as ExportFileService from "./services/ExportFileService";
import * as YoutubeCommentService from "./services/YoutubeCommentService";

import Analyse from "./containers/analyzes";
import Comments from "./containers/comments";
import { Container } from "react-bootstrap";
import { Home } from "./containers/home";
import { LineAnalyse } from "./services/types/analyse";
import React from "react";
import { Result } from "./services/types/commentsResult";
import VideoIframe from "./components/comments/videoIframe";
import { commentLineAnalyzeFormater } from "./services/analyzeFormater";

function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [commentsResult, setCommentsResult] = React.useState<null | Result>(
    null
  );
  const [analyseLoading, setAnalyseLoading] = React.useState<boolean>(false)
  const [analyse, setAnalyze] = React.useState<LineAnalyse | null>(null);

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget["search-youtube-comments-input"].value) {
      setIsLoading(true);
      setCommentsResult(null);
      setAnalyze(null);
      const url = e.currentTarget["search-youtube-comments-input"].value;

      YoutubeCommentService.getComments(url)
        .then((res: Result) => {
          setCommentsResult(res);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleLoadMoreComments = () => {
    if (commentsResult) {
      setIsLoading(true);

      YoutubeCommentService.getMoreComments(
        commentsResult.url,
        commentsResult.nextPageToken
      )
        .then((res: Result) => {
          const lastComments = commentsResult.items;
          const response = {
            ...res,
            items: [...lastComments, ...res.items],
          };
          setCommentsResult(response);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleLoadAllComments = () => {
    if (commentsResult) {
      setIsLoading(true);

      YoutubeCommentService.getAllComments(commentsResult)
        .then((res: Result) => {
          setCommentsResult(res);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleExport = (type: "csv" | "json") => {
    if (commentsResult && commentsResult.items) {
      ExportFileService.getDownloadableFile(type, commentsResult)
        .then((res: any) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `export-${Date.now()}-${type}.${type}`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((err: any) => console.log("err", err));
    }
  };

  const handleTriggerAnalyze = () => {
    if (commentsResult && commentsResult.items) {
      setAnalyseLoading(true);
      YoutubeCommentService.getAllComments(commentsResult)
        .then((res: Result) => {
          const analyseResult = commentLineAnalyzeFormater(res.items);
          setAnalyze(analyseResult);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setAnalyseLoading(false);
        });
    }
  };

  return (
    <>
      <Home onSubmitSearch={handleSubmitSearch} />
      <Container>
        {analyse && (
          <Analyse publishAnalyse={analyse} />
        )}
        {commentsResult && commentsResult.items && (
          <>
            <VideoIframe videoId={commentsResult.videoId} />
            <Comments
              analyzeLoading={analyseLoading}
              onClickTriggerAnalyze={handleTriggerAnalyze}
              isLoading={isLoading}
              comments={commentsResult.items}
              pagination={!commentsResult.complete}
              onClickLoadMore={handleLoadMoreComments}
              onClickLoadAll={handleLoadAllComments}
              onExport={handleExport}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
