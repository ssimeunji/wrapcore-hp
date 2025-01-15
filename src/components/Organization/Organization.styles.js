import styled from 'styled-components';
import organizationImage from '../../assets/images/organization_chart.png';   

export const OrganizationSection = styled.section`
  min-height: calc(100vh - 60px);
  padding: 100px 0;
  background: var(--lighter-bg);
`;

export const OrganizationContainer = styled.div`
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

export const OrganizationSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
`;

export const OrganizationImage = styled.div`
 width: 100%;
 height: 400px;
 background-image: url(${organizationImage});
 background-size: contain;
 background-position: center;
 background-repeat: no-repeat;
 margin: 0 auto;
`;