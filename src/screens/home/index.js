import React, { useState } from 'react';
import PropTypes from 'prop-types';

import withInteractive from '../../store/redux/containers/withInteractive';
import SomeGenericComponent from '../../components/SomeGenericComponent';
import * as Style from './style';

const Home = ({
  R_count, R_text, R_changeText, R_changeCount,
}) => {
  const [useOfRredux, setUseOfRredux] = useState(0);

  return (
    <Style.Container>
      <Style.UseBox>
        <Style.Title>Bem-vindo à seed de React</Style.Title>
        <Style.ExplanationParagraph>
          Essa é uma screen de exemplo de conexão ao redux com High Order Component
        </Style.ExplanationParagraph>
        <Style.ExplanationParagraph>E também de hooks :)</Style.ExplanationParagraph>
        <Style.ExplanationParagraph>
          Usos do Redux
          {' '}
          {useOfRredux}
        </Style.ExplanationParagraph>
        <Style.ReduxParagraph>
          <Style.ReduxContent>
redux counter:
            {' '}
            {R_count}
          </Style.ReduxContent>
          <Style.ReduxContent>
redux text:
            {' '}
            {R_text}
          </Style.ReduxContent>
        </Style.ReduxParagraph>
        <Style.ReduxParagraph>
          <Style.ReduxContent>
            <Style.Button onClick={() => {
              setUseOfRredux(useOfRredux + 1);
              R_changeCount(R_count + 1);
            }}
            >
              add count
            </Style.Button>
          </Style.ReduxContent>
          <Style.ReduxContent>
            <Style.Button onClick={() => {
              setUseOfRredux(useOfRredux + 1);
              R_changeText('Texto mudou');
            }}
            >
Change text

            </Style.Button>
          </Style.ReduxContent>
        </Style.ReduxParagraph>
        <SomeGenericComponent />
      </Style.UseBox>
    </Style.Container>
  );
};

Home.propTypes = {
  R_count: PropTypes.number.isRequired,
  R_text: PropTypes.string.isRequired,
  R_changeText: PropTypes.func.isRequired,
  R_changeCount: PropTypes.func.isRequired,
};

export default withInteractive(Home);
