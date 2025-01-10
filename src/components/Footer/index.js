import React from 'react';
import * as S from './Footer.styles';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const locations = [
    {
      title: '본사주소',
      address: '서울시 동작구 신대방동 보라매로5가길 7',
      detail: '우성캐릭터그린빌 1321호',
      tel: '02-857-8060',
      fax: '02-857-8061'
    }
  ];

  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.FooterContent>
          <S.LogoSection>
            <S.LogoImage src={logo} alt="WRAPCORE" />
          </S.LogoSection>
          <S.LocationList>
            {locations.map((location, index) => (
              <S.LocationItem key={index}>
                <S.LocationTitle>{location.title}</S.LocationTitle>
                <S.AddressInfo>
                  {location.address}
                  <br />
                  {location.detail}
                </S.AddressInfo>
                <S.ContactInfo>
                  <S.ContactItem>
                    <S.ContactLabel>Tel</S.ContactLabel>
                    <S.ContactValue href={`tel:${location.tel}`}>{location.tel}</S.ContactValue>
                  </S.ContactItem>
                  <S.ContactItem showDivider>
                    <S.ContactLabel>Fax</S.ContactLabel>
                    <S.ContactValue as="span">{location.fax}</S.ContactValue>
                  </S.ContactItem>
                </S.ContactInfo>
              </S.LocationItem>
            ))}
          </S.LocationList>
          <S.BottomBar>
            <S.Copyright>© WRAPCORE. All rights reserved.</S.Copyright>
            <S.SocialLinks>
              <S.SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </S.SocialLink>
              <S.SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                Youtube
              </S.SocialLink>
              <S.SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </S.SocialLink>
            </S.SocialLinks>
          </S.BottomBar>
        </S.FooterContent>
      </S.FooterContainer>
    </S.FooterSection>
  );
};

export default Footer;