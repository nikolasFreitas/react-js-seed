import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
`;

export const UseBox = Styled.div`
  max-width: 1050px;
  padding: 0px 15px;
  margin: 0px auto;
`;

export const ExplanationParagraph = Styled.p`
  max-width: 450px;
  margin: 15px auto;
  color: #393939;
`;

export const ReduxParagraph = Styled(ExplanationParagraph)`
  text-align: center;
`;

export const Title = Styled.h1`
  text-align: center;
  color: #282828;
`;

export const Button = Styled.button`
  border: 1px solid transparent;

  padding: 5px 15px;
  background: black;
  color: #bababa;
`;

export const ReduxContent = Styled.span`
  padding: 0px 15px;
  font-weight: bold;
`;
