import { Col, Row } from "react-bootstrap";

import { AiTwotoneLike } from "react-icons/ai";
import { CustomCard as Card } from "../common/card";

type Props = {
  authorDisplayName: string;
  textDisplay: string;
  publishedAt: string;
  totalLikeCount: number;
};

export const CommentCard = ({
  textDisplay,
  authorDisplayName,
  publishedAt,
  totalLikeCount,
}: Props) => {
  return (
    <Card className="p-3 mt-3">
      <>
        <small>
          {authorDisplayName} - {publishedAt}
        </small>
        <Row>
          <Col md={11}>
            <p className="m-0">{textDisplay}</p>
          </Col>
          <Col>
            <span>
              {totalLikeCount} <AiTwotoneLike />
            </span>
          </Col>
        </Row>
      </>
    </Card>
  );
};
