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
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

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
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then(response => {
      console.log(response.data);
      const lastPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);

      setPostList(response.data.results);
      setLoading(false);
    })
  }, [page]);

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
          <PagenumberDiv onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
            }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </PagenumberDiv>
          {pages.map(pageNum => (
            <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>{pageNum}</PagenumberDiv>
          ))}
          <PagenumberDiv onClick={() => {
            if (pages.length > page) {
              setPage(page + 1)
            }
          }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </PagenumberDiv>
        </PagingSection>
      )}
    </>
  );
};

export default ShowPostList;
