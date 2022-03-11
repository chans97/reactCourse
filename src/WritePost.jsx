import React, { useState, useRef, useEffect } from 'react';
import InputPost from './InputPost';
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from './styledComponent';
import WriteTitle from './WriteTitle';

const SubmitComponent = React.memo(() => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = (props) => {
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });
  const { title, contents } = inputs;
  // const { testw, setTestw } = useState('test');
  const testw = 1;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <PostSection>
      <WriteTitle testw={testw} />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          contents={contents}
        ></InputPost>
      </PostWriteDiv>
      <SubmitComponent></SubmitComponent>
    </PostSection>
  );
};
export default WritePost;
