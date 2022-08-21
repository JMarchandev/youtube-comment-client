import { Result } from "../types/commentsResult";
import axios from "axios";

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

export const getAnalyzes = async (request: Result) => {
    const response = await axios.post(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/analyse`, { request });
    return response;
}