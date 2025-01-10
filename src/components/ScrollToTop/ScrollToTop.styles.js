import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 45px;
  height: 45px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transform: translateY(${({ show }) => (show ? '0' : '20px')});
  z-index: 999;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;