import React, { useState } from 'react';
import * as S from './Projects.styles';

const Projects = () => {
  const INITIAL_COUNT = 6;
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_COUNT);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "KT 엠스토리지",
      date: "2018.02",
      category: "클라우드 스토리지",
      tech: ["Java", "Swift3", "Python", "C++"],
      client: "KT",
      description: "개인의 사진, 동영상, 음악을 포함한 파일들을 편리하게 보관하고 재생할 수 있는 클라우드 스토리지 서비스입니다.",
      details: [
        "클라우드 스토리지 제공",
        "자체 구축 및 모든 개발 진행",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "영어소리동화",
      date: "2018.03", 
      category: "음성인식",
      tech: ["C++", "Java"],
      client: "기가지니 / Mobile (AOS)",
      description: "다국어 서비스에 실시간 부분 인식 기능이 적용된 음성인식 서비스입니다.",
      details: [
        "한국어 및 다국어 음성인식 서버 구축",
        "다국어 동시 음성인식 출력 인터페이스 제작", 
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "Callavo ARS",
      date: "2018.11",
      category: "보는 ARS",
      tech: ["Java", "C++"],
      client: "KT (100/114)",
      description: "전통적인 ARS 기능의 사용성 및 편의성을 강화한 새로운 고객 만족형 ARS 서비스입니다.",
      details: [
        "보는 ARS용 WebVRS 시스템 구성",
        "어플리케이션 기반의 통화 화면 위 UI 개발",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "AirMap Korea",
      date: "2019.11",
      category: "IoT, 날씨",
      tech: ["Java", "JBoss"],
      client: "KT",
      description: "AirMap Korea는 에어코리아, 케이워더, KT IoT에서 받은 정보를 기반으로 사용자의 위치에 해당하는 공기질 수치를 표시하는 서비스입니다.",
      details: [
        "사용자 위치 기반 공기질 측정",
        "KT P/F 및 외부 P/F 연계 APP 기반",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "GiGA Genie inside",
      date: "2020.02",
      category: "기가지니, I/F, OAM",
      tech: ["Java", ".NET", "Python", "C++"],
      client: "KT",
      description: "기가지니의 다양한 OS에 대응한 모바일 SDK 개발 및 서버에 필요한 로그 분석 및 모니터링 툴 개발입니다.",
      details: [
        "SDK 및 서버 사이드 개발",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "지자체 DX",
      date: "2021.03",
      category: "DX",
      tech: ["Java"],
      client: "지자체",
      description: "시민 참여를 통한 지역공통체 및 경제 활성화, 소상공인의 골목상권 경기 부양을 위한 솔루션을 제공합니다.",
      details: [
        "지역화폐 플랫폼 구축",
        "DID SDK 및 플랫폼 연동",
        "모바일 연동 서버 및 지자체 DX 앱 개발",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "우체국 차세대 종합금융시스템",
      date: "2022.04",
      category: "금융서비스",
      tech: ["Java"],
      client: "우체국",
      description: "비대면 채널 접근성과 편의성이 유용한 고객 화면을 제공하고, 빅데이터 분석 및 로보 어드바이저를 통해 최적의 금융상품 추천 및 종합자산관리서비스를 제공합니다.",
      details: [
        "금융 서비스 개발"
      ]
    },
    {
      title: "AI 링고 통합 콜센터",
      date: "2023.09",
      category: "연계시스템, 콜센터",
      tech: ["C", "C++"],
      client: "KT",
      description: "AI 링고 고객응대, 녹취, 업무 분배 기능을 제공하는 통합 콜센터 개발입니다.",
      details: [
        "교환기 연계 시스템 개발",
        "관리자 UI 개발",
        "시스템 운영"
      ]
    },
    {
      title: "AICC",
      date: "2023.10",
      category: "AICC",
      tech: ["Java"],
      client: "KT",
      description: "중대형 고객사의 경우 보이스봇을 콜센터(최소한 고객 상담원)와 연동하고, 관리자 포털에서 콜 인프라 리소스를 조회 및 관리하는 기능을 개발합니다.",
      details: [
        "AICC API 개발",
        "관리자 UI 개발",
        "시스템 운영"
      ]
    },
    {
      title: "AI 링고",
      date: "2023.11",
      category: "링고",
      tech: ["Java"],
      client: "KT (100/114)",
      description: "사용자의 통화 내역 및 메모 내용을 기반으로 기존 서비스의 편의성을 개선한 AI 통화비서 API 활용 어플리케이션 기반 통화 화면 위 UI를 개발합니다.",
      details: [
        "AI 통화비서 API 활용",
        "시스템 운영 및 VOC 처리"
      ]
    },
    {
      title: "삼성물산 BMS 솔루션",
      date: "2024.05 ~",
      category: "BMS",
      tech: ["Java", "Swift"],
      client: "삼성물산",
      description: "빌딩 가치 제고 및 신규 비즈니스 모델 개발을 목적으로 클라우드 기반 빌딩 플랫폼 구축 및 레퍼런스 확보, 해당 플랫폼 사용자 경험을 제공합니다.",
      details: [
        "AI 통화비서 API 활용 어플리케이션 기반 통화 화면 위 UI 개발",
        "시스템 운영 및 VOC 처리"
      ]
    }
  ];

  const toggleProjects = () => {
    if (isExpanded) {
      setVisibleProjects(INITIAL_COUNT);
      setIsExpanded(false);
      
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setVisibleProjects(projects.length);
      setIsExpanded(true);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsContainer>
        <S.SectionTitle>Projects</S.SectionTitle>
        <S.ProjectsSubtitle>
          랩코어가 만들어온 혁신적인 프로젝트들을 소개합니다
        </S.ProjectsSubtitle>
        
        <S.ProjectsGrid>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <S.ProjectCard 
              key={index} 
              onClick={() => handleProjectClick(project)}
            >
              <S.ProjectHeader>
                <S.ProjectCategory>{project.category}</S.ProjectCategory>
                <S.ProjectDate>{project.date}</S.ProjectDate>
              </S.ProjectHeader>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectTechStack>
                {project.tech.map((tech, techIndex) => (
                  <S.TechTag key={techIndex}>{tech}</S.TechTag>
                ))}
              </S.ProjectTechStack>
              <S.ProjectClient>
                <S.ClientLabel>Client:</S.ClientLabel>
                <S.ClientName>{project.client}</S.ClientName>
              </S.ProjectClient>
            </S.ProjectCard>
          ))}
        </S.ProjectsGrid>
        
        <S.LoadMoreButton onClick={toggleProjects}>
          {isExpanded ? (
            <>
              간략히
              <S.ButtonIcon>↑</S.ButtonIcon>
            </>
          ) : (
            <>
              더 보기
              <S.ButtonIcon>↓</S.ButtonIcon>
            </>
          )}
        </S.LoadMoreButton>
      </S.ProjectsContainer>

      {selectedProject && (
        <S.PopupOverlay onClick={closePopup}>
          <S.PopupContent onClick={(e) => e.stopPropagation()}>
            <S.PopupHeader>
              <S.PopupTitle>{selectedProject.title}</S.PopupTitle>
              <S.CloseButton onClick={closePopup}>&times;</S.CloseButton>
            </S.PopupHeader>
            <S.PopupBody>
              <S.PopupCategory>{selectedProject.category}</S.PopupCategory>
              <S.PopupDate>{selectedProject.date}</S.PopupDate>
              <S.PopupDescription>{selectedProject.description}</S.PopupDescription>
              <S.PopupDetailsList>
                {selectedProject.details.map((detail, index) => (
                  <S.PopupDetailItem key={index}>
                    • {detail}
                  </S.PopupDetailItem>
                ))}
              </S.PopupDetailsList>
              <S.PopupTechStack>
                {selectedProject.tech.map((tech, index) => (
                  <S.TechTag key={index}>{tech}</S.TechTag>
                ))}
              </S.PopupTechStack>
              <S.PopupClient>
                <S.ClientLabel>Client:</S.ClientLabel>
                <S.ClientName>{selectedProject.client}</S.ClientName>
              </S.PopupClient>
            </S.PopupBody>
          </S.PopupContent>
        </S.PopupOverlay>
      )}
    </S.ProjectsSection>
  );
};

export default Projects;