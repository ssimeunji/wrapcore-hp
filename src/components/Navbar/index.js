import React, { useState, useEffect } from 'react';
import * as S from './Navbar.styles';

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'services', label: '서비스' },
    { id: 'projects', label: '프로젝트' },
    { id: 'greetings', label: '인삿말' },
    { id: 'history', label: '연혁' },
    { id: 'contact', label: '문의하기' }
  ];

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      const threshold = 100;

      // 각 섹션의 위치를 확인하고 현재 보이는 섹션을 결정
      let currentSection = sections[0].id;
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션의 상단이 화면 상단에서 1/3 지점보다 위에 있으면 해당 섹션을 활성화
          if (rect.top <= window.innerHeight / 3) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', changeNav);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 실행

    return () => {
      window.removeEventListener('scroll', changeNav);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]); // sections를 의존성 배열에 추가

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <S.Nav scrollNav={scrollNav}>
      <S.NavContainer>
        <S.NavLogo onClick={() => scrollToSection('hero')}>
          <S.LogoText scrollNav={scrollNav}>WRAPCORE</S.LogoText>
        </S.NavLogo>
        <S.NavMenu>
          {sections.slice(0, -1).map(({ id, label }) => (
            <S.NavItem key={id}>
              <S.NavLink 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }} 
                href={`#${id}`}
                scrollNav={scrollNav}
                isActive={activeSection === id}
              >
                {label}
              </S.NavLink>
            </S.NavItem>
          ))}
          <S.NavButton 
            onClick={() => scrollToSection('contact')}
            isActive={activeSection === 'contact'}
          >
            문의하기
          </S.NavButton>
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  );
};

export default Navbar;