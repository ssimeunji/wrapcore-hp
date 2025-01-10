import React, { useState, useEffect } from 'react';
import * as S from './ScrollToTop.styles';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <S.ScrollButton 
      show={showButton} 
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      <IoIosArrowUp />
    </S.ScrollButton>
  );
};

export default ScrollToTop;