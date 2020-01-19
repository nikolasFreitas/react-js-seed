import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './style';

const SomeGenericComponent = ({ someText }) => (
  <Styled.Container>
    <Styled.Button onClick={() => alert(`Clicked => ${someText}`)}>{someText}</Styled.Button>
  </Styled.Container>
);

SomeGenericComponent.propTypes = {
  someText: PropTypes.string,
};

SomeGenericComponent.defaultProps = {
  someText: 'Não setado',
};

export default SomeGenericComponent;
