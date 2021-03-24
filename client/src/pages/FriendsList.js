import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import ContentWrapper from '../containers/ContentWrapper';
import { gql, useQuery } from '@apollo/client';

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

const FriendsList = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const { data, loading, error } = useQuery(FETCH_USER, {
    variables: { id },
    fetchPolicy: 'cache-first',
  });

  if (loading) return <div>loading ..</div>;
  if (error) return <div>error {error.message}</div>;
  if (!data) return <div>Not Found</div>;

  const { picture, name, email, age, friends } = data.user;

  const handleGoBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <ContentWrapper>
      <div className="mb-5 flex pt-5 pb-5">
        <button className="text-3xl mr-5" onClick={handleGoBackClick}>
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
        </button>
        <h1 className="text-3xl">Profile</h1>
      </div>
      <section>
        <div className="flex mb-5 pt-5 pb-5 border-b-2 border-gray-200 block w-auto">
          <div className="mr-5">
            <picture>
              <img
                src={picture}
                alt={name}
                className="h-auto rounded-full ring-4 ring-offset-4 inset-1/4"
                width={128}
                height={128}
              />
            </picture>
          </div>
          <div>
            <h2 className="font-semibold text-black font-display text-3xl mb-2">
              {name}
            </h2>
            <dl>
              <dt className="text-gray-400 font-semibold">Idade: {age}</dt>
              <dd className="text-gray-500 font-semibold">{email}</dd>
            </dl>
          </div>
        </div>
      </section>
      <section>
        <header className="pt-5 pb-5">
          <h2 className="font-semibold text-2xl">
            Amigos <small className="text-gray-300">({friends.length})</small>
          </h2>
        </header>
        <article className="grid md:grid-cols-6 gap-4">
          {friends.map((friend) => (
            <div key={friend._id}>
              <Card key={friend._id} user={friend} />
            </div>
          ))}
        </article>
      </section>
    </ContentWrapper>
  );
};

export default FriendsList;
