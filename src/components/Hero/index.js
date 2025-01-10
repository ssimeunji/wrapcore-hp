import React, { useState, useEffect } from 'react';
import * as S from './Hero.styles';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      tagline: "Digital Innovation Partner",
      title: (
        <>
          혁신적인 기술로<br />
          <S.HighlightText>디지털 트랜스포메이션</S.HighlightText>을<br />
          선도합니다
        </>
      ),
      description: (
        <>
          AI, 클라우드, IoT 기술을 통해 비즈니스의 새로운 가치를 창출하고 고객의 디지털 혁신을 지원합니다
        </>
      )
    },
    {
      tagline: "Technology Leadership",
      title: (
        <>
          최신 기술로<br />
          <S.HighlightText>미래를 선도하는</S.HighlightText><br />
          기술 리더
        </>
      ),
      description: (
        <>
          음성인식, 빅데이터, AI 등 첨단 기술을 활용하여 고객의 비즈니스에 혁신적인 솔루션을 제공합니다
        </>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.HeroSection id="hero">
      <S.HeroBackground>
        <S.GridPattern />
        <S.GradientOverlay />
      </S.HeroBackground>
      
      <S.HeroContainer>
        <S.ContentWrapper>
          <S.SlideContainer>
            {slides.map((slide, index) => (
              <S.HeroContent
                key={index}
                isActive={activeSlide === index}
                isNext={activeSlide === (index === 0 ? 1 : 0)}
              >
                <S.HeroTagline>{slide.tagline}</S.HeroTagline>
                <S.HeroTitle>{slide.title}</S.HeroTitle>
                <S.HeroDescription>{slide.description}</S.HeroDescription>
              </S.HeroContent>
            ))}
          </S.SlideContainer>

          <S.HeroButtons>
            <S.PrimaryButton href="#contact">
              문의하기
              <S.ButtonIcon>→</S.ButtonIcon>
            </S.PrimaryButton>
            <S.SecondaryButton href="#projects">
              프로젝트 보기
            </S.SecondaryButton>
          </S.HeroButtons>
        </S.ContentWrapper>

        <S.StatsContainer>
          <S.StatItem>
            <S.StatNumber>15+</S.StatNumber>
            <S.StatLabel>Years of Experience</S.StatLabel>
          </S.StatItem>
          <S.StatDivider />
          <S.StatItem>
            <S.StatNumber>100+</S.StatNumber>
            <S.StatLabel>Projects Completed</S.StatLabel>
          </S.StatItem>
          <S.StatDivider />
          <S.StatItem>
            <S.StatNumber>50+</S.StatNumber>
            <S.StatLabel>Enterprise Clients</S.StatLabel>
          </S.StatItem>
        </S.StatsContainer>
      </S.HeroContainer>
    </S.HeroSection>
  );
};

export default Hero;