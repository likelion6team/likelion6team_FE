// App.jsx

import RootLayout from "./RootLayout";
import Page from "./pages/Page"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";

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
