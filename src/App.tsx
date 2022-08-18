import * as ExportFileService from "./services/ExportFileService";
import * as YoutubeCommentService from "./services/YoutubeCommentService";

import Comments from "./containers/comments";
import { Home } from "./containers/home";
import React from "react";
import { Result } from "./services/types/commentsResult";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [commentsResult, setCommentsResult] = React.useState<null | Result>(
    null
  );

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget["search-youtube-comments-input"].value) {
      setIsLoading(true);
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

  const handleLoadMore = () => {
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

  return (
    <>
      <Home onSubmitSearch={handleSubmitSearch} />
      {commentsResult && commentsResult.items && (
        <Comments
          isLoading={isLoading}
          comments={commentsResult.items}
          videoId={commentsResult.videoId}
          pagination={!commentsResult.complete}
          onClickLoadMore={handleLoadMore}
          onExport={handleExport}
        />
      )}
    </>
  );
}

export default App;
