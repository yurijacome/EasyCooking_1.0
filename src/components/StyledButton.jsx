import styled from 'styled-components';

const StyledButton = styled.button`

    position: absolute;
    top: 10px;
    left: 94vw;
    
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.textColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.button.backgroundColor};
    color: ${({ theme }) => theme.button.textColor};
  }
`;

export default StyledButton;
