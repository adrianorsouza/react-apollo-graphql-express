import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardContent from './CardContent';
const Card = ({ user: { picture, name, age, eyeColor, company, email } }) => {
  return (
    <div className="shadow rounded-md hover:bg-purple-600 overflow-auto">
      <a href="/" title="">
        <CardImage src={picture} name={name} />
        <CardContent
          name={name}
          age={age}
          eyeColor={eyeColor}
          company={company}
          email={email}
        />
      </a>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    eyeColor: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Card;
