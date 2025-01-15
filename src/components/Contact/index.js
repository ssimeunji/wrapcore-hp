import React from 'react';
import * as S from './Contact.styles';
import KakaoMap from './KakaoMap';

const Contact = () => {
  const contactInfo = [
    {
      title: '전화 문의',
      content: '02-857-8060',
      icon: '📞', // 실제 아이콘으로 교체 필요
      link: 'tel:02-857-8060'
    },
    {
      title: '이메일',
      content: 'lpioneer@wrapcore.co.kr',
      icon: '✉️', // 실제 아이콘으로 교체 필요
      link: 'mailto:lpioneer@wrapcore.co.kr'
    },
    {
      title: '주소',
      content: '서울시 동작구 신대방동 보라매로5가길 7, 우성캐릭터그린빌 1321호',
      icon: '📍', // 실제 아이콘으로 교체 필요
      link: 'https://maps.google.com/?q=서울시 동작구 신대방동 보라매로5가길 7'
    }
  ];

  return (
    <S.ContactSection id="contact">
      <S.ContactContainer>
        <S.SectionTitle>문의하기</S.SectionTitle>
        <S.ContactSubtitle>
          랩코어와 함께 혁신적인 디지털 솔루션을 만들어보세요
        </S.ContactSubtitle>
        
        <S.ContactGrid>
          <S.ContactForm>
            <S.FormTitle>제휴 문의</S.FormTitle>
            <S.FormDescription>
              프로젝트에 대해 궁금하신 점이 있으시다면 문의해주세요.
            </S.FormDescription>
            <S.Form>
              <S.FormGroup className="flex-row">
                <div>
                  <S.Label>회사명 *</S.Label>
                  <S.Input type="text" placeholder="회사명을 입력해주세요" />
                </div>
                <div>
                  <S.Label>이름 *</S.Label>
                  <S.Input type="text" placeholder="이름을 입력해주세요" />
                </div>
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>이메일 *</S.Label>
                <S.Input type="email" placeholder="이메일을 입력해주세요" />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>연락처</S.Label>
                <S.Input type="tel" placeholder="연락처를 입력해주세요" />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>문의내용 *</S.Label>
                <S.TextArea 
                  placeholder="문의하실 내용을 입력해주세요" 
                  rows="5"
                />
              </S.FormGroup>
              <S.SubmitButton type="submit">
                문의하기
              </S.SubmitButton>
            </S.Form>
          </S.ContactForm>

          <S.ContactInfo>
            <S.InfoTitle>Contact Information</S.InfoTitle>
            <S.InfoList>
              {contactInfo.map((info, index) => (
                <S.InfoItem key={index}>
                  <S.InfoIcon>{info.icon}</S.InfoIcon>
                  <S.InfoContent>
                    <S.InfoLabel>{info.title}</S.InfoLabel>
                    <S.InfoLink href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.content}
                    </S.InfoLink>
                  </S.InfoContent>
                </S.InfoItem>
              ))}
            </S.InfoList>
            <S.MapContainer>
              <KakaoMap />
            </S.MapContainer>
          </S.ContactInfo>
        </S.ContactGrid>
      </S.ContactContainer>
    </S.ContactSection>
  );
};

export default Contact;