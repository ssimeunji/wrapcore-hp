import React from 'react';
import * as S from './History.styles';

const History = () => {
  const historyData = [
    {
      year: '2024',
      events: [
        {
          date: '05',
          title: '삼성물산 BMS 솔루션 개발',
          description: '클라우드 기반 빌딩 플랫폼 구축 및 레퍼런스 확보'
        }
      ]
    },
    {
      year: '2023',
      events: [
        {
          date: '11',
          title: 'AI 링고 서비스 개발',
          description: 'AI 통화비서 API 활용 어플리케이션 개발'
        },
        {
          date: '10',
          title: 'AICC 시스템 구축',
          description: '보이스봇 콜센터 연동 및 관리자 포털 개발'
        },
        {
          date: '09',
          title: 'AI 링고 통합 콜센터 구축',
          description: 'AI 링고 고객응대, 녹취, 업무 분배 기능 개발'
        }
      ]
    },
    {
      year: '2022',
      events: [
        {
          date: '04',
          title: '우체국 차세대 종합금융시스템 구축',
          description: '비대면 채널 접근성 개선 및 종합자산관리서비스 개발'
        }
      ]
    },
    {
      year: '2021',
      events: [
        {
          date: '03',
          title: '지자체 DX 플랫폼 구축',
          description: '지역화폐 플랫폼 및 DID SDK 개발'
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          date: '02',
          title: 'GiGA Genie inside 개발',
          description: '다양한 OS 대응 모바일 SDK 및 모니터링 툴 개발'
        }
      ]
    },
    {
      year: '2019',
      events: [
        {
          date: '11',
          title: 'AirMap Korea 서비스 개발',
          description: '위치 기반 공기질 측정 서비스 구축'
        }
      ]
    },
    {
      year: '2018',
      events: [
        {
          date: '11',
          title: 'Callavo ARS 시스템 구축',
          description: '보는 ARS용 WebVRS 시스템 개발'
        },
        {
          date: '03',
          title: '영어소리동화 서비스 개발',
          description: '다국어 실시간 음성인식 서비스 구축'
        },
        {
          date: '02',
          title: 'KT 엠스토리지 서비스 개발',
          description: '클라우드 스토리지 서비스 구축'
        }
      ]
    }
  ];

  return (
    <S.HistorySection id="history">
      <S.HistoryContainer>
        <S.SectionTitle>History</S.SectionTitle>
        <S.HistorySubtitle>
          랩코어가 걸어온 혁신의 발자취
        </S.HistorySubtitle>

        <S.Timeline>
          {historyData.map((yearData, yearIndex) => (
            <S.TimelineYear key={yearIndex}>
              <S.YearLabel>{yearData.year}</S.YearLabel>
              <S.EventsList>
                {yearData.events.map((event, eventIndex) => (
                  <S.EventItem key={eventIndex}>
                    <S.EventDate>{event.date}</S.EventDate>
                    <S.EventContent>
                      <S.EventTitle>{event.title}</S.EventTitle>
                      <S.EventDescription>{event.description}</S.EventDescription>
                    </S.EventContent>
                  </S.EventItem>
                ))}
              </S.EventsList>
            </S.TimelineYear>
          ))}
        </S.Timeline>
      </S.HistoryContainer>
    </S.HistorySection>
  );
};

export default History;