import * as ExportFileService from "./services/ExportFileService";
import * as YoutubeCommentService from "./services/YoutubeCommentService";

import { Comment, Result } from "./services/types/commentsResult";

import { Button } from "react-bootstrap";
import Comments from "./containers/comments";
import { Home } from "./containers/home";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [comments, setComments] = React.useState<Comment[] | null>(null);
  const [resultInfos, setResultInfos] = React.useState<null | Result>(null);

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget["search-youtube-comments-input"].value) {
      setIsLoading(true);
      const url = e.currentTarget["search-youtube-comments-input"].value;

      YoutubeCommentService.getComments(url)
        .then((res: Result) => {
          setResultInfos(res);
          setComments(res.items);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleLoadMore = () => {
    if (resultInfos) {
      setIsLoading(true);

      YoutubeCommentService.getMoreComments(
        resultInfos.url,
        resultInfos.nextPageToken
      )
        .then((res: Result) => {
          setResultInfos(res);
          setComments(comments ? [...comments, ...res.items] : res.items);
        })
        .catch((err: any) => console.log("err", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleExport = (type: "csv" | "json") => {
    if (comments) {
      ExportFileService.getCSVFile(comments)
        .then((res: any) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "yourfilename.csv");
          document.body.appendChild(link);
          link.click();
        })
        .catch((err: any) => console.log("err", err));
    }
  };

  return (
    <>
      <Home onSubmitSearch={handleSubmitSearch} />
      <Button className="w-100 my-3" onClick={() => handleExport("csv")}>
        Load More
      </Button>
      {resultInfos && comments && (
        <Comments
          isLoading={isLoading}
          comments={comments}
          videoId={resultInfos.videoId}
          pagination={!resultInfos.complete}
          onClickLoadMore={handleLoadMore}
          onExport={handleExport}
        />
      )}
    </>
  );
}

export default App;
