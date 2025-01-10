import React from 'react';
import * as S from './Services.styles';

const Services = () => {
  const services = [
    {
      title: 'IP Media 플랫폼',
      description: '음성 기반 대화형 솔루션을 통해 고객과의 커뮤니케이션을 혁신적으로 개선합니다.',
      icon: '🎯' // 실제 아이콘으로 교체 필요
    },
    {
      title: '앱/웹 Push 플랫폼',
      description: '효율적인 메시지 전달 시스템으로 사용자 경험을 향상시킵니다.',
      icon: '📱' // 실제 아이콘으로 교체 필요
    },
    {
      title: 'IPCC/AICC 통합 콜센터',
      description: 'AI 기술을 활용한 지능형 콜센터 솔루션으로 고객 서비스를 개선합니다.',
      icon: '🤖' // 실제 아이콘으로 교체 필요
    },
    {
      title: '빌딩 플랫폼 (BMS)',
      description: '클라우드 기반 빌딩 관리 시스템으로 스마트 빌딩의 미래를 제시합니다.',
      icon: '🏢' // 실제 아이콘으로 교체 필요
    },
    {
      title: 'KT 서비스 개발',
      description: '다양한 KT 서비스의 개발 및 운영을 통해 안정적인 서비스를 제공합니다.',
      icon: '💻' // 실제 아이콘으로 교체 필요
    },
    {
      title: '시스템 통합 (SI)',
      description: '기업의 디지털 전환을 위한 맞춤형 시스템 통합 서비스를 제공합니다.',
      icon: '🔄' // 실제 아이콘으로 교체 필요
    }
  ];

  return (
    <S.ServicesSection id="services">
      <S.ServicesContainer>
        <S.SectionTitle>주요 사업 영역</S.SectionTitle>
        <S.ServiceSubtitle>
          랩코어는 다양한 IT 솔루션을 통해 기업의 디지털 혁신을 지원합니다
        </S.ServiceSubtitle>
        <S.ServicesGrid>
          {services.map((service, index) => (
            <S.ServiceCard key={index}>
              <S.ServiceIcon>{service.icon}</S.ServiceIcon>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.ServicesContainer>
    </S.ServicesSection>
  );
};

export default Services;