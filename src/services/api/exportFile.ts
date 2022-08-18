import { Result } from "../types/commentsResult";
import axios from "axios";

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

export const getFile = async (type: 'csv' | 'json', request: Result) => {
    const response = await axios.post(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/export/${type}`, { request });
    return response;
}