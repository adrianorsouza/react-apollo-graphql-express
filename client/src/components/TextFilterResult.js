import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles';

const Paragraph = styled.p`
  color: ${colors.gray['500']};
  font-size: 0.875rem;
  margin-bottom: 1.25rem;

  span {
    color: ${colors.indigo['500']};
  }
`;

const TextFilterResult = ({ data, search }) => {
  return (
    <Paragraph>
      Sua pesquisa para <span>{search}</span> retornou{' '}
      {(!data.list.length && 'nenhum resultado') || (
        <>
          <strong>{data.list.length}</strong>
          {` `}
          {(data.list.length > 1 && `itens`) || `item`}
        </>
      )}
    </Paragraph>
  );
};

TextFilterResult.propTypes = {
  search: PropTypes.string,
  data: PropTypes.shape({
    list: PropTypes.array,
  }),
};

export default TextFilterResult;
