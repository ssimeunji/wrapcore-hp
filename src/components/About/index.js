import React from 'react';
import * as S from './About.styles';

const About = () => {
  const stats = [
    { number: '2018', label: '설립연도' },
    { number: '38', label: '임직원' },
    { number: '11+', label: '주요 프로젝트' },
    { number: '3', label: '사업본부' }
  ];

  return (
    <S.AboutSection id="about">
      <S.AboutContainer>
        <S.SectionTitle>회사 소개</S.SectionTitle>
        <S.AboutGrid>
          <S.AboutContent>
            <S.AboutHeading>랩코어는 혁신적인 IT 솔루션을 제공하는 기술 기업입니다</S.AboutHeading>
            <S.AboutText>
              2018년 설립 이후, IP Media 플랫폼, 앱/웹 Push 플랫폼, IPCC/AICC 통합 콜센터, 
              빌딩 플랫폼(BMS) 구축 등 다양한 분야에서 혁신적인 솔루션을 제공해왔습니다.
            </S.AboutText>
            <S.StatsGrid>
              {stats.map((stat, index) => (
                <S.StatItem key={index}>
                  <S.StatNumber>{stat.number}</S.StatNumber>
                  <S.StatLabel>{stat.label}</S.StatLabel>
                </S.StatItem>
              ))}
            </S.StatsGrid>
          </S.AboutContent>
          <S.AboutImage>
            {/* 회사 이미지 추가 */}
          </S.AboutImage>
        </S.AboutGrid>
      </S.AboutContainer>
    </S.AboutSection>
  );
};

export default About;