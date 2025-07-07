// App.jsx

import RootLayout from "./RootLayout";
import Page from "./pages/Page"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Page />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;