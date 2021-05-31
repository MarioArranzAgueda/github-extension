import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 4px;
  position: relative;
  width: 4rem;
  height: 2rem;
  outline: none;
  :focus{
    outline: none;   
  }
  svg {
    height: 20px;
    width: 20px;
    transition: all 0.2s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(50px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      color: #ffffff;
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-50px)' : 'translateY(0)'};
    }
  }
`;