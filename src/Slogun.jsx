import React from 'react';
import { SlogunSection, SlogunBig, SlogunSmall } from './styledComponent';
function Slogun() {
  return (
    <SlogunSection>
      <>
        <SlogunBig>HACK YOUR LIFE</SlogunBig>
        <SlogunSmall>내 아이디어를 내 손으로 실현한다.</SlogunSmall>
      </>
    </SlogunSection>
  );
}

export default React.memo(Slogun);
