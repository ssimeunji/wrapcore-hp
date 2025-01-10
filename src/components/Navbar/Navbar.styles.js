import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease;
  background: ${({ scrollNav }) => 
    scrollNav 
      ? 'rgba(255, 255, 255, 0.75)' 
      : 'transparent'
  };
  box-shadow: ${({ scrollNav }) => 
    scrollNav 
      ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
      : 'none'
  };
  backdrop-filter: ${({ scrollNav }) => 
    scrollNav 
      ? 'blur(10px)' 
      : 'none'
  };
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

export const NavLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const LogoText = styled.span`
  color: ${({ scrollNav }) => 
    scrollNav 
      ? 'var(--dark)' 
      : 'var(--white)'
  };
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: ${({ scrollNav, isActive }) => {
    if (isActive) return 'var(--primary)';
    return scrollNav ? 'var(--dark)' : 'var(--white)';
  }};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${({ isActive }) => isActive ? '600' : '500'};
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
    transform: scaleX(${({ isActive }) => isActive ? '1' : '0'});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary);

    &::after {
      transform: scaleX(1);
    }
  }
`;

export const NavButton = styled.button`
  background: ${({ isActive }) => 
    isActive ? 'var(--secondary)' : 'var(--primary)'};
  color: var(--white);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: ${({ isActive }) => isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;