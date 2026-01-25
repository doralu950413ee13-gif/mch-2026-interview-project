import './styles/App.css'
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './components/Home'
import SelfIntro from './components/SelfIntro'
import WebsiteList from './components/WebsiteList'
import ApiDocs from './components/ApiDocs'

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">
      <nav className="main-nav">
        <div className="nav-brand">梅竹黑客松 開發部</div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
            首頁
          </NavLink>
          <NavLink to="/intro" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            自我介紹
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            歷史報名網站
          </NavLink>
          <NavLink to="/api-docs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            API 文件
          </NavLink>
        </div>
      </nav>

      <main className={isHomePage ? "main-content" : "main-content with-padding"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<SelfIntro />} />
          <Route path="/gallery" element={<WebsiteList />} />
          <Route path="/api-docs" element={<ApiDocs />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App