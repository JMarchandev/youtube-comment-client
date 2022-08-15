import axios from 'axios'

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

export const getComments = async (url: string) => {
    const response = await axios.get(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/youtube/comments?results=${url}`, {
        headers: { Accept: 'application/json' }
    });
    return response;
}