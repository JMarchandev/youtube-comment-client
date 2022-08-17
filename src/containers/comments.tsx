import { Button, Container } from "react-bootstrap";

import { Comment } from "../services/types/commentsResult";
import { CommentCard } from "../components/comments/commentCardBody";
import { CustomDropdownButton as DropdownButton } from "../components/common/dropdownButton";
import Spinner from "../components/common/spinner";
import VideoIframe from "../components/comments/videoIframe";

type Props = {
  comments: Comment[];
  videoId: string;
  pagination: boolean;
  onClickLoadMore: () => void;
  isLoading: boolean;
  onExport: (type: "csv" | "json") => void;
};

export const Comments = ({
  comments,
  videoId,
  pagination,
  onClickLoadMore,
  isLoading,
  onExport,
}: Props) => {
  return (
    <Container>
      <VideoIframe videoId={videoId} />
      <DropdownButton
        actions={[{ label: "CSV", handler: () => onExport("csv") }]}
      />
      <div>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            textDisplay={comment.textDisplay}
            publishedAt={comment.publishedAt}
            authorDisplayName={comment.authorDisplayName}
            totalLikeCount={comment.likeCount}
          />
        ))}
      </div>
      {isLoading && <Spinner className="d-flex justify-content-around my-3" />}
      {pagination && (
        <div>
          <Button className="w-100 my-3" onClick={onClickLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Comments;
