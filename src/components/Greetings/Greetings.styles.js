import styled from 'styled-components';

export const GreetingsSection = styled.section`
  min-height: calc(100vh - 60px);
  padding: 100px 0;
  background-color: var(--light);
`;

export const GreetingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  text-align: center;
  margin-bottom: 1rem;
`;

export const GreetingsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
`;

export const GreetingsTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1.5rem;
  text-align: left;

  & > label {
    color: var(--secondary);
    margin-right: 0.5rem;
  }
`;

export const GreetingsContent = styled.p`
  color: var(--text);
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;
`;

export const CEOName = styled.h3`
  font-size: 1.2rem; // CEO 이름 크기 증가
  color: var(--dark);
  margin-top: 2rem; // 위쪽 여백 추가
  
  & > label {
    font-weight: 600;
    font-size: 1.5rem; // CEO 이름 크기 증가
`;

export const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: var(--primary);
  margin: 1.5rem 0; // 인용문 여백
  border-left: 4px solid var(--primary); // 인용문 왼쪽 테두리
  padding-left: 1rem; // 인용문 왼쪽 패딩
`;