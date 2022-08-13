import axios from 'axios'

const { REACT_APP_YOUTUBE_COMMENT_API_URL } = process.env

export const getComments = async (url: string) => {
    console.log(url);

    const response = await axios.get(`${REACT_APP_YOUTUBE_COMMENT_API_URL}/youtube/comments?results=${url}`, {
        headers: { Accept: 'application/json' }
    });
    // const data = await response.json();
    return response;
}