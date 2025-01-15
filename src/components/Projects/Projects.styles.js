import styled from 'styled-components';

export const ProjectsSection = styled.section`
  min-height: calc(100vh - 60px);
  padding: 100px 0;
  background-color: var(--lighter-bg);
`;

export const ProjectsContainer = styled.div`
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

export const ProjectsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark);
  text-align: center; // 중앙 정렬 추가
  flex: 1; // 전체 너비 사용
`;

export const ProjectCategory = styled.span`
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(74, 158, 255, 0.1);
  border-radius: 20px;
`;

export const ProjectDate = styled.span`
  font-size: 0.9rem;
  color: var(--text-light);
`;

export const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.2rem; // description이 없으므로 하단으로 이동
  padding-top: 1.5rem;
`;

export const TechTag = styled.span`
  font-size: 0.85rem;
  color: var(--text);
  background: var(--light-bg);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
`;

export const ProjectClient = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
`;
export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 80px;
`;

export const ClientLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-light);
`;

export const ClientName = styled.span`
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
`;

export const ButtonIcon = styled.span`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto 0;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  background: var(--primary);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);

    ${ButtonIcon} {
      transform: translateY(${({ isExpanded }) => isExpanded ? '-3px' : '3px'});
    }
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PopupTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-light);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  
  &:hover {
    color: var(--dark);
  }
`;

export const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PopupCategory = styled(ProjectCategory)`
  display: inline-block;
  width: fit-content;
`;

export const PopupDate = styled(ProjectDate)`
  margin-top: 0.5rem;
`;

export const PopupDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 1rem 0;
`;

export const PopupDetailItem = styled.div`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.5;
  padding-left: 0.5rem;
`;

export const PopupDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  margin: 1rem 0;
`;

export const PopupTechStack = styled(ProjectTechStack)`
  margin-top: 0rem;
`;

export const PopupClient = styled(ProjectClient)`
  margin-top: 0rem;
`;