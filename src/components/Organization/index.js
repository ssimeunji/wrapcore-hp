import React from 'react'
import * as S from './Organization.styles';

const index = () => {
  return (
    <S.OrganizationSection id="organization">
      <S.OrganizationContainer>
        <S.SectionTitle>조직도</S.SectionTitle>
        <S.OrganizationSubtitle></S.OrganizationSubtitle>
        <S.OrganizationImage />
      </S.OrganizationContainer>
    </S.OrganizationSection>
  )
}

export default index
