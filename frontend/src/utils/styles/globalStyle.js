import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const globalStyle = createGlobalStyle`
  * {
    font-family: 'font1';
    color: ${colors.secondary};
  }
  .container {
    margin-top: 50px;
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
  }
  h1 {
    color: ${colors.primary};
    font-family: 'font2';
    text-align: center;
    text-transform: uppercase;
    border: 1px solid ${colors.secondary};
    background-color: ${colors.secondary};
    margin-top: 0;
    border-radius : 10px 10px 0 0;
  }
  .sub {
    display: grid;
    grid-template-columns: 60% 40%;
  }
  form {
    margin: 20px;
  }
  .input {
    margin: 20px;
  }
  label {
    color: ${colors.primary};
    font-size: 1.3rem;
    display: inline-block;
    width: 300px;
  }
  input, select {
    font-size: 1.3rem;
    height: 40px;
  }
  .btn-valider {
    border-radius: 10px;
    color: ${colors.primary};
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${colors.primary};
      color: ${colors.third};
    }
  }
  .informations {
    border: 1px solid ${colors.primary};
    margin: 40px;
    border-radius: 10px;
  }
  h2 {
    background: ${colors.primary};
    color: ${colors.third};
    margin-top: 0;
    text-align: center;
    border-radius: 10px 10px 0 0;
    font-size: 1.7rem;
  }
`;

export default globalStyle;
