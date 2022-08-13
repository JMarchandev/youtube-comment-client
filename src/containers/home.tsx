import * as YoutubeCommentApi from "../services/api/youtubeComment";

import { Container } from "react-bootstrap";
import { HomeCss } from "../assets/css/home";
import HomeTitle from "../components/home/homeTitle";
import SearchForm from "../components/forms/searchForm";

export const Home = () => {
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget["search-youtube-comments-input"].value) {
      const url = e.currentTarget["search-youtube-comments-input"].value;
      // console.log(e.currentTarget["search-youtube-comments-input"].value);
      YoutubeCommentApi.getComments(url).then(console.log).catch(console.log);
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
