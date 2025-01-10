import styled from 'styled-components';
import aboutImage from '../../assets/images/about-tech.jpg';

export const AboutSection = styled.section`
  padding: 100px 0;
  background: var(--white);
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 3rem;
  text-align: center;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutContent = styled.div`
  
`;

export const AboutHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text);
  font-weight: 500;
`;

export const AboutImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${aboutImage});
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover::before {
    transform: scale(1.05);
  }
`;