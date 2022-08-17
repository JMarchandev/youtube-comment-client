import { Container } from "react-bootstrap";
import { HomeCss } from "../assets/css/home";
import HomeTitle from "../components/home/homeTitle";
import SearchForm from "../components/forms/searchForm";

type Props = {
  onSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Home = ({ onSubmitSearch }: Props) => {
  return (
    <>
      <style>{HomeCss()}</style>
      <div className="home--body d-flex justify-content-center align-items-center ">
        <Container>
          <HomeTitle />
          <SearchForm onSubmit={onSubmitSearch} />
        </Container>
      </div>
    </>
  );
};
