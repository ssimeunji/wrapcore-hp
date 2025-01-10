import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: var(--white);
  border-top: 1px solid #eee;
  padding: 25px 0 15px; // 40px 0 20px 에서 축소
`;

export const LogoSection = styled.div`
  margin-top: 1.5rem;
`;

export const LogoImage = styled.img`
  height: 24px;
  width: auto;
  display: block;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 1.5rem에서 축소
`;

export const LocationItem = styled.div`
  display: flex;
  gap: 2rem;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LocationTitle = styled.h3`
  font-size: 0.9rem;
  color: #666666;
  font-weight: 500;
  min-width: 80px;
`;

export const AddressInfo = styled.p`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.6;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContactItem = styled.span`
  font-size: 0.9rem;
  color: #999999;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:before {
    content: '';
    display: ${props => props.showDivider ? 'block' : 'none'};
    width: 1px;
    height: 12px;
    background-color: #e0e0e0;
    margin-right: 10px;
  }
`;

export const ContactLabel = styled.span`
  color: #999999;
`;

export const ContactValue = styled.a`
  color: #666666;
  text-decoration: none;

  &:hover {
    color: #FDB813; // WeZON 사이트의 강조색
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem; // 1.5rem에서 축소
  border-top: 1px solid #eee;
  margin-top: 0.8rem; // 1rem에서 축소

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem; // 1rem에서 축소
    align-items: flex-start;
  }
`;

export const Copyright = styled.p`
  font-size: 0.85rem;
  color: #999999;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialLink = styled.a`
  font-size: 0.9rem;
  color: #666666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #FDB813;
  }
`;