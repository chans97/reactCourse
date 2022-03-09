import React, { useState } from 'react';
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';

function WritePost(props) {
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });
  const { title, contents } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력해주세요. (15자 이내)"
          value={title}
          onChange={onChange}
        />
        <ContentsInput
          name="contents"
          value={contents}
          cols="30"
          rows="10"
          onChange={onChange}
        ></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;
