import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSearchQuery } from '../hooks/useSearchQuery';

const SearchBoxContainer = styled.div`
  position: relative;
  form {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    :after,
    :before {
      box-sizing: border-box;
      border: 0 solid #e5e7eb;
    }

    svg {
      position: absolute;
      color: rgba(156, 163, 175, 0.8);
      transform: translateY(-50%);
      top: 50%;
      left: 10px;
    }
    input {
      width: 100%;
      padding-left: 2.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      border-width: 2px;
      &,
      :focus {
        border-radius: 7rem;
        border-width: 2px;
      }
      :focus {
        border-color: darkgray;
        outline: 2px solid transparent;
        outline-offset: 0;
      }
    }
  }
`;

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
    <SearchBoxContainer>
      <form noValidate onSubmit={handleSubmit}>
        <svg width="20" height="20" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          autoFocus
          value={filter}
          id="filter"
          name="filter"
          onChange={handleInputChange}
          type="text"
          aria-label="Filtrar usuários"
          placeholder="Filtrar usuários"
        />
      </form>
    </SearchBoxContainer>
  );
};

export default SearchBox;
