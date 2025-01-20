import styled, { keyframes, css } from 'styled-components';
import heroBg1 from '../../assets/images/hero-bg.jpg';
import heroBg2 from '../../assets/images/hero-bg2.jpg';

const zoomInOut = keyframes`
  0% {
    transform: scale(1.2); // 처음에 약간 확대
  }
  100% {
    transform: scale(1); // 원래 크기로 돌아옴
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  // background-color: #004052;
  overflow: hidden;
  padding-top: 80px; // 네비게이션 바 높이만큼 패딩 추가
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  transition: opacity 1.5s ease; // 전환 애니메이션 추가
  animation: ${({ animate }) => (animate ? css`${zoomInOut} 1.5s ease forwards` : 'none')}; // 애니메이션 적용

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${heroBg1}); // 첫 번째 배경 이미지
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${({ activeSlide }) => (activeSlide === 0 ? 1 : 0)}; // 첫 번째 이미지의 opacity
    z-index: -1;
    transition: opacity 1.5s ease; // 전환 애니메이션 추가
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${heroBg2}); // 두 번째 배경 이미지
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${({ activeSlide }) => (activeSlide === 1 ? 1 : 0)}; // 두 번째 이미지의 opacity
    z-index: -1;
    transition: opacity 1.5s ease; // 전환 애니메이션 추가
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 64, 82, 0.95) 0%,
    rgba(0, 64, 82, 0.65) 50%,
    rgba(0, 64, 82, 0.3) 100%
  );
  z-index: 1;

  &::before {
    content: ''; // content 속성 추가
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(128, 128, 128, 0.95) 0%, // 회색빛으로 변경
      rgba(128, 128, 128, 0.65) 50%, // 회색빛으로 변경
      rgba(128, 128, 128, 0.3) 100% // 회색빛으로 변경
    );
    z-index: -1; // z-index 설정
  }
`;

export const GridPattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
  //   linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  z-index: 2;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 300px); // Stats 영역과 상단 패딩을 제외한 높이
  justify-content: center;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: auto;
  min-height: 280px; // 높이 약간 축소
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 5rem; // 상단 여백 축소
  padding-bottom: 1rem; // 하단 여백 축소

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 1.5rem 0; // 패딩 축소
  height: 100px; // 높이 축소
  margin-top: auto;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem 0;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem; // 숫자 크기 더 축소
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 0.8rem; // 라벨 크기 더 축소
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
`;

export const HeroTagline = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #4A9EFF;
  margin-bottom: 1rem; // 여백 축소
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem; // 여백 축소
  color: #FFFFFF;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7; // 줄간격 축소
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem; // 여백 축소
  word-break: keep-all;
  font-weight: 600;
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: translateY(${({ isActive }) => (isActive ? '0' : '20px')});
  transition: opacity 0.8s ease, transform 0.8s ease;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

export const StatItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HighlightText = styled.span`
  color: #4A9EFF;
  position: relative;
  display: inline-block;
  margin: 0 0.2rem;
`;

export const ButtonIcon = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #FFFFFF;
  background: #4A9EFF;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #3182CE;
    transform: translateY(-2px);

    ${ButtonIcon} {
      transform: translateX(5px);
    }
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #FFFFFF;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4A9EFF;
    background: rgba(74, 158, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;