import * as YoutubeCommentService from "../services/YoutubeCommentService";

import { Container } from "react-bootstrap";
import { HomeCss } from "../assets/css/home";
import HomeTitle from "../components/home/homeTitle";
import { Result } from "../services/types/commentsResult";
import SearchForm from "../components/forms/searchForm";

type Props = {
  onResults: (results: Result) => void;
};

export const Home = ({ onResults }: Props) => {
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget["search-youtube-comments-input"].value) {
      const url = e.currentTarget["search-youtube-comments-input"].value;
      
      YoutubeCommentService.getComments(url)
        .then((res: Result) => {
          onResults(res);
        })
        .catch((err) => console.log("err", err));
    }
  };

  return (
    <>
      <style>{HomeCss()}</style>
      <div className="home--body d-flex justify-content-center align-items-center ">
        <Container>
          <HomeTitle />
          <SearchForm onSubmit={handleSubmitSearch} />
        </Container>
      </div>
    </>
  );
};
