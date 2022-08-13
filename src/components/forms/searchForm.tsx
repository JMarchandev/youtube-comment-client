import SearchInput from "../home/searchInput";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <SearchInput />
    </form>
  );
};

export default SearchForm;
