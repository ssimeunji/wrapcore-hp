import React from 'react';
import * as S from './Greetings.styles';

const Greetings = () => {
  return (
    <S.GreetingsSection id="greetings">
      <S.GreetingsContainer>
        <S.SectionTitle>인삿말</S.SectionTitle>
        <S.GreetingsSubtitle>고객 가치를 중시하는 글로벌 일류 IT 서비스 기업</S.GreetingsSubtitle>
        <S.GreetingsTitle><label>랩코어(주)는</label>2006년 설립 이래, 고객 가치 증진을 최우선 목표로 솔루션을 제공해 왔습니다.</S.GreetingsTitle>
        <S.GreetingsContent>
          <br />
          IT 전 분야에 걸쳐 축적한 전문적인 기술력과 노하우를 바탕으로, IT기술 중심의 빠른 변화를 이끌어 나가기 위해 노력하고 있습니다.
          <br />
          우리는 깊은 고민과 끊임없는 혁신으로 미래를 한 발 앞서 준비해왔고, 빅데이터, 클라우드 등, 신규 사업을 활발히 전개하고 있습니다.
          <br />
          뿐만 아니라 보안, 클라우드, 블록체인 등 강점을 가진 사업은 그 핵심역량을 더욱 견고히 하여 차별화된 가치를 제공하며
          <br />
          보다 편리한 세상, 창의적인 미래를 만들어 나가고 있습니다.
          <br />
          앞으로 랩코어는 파트너사와의 지속적인 교류를 통한 성장과 나눔의 실천을 통해, 사회와 함께 발전하는 글로벌 일류 IT 서비스 기업으로 성장해 나가겠습니다.
          <br /><br />
          감사합니다.
        </S.GreetingsContent>
        <S.CEOName>대표이사 <label>남궁람</label></S.CEOName>
      </S.GreetingsContainer>
    </S.GreetingsSection>
  );
};

export default Greetings;