import React from 'react';
import { PostTitleDiv, PostTitle } from './styledComponent';
function WriteTitle() {
  return (
    <PostTitleDiv>
      <PostTitle>글쓰기</PostTitle>
    </PostTitleDiv>
  );
}

export default React.memo(WriteTitle);

// export default WriteTitle;
