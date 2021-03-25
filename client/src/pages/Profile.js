import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Grid, PageContainer } from '../containers';
import { gql, useQuery } from '@apollo/client';
import { UserCard } from '../components';
import styled from 'styled-components';
import { colors } from '../styles';
import Alert from '../components/Alert';
import ProfilePlaceholder from '../components/ProfilePlaceholder';

const FETCH_USER = gql`
  query UserDetail($id: String!) {
    user(id: $id) {
      _id
      name
      email
      picture
      age
      eyeColor
      company
      friends {
        _id
        name
        picture
        company
        age
        eyeColor
        email
      }
    }
  }
`;

const PageHeader = styled.div`
  display: flex;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
`;
const Button = styled.button`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-right: 1.25rem;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
`;

const Display1 = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

const Display2 = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  small {
    color: ${colors.gray['100']};
  }
`;

const SectionHeader = styled.header`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
`;

const Profile = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const { data, loading, error } = useQuery(FETCH_USER, {
    variables: { id },
    fetchPolicy: 'cache-first',
  });

  if (error) return <Alert message={error.message} />;
  const handleGoBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <PageContainer>
      <PageHeader>
        <Button onClick={handleGoBackClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Button>
        <Display1>Profile</Display1>
      </PageHeader>

      <ProfilePlaceholder loading={loading} />

      {data && data.user && (
        <>
          <section>
            <UserCard user={data.user} size="large" />
          </section>
          <section>
            <SectionHeader>
              <Display2>
                {data.user.name.split(' ').shift()}'s Friends{' '}
                <small>({data.user.friends.length})</small>
              </Display2>
            </SectionHeader>
            <Grid cols={6}>
              {data.user.friends.map((friend) => (
                <UserCard key={friend._id} user={friend} />
              ))}
            </Grid>
          </section>
        </>
      )}
    </PageContainer>
  );
};

export default Profile;
