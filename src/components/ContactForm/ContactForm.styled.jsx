import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  border-radius: 7px;
  margin-bottom: 40px;
  padding: 20px;
  box-shadow: 5px 6px 4px #1cc7c4;
  background-color: rgb(0, 255, 238);
  &:hover {
    box-shadow: 1px 2px 1px #115c5a, 3px 5px 4px #115c5a, 5px 11px 8px #115c5a,
      10px 20px 15px #1cc7c4;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Label = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #1cc7c4;
  font-size: 25px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #1cc7c4;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 30px;
  outline: none;
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #1cc7c4;
  font-size: 20px;
  box-shadow: 5px 6px 4px #1cc7c4;

  &:hover,
  &:focus {
    outline: 1px solid #115c5a;
    transition: outline 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const InputBottom = styled(Input)`
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: block;
  width: 50%;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 5px 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1cc7c4;
  background-color: #fff;
  box-shadow: 5px 6px 4px #1cc7c4;
  text-shadow: 2px 1px 2px #1cc7c4;

  &:hover {
    color: #fff;
    background-color: #115c5a;
    box-shadow: 1px 2px 1px #115c5a, 3px 5px 4px #115c5a, 5px 11px 8px #115c5a,
      10px 20px 15px #115c5a;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
