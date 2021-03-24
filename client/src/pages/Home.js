import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ContentWrapper from '../containers/ContentWrapper';
import { gql, useQuery } from '@apollo/client';
import { useSearchQuery } from '../hooks/useSearchQuery';

const FETCH_USERS = gql`
  query Users($name: String) {
    list(name: $name) {
      _id
      name
      picture
      age
      eyeColor
      company
    }
  }
`;

const Home = (props) => {
  let search = useSearchQuery().get('search') || '';
  const { data, loading, error } = useQuery(FETCH_USERS, {
    fetchPolicy: 'cache-first',
    variables: {
      name: search,
    },
  });

  if (error) return <div>{error.message}</div>;

  if (loading) return <div>{JSON.stringify(loading)}</div>;

  return (
    <>
      <ContentWrapper>
        <div>
          {search && (
            <p className="text-gray-500 text-sm mb-5">
              Sua pesquisa para{' '}
              <span className="text-indigo-500">{search}</span> retornou{' '}
              {(!data.list.length && 'nenhum resultado') || (
                <>
                  <strong>{data.list.length}</strong>
                  {` `}
                  {(data.list.length > 1 && `itens`) || `item`}
                </>
              )}
            </p>
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-6">
          {data && !data.list.length && <p>Nenhum registro encontrado</p>}
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
    </>
  );
};

export default Home;
