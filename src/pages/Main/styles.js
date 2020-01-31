import styled from 'styled-components';

export const Container = styled.div`
display: flex;
padding-top: 40px;
flex-direction: column;
align-items: center;

  img {
    width: 100px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    border-radius: 5px;
    font-size: 18px;
    color: #444;

    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63F5B0;
    color: #FFF;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #52D89F;
    }

    &:active {
      background: #02A357;
    }
  }
`;
