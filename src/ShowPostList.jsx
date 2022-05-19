import React, { useState, useEffect, useCallback } from 'react';
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  PagingSection,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  CursorDiv,
} from './styledComponent';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import EachPost from './EachPost';

const ShowPostList = ({apiUrl}) => {
  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  const addPost = useCallback(() => {
    setPostList(
      postList.concat({ id: 4, title: '학보, 시사N 대학기자상 취재' }),
    );
    // setPostList((postList) => [
    //   ...postList,
    //   { id: 4, title: '학보, 시사N 대학기자상 취재' },
    // ]);
  }, [postList]);

  useEffect(() => {
    axios.get(`${apiUrl}list/?page=1&page_size=10`).then(response => {
      console.log(response.data);
      setPostList(response.data.results);
      setLoading(false);
    })
  }, []);

  console.log('render');
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <CursorDiv onClick={addPost}>
            <FontAwesomeIcon icon={faArrowsRotate} />
          </CursorDiv>
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv onClick={goWrite}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
              {/* loading.io */}
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  postID={element.id}
                  title={element.title}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      {loading || (
        <PagingSection>
          <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowLeft} />
          </PagenumberDiv>
          <PagenumberDiv>2</PagenumberDiv>

          <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowRight} />
          </PagenumberDiv>
        </PagingSection>
      )}
    </>
  );
};

export default ShowPostList;
