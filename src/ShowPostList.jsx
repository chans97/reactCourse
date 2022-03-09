import React from 'react';
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  PagingSection,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
} from './styledComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import EachPost from './EachPost';
function ShowPostList({ loading, isPost, postList, addPost }) {
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <FontAwesomeIcon icon={faPenToSquare} />
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={'./loading.svg'} />
              {/* loading.io */}
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  replCount={element.replCount}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>

      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>

        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
