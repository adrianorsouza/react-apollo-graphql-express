import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSearchQuery } from '../hooks/useSearchQuery';

const SearchBox = (props) => {
  const history = useHistory();
  let query = useSearchQuery();

  const [filter, setFilter] = React.useState(query.get('search') || '');

  const handleInputChange = (event) => {
    const { value } = event.target;

    // Reset the search query when user input is empty
    // this will get the list of all users
    if (!value.length) {
      history.push(`/`);
    }

    setFilter(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (filter.length) {
      history.push(`/?search=${filter}`);
    }
  };

  return (
    <div className="relative">
      <form className="mt-5 mb-5" noValidate onSubmit={handleSubmit}>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          autoFocus
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          value={filter}
          id="filter"
          name="filter"
          onChange={handleInputChange}
          type="text"
          aria-label="Filtrar usuários"
          placeholder="Filtrar usuários"
        />
      </form>
    </div>
  );
};

export default SearchBox;
