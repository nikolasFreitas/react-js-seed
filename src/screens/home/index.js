import React, { useState } from 'react';
import PropTypes from 'prop-types';

import withInteractive from '../../store/redux/containers/withInteractive';
import SomeGenericComponent from '../../components/SomeGenericComponent';
import ghHttpHelper from './helper';
import * as Style from './style';

/**
 * As props que começam com "RX_" são injetadas pelo HOC e manipulam o ReduX.
 * Props que não são injetadas pelo HOC devem seguir o padrão de camelCase
 * Nas screens, tentar usar helpers para requisição para reduzir a quantidade de lógica sobre a screen
 * Este é apenas um exemplo, evite ao máximo usar estados em escopo global (REDUX)
 */
const Home = ({
  RX_count, RX_text, RX_changeText, RX_changeCount,
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
            {RX_count}
          </Style.ReduxContent>
          <Style.ReduxContent>
redux text:
            {' '}
            {RX_text}
          </Style.ReduxContent>
        </Style.ReduxParagraph>
        <Style.ReduxParagraph>
          <Style.ReduxContent>
            <Style.Button onClick={() => {
              setUseOfRredux(useOfRredux + 1);
              RX_changeCount(RX_count + 1);
            }}
            >
              add count
            </Style.Button>
          </Style.ReduxContent>
          <Style.ReduxContent>
            <Style.Button onClick={() => {
              setUseOfRredux(useOfRredux + 1);
              RX_changeText('Texto mudou');
            }}
            >
Change text

            </Style.Button>
          </Style.ReduxContent>
        </Style.ReduxParagraph>
        <Style.ExplanationParagraph>
          Para um requisição falhada clicke no botão
          {' '}
          <br />
          (Olhar o log)
          <Style.Button onClick={() => ghHttpHelper()}>click aqui</Style.Button>
        </Style.ExplanationParagraph>
        <SomeGenericComponent />
      </Style.UseBox>
    </Style.Container>
  );
};

Home.propTypes = {
  RX_count: PropTypes.number.isRequired,
  RX_text: PropTypes.string.isRequired,
  RX_changeText: PropTypes.func.isRequired,
  RX_changeCount: PropTypes.func.isRequired,
};

export default withInteractive(Home);
