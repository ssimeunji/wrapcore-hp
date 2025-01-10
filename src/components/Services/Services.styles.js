import styled from 'styled-components';

export const ServicesSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
  background-color: var(--light-bg);
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServiceSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
`;