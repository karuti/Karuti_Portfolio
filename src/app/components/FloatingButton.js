import styled from 'styled-components';


const FloatingButton = styled.button` 
background-color: ${props => props.primary ? '#152314' : '#152314'};
  color: #F6F3E1;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  border: #F6F3E1 1px solid;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  position:fixed;
zIndex: 50;
bottom:24px;
left:46%;


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



function App() {
  return (
    <div style={{ position: 'relative' }}>
      <FloatingButton onClick={() => console.log('Download clicked')}>
        Download Resume
      </FloatingButton>

     
    </div>
  );
}
export default FloatingButton;