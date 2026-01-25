import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/websites';

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // TODO: Fetch data from API_URL
  //   // The API returns { pagination: {...}, data: [...] }
    
  // }, []);

  if (loading) return <div> 
    <h2> Loading projects...  </h2> 
    <br></br>
    <p> 歡迎來到第二部分 這部分請從提供的API端點取得歷屆黑客松網站的資料，並呈現在頁面上。</p> 
    <p>格式也不限於卡片或提供的範例樣式，大家歡迎自由發揮，展現自己的能力!</p>
  
  </div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="projects-section">
      <h2>Project Gallery</h2>
      <br />
      <div className="projects-grid">
        {/* TODO: Map through the 'websites' array and render a project card for each.
            Include: image, name, description, tech_stack, and link.
            Refer to '../styles/WebsiteList.css' for available classes.
        */}
      </div>
    </section>
  );
};

export default WebsiteList;