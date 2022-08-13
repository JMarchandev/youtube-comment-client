import { Form } from "react-bootstrap";

export const SearchInput = () => {
  return (
    <Form.Control
      name="search-youtube-comments-input"
      className="home--body-input mt-3 p-2 w-75 m-auto"
      type="text"
      placeholder="Enter youtube URL"
    />
  );
};

export default SearchInput;
