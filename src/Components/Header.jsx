import { DebounceInput } from "react-debounce-input";

function Header({ onChange, value }) {
  return (
    <header className="header flex flex-row justify-end my-2 mr-1 px-5 py-5 bg-gradient-to-r from-pink-300/40 to-pink-200/40 to-pink-100/40 rounded-md">
      <label className="text-black" htmlFor="seach">
        SEARCH
      </label>
      <DebounceInput
        debounceTimeout={300}
        className="ml-5 rounded-sm"
        id="search"
        name="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </header>
  );
}

export default Header;
