import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import ShowPost from './ShowPost';
import WritePost from './WritePost';

const API_URL = 'https://reactapitest.pythonanywhere.com/api/';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun></Slogun>
            <Routes>
              <Route
                exact
                path="/"
                element={<ShowPostList apiUrl={API_URL}></ShowPostList>}
              />
              <Route path="/write" element={<WritePost apiUrl={API_URL}></WritePost>} />
              <Route path="/post/:postID" element={<ShowPost apiUrl={API_URL}></ShowPost>} />
            </Routes>
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
