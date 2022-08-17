import axios from 'axios'

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

const headers = { Accept: 'application/json' }

export const getComments = async (url: string) => {
    const response = await axios.get(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/youtube/comments?results=${url}`, {
        headers
    });
    return response;
}

export const getMoreComments = async (url: string, nextPageToken: string) => {
    const response = await axios.get(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/youtube/comments/more?results=${url}&nextPageToken=${nextPageToken}`, {
        headers,
    });
    return response;
}