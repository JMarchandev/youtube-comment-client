import * as YoutubeCommentApi from "./api/youtubeComment";

export const getComments = async (url: string) => {
    const response = await YoutubeCommentApi.getComments(url);
    return response.data;
}