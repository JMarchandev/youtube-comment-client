import { Comment } from "../services/types/commentsResult";
import { CommentCard } from "../components/comments/commentCardBody";
import { Container } from "react-bootstrap";
import VideoIframe from "../components/comments/videoIframe";

type Props = {
  comments: Comment[] | null;
  videoId: string;
};

export const Comments = ({ comments, videoId }: Props) => {
  return (
    <Container>
      <VideoIframe videoId={videoId} />
      {comments && (
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
      )}
    </Container>
  );
};

export default Comments;
