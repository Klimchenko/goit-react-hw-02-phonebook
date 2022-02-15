import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  width: 500px;
  height: auto;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 0;
  border-radius: 7px;
  background-color: rgb(0, 255, 238);
  box-shadow: 5px 6px 4px #1cc7c4;

  &:hover {
    box-shadow: 1px 2px 1px #115c5a, 3px 5px 4px #115c5a, 5px 11px 8px #115c5a,
      10px 20px 15px #1cc7c4;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #1cc7c4;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 2px 1px 2px #1cc7c4;
`;

export const Input = styled.input`
  width: 460px;
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
