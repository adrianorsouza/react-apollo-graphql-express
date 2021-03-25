import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from './';
import { Card, CardHeader, CardBody } from '../containers';
import { eyeColorMap } from '../utils/helpers';
import { colors } from '../styles';

const BodyWrapper = styled.div`
  line-height: 1.625;
  border-bottom-width: 2px;
  margin-bottom: 1.25rem;
`;

const Heading1 = styled.h1`
  font-weight: 600;
  color: ${colors.black};
`;
const Heading1Large = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${colors.black};
`;

const Paragraph = styled.p`
  color: ${colors.gray['300']};
  font-weight: 100;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const TextCompany = styled.strong`
  color: ${colors.gray['100']};
`;

const TextEmail = styled.small`
  color: ${colors.indigo['100']};
`;

const UserCard = ({ user, ...props }) => {
  const { picture, name, age, eyeColor, company, email } = user;
  return (
    <Card>
      <CardHeader>
        <Image src={picture} name={name} {...props} />
      </CardHeader>
      <CardBody>
        <BodyWrapper>
          {(props.size === 'large' && (
            <Heading1Large>{name}</Heading1Large>
          )) || <Heading1>{name}</Heading1>}
          <Paragraph>
            idade <strong>{age}</strong>, olhos{' '}
            <strong>{eyeColorMap(eyeColor)}</strong>
          </Paragraph>
        </BodyWrapper>
        <dl>
          <dt>
            <TextCompany>{company}</TextCompany>
          </dt>
          <dd>
            <TextEmail>{email}</TextEmail>
          </dd>
        </dl>
      </CardBody>
    </Card>
  );
};

UserCard.defaultProps = {
  size: 'normal',
};

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    picture: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    eyeColor: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
  }),
  size: PropTypes.oneOf(['normal', 'large']),
};

export default UserCard;
