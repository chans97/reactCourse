import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { useState } from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

function App() {
  const initialPostList = [
    { id: 1, title: '학보, 시사N 대학기자상 취재', replCount: 1 },
    { id: 2, title: '학보, 시사N 대학기자상 취재', replCount: 43 },
    { id: 3, title: '학보, 시사N 대학기자상 취재', replCount: 2 },
  ];

  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: '학보, 시사N 대학기자상 취재', replCount: 21 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun></Slogun>
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost} // 나중에 삭제될 기능 spread 설명을 위해 억지로 넣어봄
            ></ShowPostList>
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
