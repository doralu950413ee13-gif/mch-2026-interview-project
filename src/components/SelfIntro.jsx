import React from 'react';
import '../styles/SelfIntro.css';

const SelfIntro = () => {
  return (
    <section className="intro-section">
      <h1>歡迎來到梅竹黑客松 開發部 面試專案</h1>
      
      <p className="intro-text">
        在第一部分的自我介紹的頁面中，大家可以自由發揮喔！
      </p>

      <div className="intro-details">
        <h3>自我介紹</h3>
        <ul className="intro-list">
          <li><strong>姓名：</strong> [你的名字]</li>
          <li><strong>背景：</strong> [學校/科系/年級]</li>
          <li><strong>專長：</strong> [程式語言/框架/工具]</li>
          <li><strong>興趣：</strong> [技術領域/個人愛好]</li>
          <li><strong>經歷：</strong> [相關專案/實習經驗]</li>
        </ul>
      </div>
    </section>
  );
};

export default SelfIntro;