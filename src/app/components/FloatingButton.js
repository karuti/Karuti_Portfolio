import styled from 'styled-components';

const FloatingButton = styled.button`
  background-color: ${props => (props.primary ? '#152314' : '#152314')};
  color: #f6f3e1;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  border: #f6f3e1 1px solid;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  position: fixed;
  z-index: 50;
  bottom: 24px;
  left: 46%;

  &:hover {
    background-color: ${props => (props.primary ? '#152314' : '#b9b173')};
  }

  &:active {
    background-color: ${props => (props.primary ? '#152314' : '#b9b173')};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default FloatingButton;