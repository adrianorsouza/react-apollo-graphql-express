import React from 'react';
import { Link } from 'react-router-dom';
import data from '../db.json';
import Card from '../components/Card';
import ContentWrapper from '../containers/ContentWrapper';

const Home = (props) => {
  return (
    <ContentWrapper>
      <div className="grid gap-5 md:grid-cols-6">
        {data.map((user) => (
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
