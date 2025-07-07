
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import Page from './pages/Page';
import PostPage from './pages/Postpage';        // ✅ 확인
import MyPage from './pages/MyPage';
import LoginPage from "./pages/LoginPa

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Page />} />
          <Route path="/post" element={<PostPage />} />           {/* ✅ 반드시 필요 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
