import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ContentWrapper from '../containers/ContentWrapper';
import { gql, useQuery } from '@apollo/client';

const FETCH_USERS = gql`
  query Users {
    list(name: "") {
        _id
        name
        picture
        age
        eyeColor
        company
        friends {
            name
            picture
        }
    }
  }
`;

const Home = (props) => {
  const { data, loading, error } = useQuery(FETCH_USERS, {fetchPolicy: "cache-first"});

  if (error) return <div>{error}</div>

  if (loading) return <div>{JSON.stringify(loading)}</div>;

  return (
    <ContentWrapper>
      <div className="grid gap-5 md:grid-cols-6">
        {data &&
          data.list &&
          data.list.map((user) => (
            <Link
              key={user._id}
              to={`/profile/${user._id}`}
              title={`Perfil de ${user.name}`}
            >
              <Card user={user} />
            </Link>
          ))}
      </div>
    </ContentWrapper>
  );
};

export default Home;
