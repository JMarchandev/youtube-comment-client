import Comments from "./containers/comments";
import { Home } from "./containers/home";
import React from "react";
import { Result } from "./services/types/commentsResult";

function App() {
  const [commentsResult, setCommentsResult] = React.useState<null | Result>(null);
  const handleResults = (results: Result) => {
    setCommentsResult(results);
  };

  return (
    <>
      <Home onResults={handleResults} />
      {commentsResult && (
        <Comments comments={commentsResult.items} videoId={commentsResult.videoId} />
      )}
    </>
  );
}

export default App;
