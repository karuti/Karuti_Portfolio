import styled from 'styled-components';

// Define the styled button component
const Chip = styled.button`
  background-color: ${props => props.primary ? '#152314' : '#152314'};
  color: #F6F3E1;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border: #F6F3E1 1px solid;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#152314' : '#B9B173'};
  }

  &:active {
    background-color: ${props => props.primary ? '#152314' : '#B9B173'};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;



export default Chip;