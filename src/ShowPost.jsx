import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingDiv,
  LoadingImg,
  PostReadDiv,
  PostReplDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  Repl,
  ReplInput,
  ReplSubmitDiv,
  ReplTitleDiv,
  Replwriter,
  WritereplDiv,
} from './styledComponent';
const postData = {
  title: '어렵사리 정한 제목입니다.',
  contents: `내가 그때 그렇게 딱 했는데 보이는 사람은 너라는 것을 알게 되었어, 그게
  나에게는 힘들었지만, 쉽내가 그때 그렇게 딱 했는데 보이는 사람은 너라는
  것을 알게 되었어, 그게 나에게는 힘들었지만, 내가 그때 그렇게 딱 했는데
  보이는 사람은 너라는 것을 알게 되었어, 그게 나에게는 힘들었지만, 지
  않았던 만큼 더욱 성장할 수 있다는 것을 뼈저리게 느꼈지`,
};

const replData = [
  {
    id: 2,
    contents: `내가 생각해도 그건 아니다`,
  },
  {
    id: 5,
    contents: `그럴수도 있나?? 내가 생각해도 그건 아니다`,
  },
];
const countRepls = (repls) => {
  console.log('리뷰 개수를 세는 중...');
  return repls.length;
};
const ShowPost = (props) => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPost(postData);
      setPostLoading(false);
    }, 300);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setRepls(replData);
      setReplLoading(false);
    }, 1000);
  }, []);

  const [repl, setRepl] = useState('');

  const onChange = (e) => {
    setRepl(e.target.value);
  };

  // for useMemo
  const replCount = useMemo(() => countRepls(repls), [repls]);
  // const replCount = countRepls(repls);

  if (!Params.postID) {
    return <PostSection>잘못된 접근입니다.</PostSection>;
  }
  return (
    <div>
      <PostSection>
        <PostTitleDiv>
          <PostTitle>
            {/* title */}
            {post && post.title}
          </PostTitle>
        </PostTitleDiv>

        {postLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          <PostReadDiv>{post && post.contents} </PostReadDiv>
        )}

        {/* post contents */}

        <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
        {replLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          repls &&
          repls.map((element) => (
            <PostReplDiv key={element.id}>
              <Replwriter>익명</Replwriter>
              <Repl>{element.contents}</Repl>
            </PostReplDiv>
          ))
        )}

        <WritereplDiv>
          <ReplInput onChange={onChange} value={repl}></ReplInput>
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WritereplDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
