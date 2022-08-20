import { Button, Col, Row } from "react-bootstrap";

import { Comment } from "../services/types/commentsResult";
import { CommentCard } from "../components/comments/commentCardBody";
import { CustomButton } from "../components/common/button";
import { CustomDropdownButton as DropdownButton } from "../components/common/dropdownButton";
import Spinner from "../components/common/spinner";

type Props = {
  comments: Comment[];
  pagination: boolean;
  onClickLoadMore: () => void;
  onClickLoadAll: () => void;
  onClickTriggerAnalyze: () => void;
  isLoading: boolean;
  analyzeLoading: boolean;
  onExport: (type: "csv" | "json") => void;
};

export const Comments = ({
  comments,
  onClickTriggerAnalyze,
  pagination,
  onClickLoadMore,
  onClickLoadAll,
  isLoading,
  analyzeLoading,
  onExport,
}: Props) => {
  return (
    <>
      <Row>
        <Col>
          <DropdownButton
            title="Export"
            actions={[
              { label: "CSV", handler: () => onExport("csv") },
              { label: "JSON", handler: () => onExport("json") },
            ]}
            className="w-100"
          />
        </Col>
        <Col>
          <CustomButton
            text="Trigger analyze"
            isLoading={analyzeLoading}
            onClick={onClickTriggerAnalyze}
          />
        </Col>
      </Row>

      <div>
        {comments.map((comment, i) => (
          <CommentCard
            key={comment.id}
            textDisplay={comment.textDisplay}
            publishedAt={comment.publishedAt}
            authorDisplayName={comment.authorDisplayName}
            totalLikeCount={comment.likeCount}
          />
        ))}
      </div>
      {isLoading && (
        <Spinner as="border" className="d-flex justify-content-around my-3" />
      )}
      {pagination && (
        <Row>
          <Col>
            <Button className="w-100 my-3" onClick={onClickLoadMore}>
              Load More
            </Button>
          </Col>
          <Col>
            <Button className="w-100 my-3" onClick={onClickLoadAll}>
              Load All
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Comments;
