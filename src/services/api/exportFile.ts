import { Comment } from "../types/commentsResult";
import axios from "axios";

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

export const getCSVFile = async (comments: Comment[]) => {
    const response = await axios.post(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/export/csv`, { comments });
    return response;
}