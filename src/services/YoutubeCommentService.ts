import * as YoutubeCommentApi from "./api/youtubeComment";

import { Result } from "./types/commentsResult";

export const getComments = async (url: string) => {
    const response = await YoutubeCommentApi.getComments(url);
    return response.data;
}

export const getMoreComments = async (url: string, nextPageToken: string) => {
    const response = await YoutubeCommentApi.getMoreComments(url, nextPageToken);
    return response.data;
}

export const getAllComments = async (request: Result) => {
    const response = await YoutubeCommentApi.getAllComments(request);
    return response.data;
}
