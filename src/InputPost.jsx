import React, { useState, useRef, useEffect } from 'react';
import { ContentsInput, TitleInput } from './styledComponent';

function InputPost({ onChange, title, contents }) {
  const titleInput = useRef();
  const contentsInput = useRef();

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      contentsInput.current.focus();
    }
  };
  useEffect(() => {
    titleInput.current.focus();
  }, []);
  return (
    <>
      <TitleInput
        name="title"
        type="text"
        placeholder="제목을 입력해주세요. (15자 이내)"
        value={title}
        onChange={onChange}
        onKeyUp={onKeyUp}
        ref={titleInput}
      />
      <ContentsInput
        name="contents"
        value={contents}
        cols="30"
        rows="10"
        onChange={onChange}
        ref={contentsInput}
      />
    </>
  );
}

export default InputPost;
