import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link, PageContainer } from '../containers';
import { useSearchQuery } from '../hooks/useSearchQuery';
import { TextFilterResult } from '../components';
import Grid from '../containers/Grid';
import UserCard from '../components/UserCard';
import Alert from '../components/Alert';
import { HomePlaceholder } from '../components/Placeholders';

const FETCH_USERS = gql`
  query Users($name: String) {
    list(name: $name) {
      _id
      name
      email
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

  if (error) return <Alert message={error.message} />;

  return (
    <>
      <PageContainer>
        <HomePlaceholder loading={loading} />
        {search && data && <TextFilterResult search={search} data={data} />}
        <Grid cols={6}>
          {data && !data.list.length && <p>Nenhum registro encontrado</p>}
          {data &&
            data.list &&
            data.list.map((user) => (
              <Link
                key={user._id}
                to={`/profile/${user._id}`}
                title={`Perfil de ${user.name}`}
              >
                <UserCard user={user} />
              </Link>
            ))}
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
