import React, { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';

// Custom Premium Icons
const Code = ({ size = 28 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size}
  >
    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
);

const AcademicCap = ({ size = 28 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size}
  >
    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
  </svg>
);

const UserIcon = ({ size = 28 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size}
  >
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
  </svg>
);

const Sparkles = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4m-1.071-7.071L17.5 7.5m-11 9l-2.571 2.571M7.5 6.5l-2.571-2.571m14.142 0L16.5 6.5m-9 11l-2.571 2.571" />
  </svg>
);

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    cardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-home">
      {/* Animated Background Elements */}
      <div className="bg-orbs">
        <div 
          className="orb orb-1"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="orb orb-2"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div 
          className="orb orb-3"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="hero-premium">
        <div className="hero-container">
          <div className="hero-content-premium">

            {/* Hero Title */}
            <h1 className="hero-title-premium">
              <span className="title-line-1">梅竹黑客松</span>
              <span className="title-line-2">開發部</span>
            </h1>

            {/* Description */}
            <p className="hero-description-premium">
              開發部在梅竹黑客松團隊中扮演技術支援者的角色，與各部門緊密合作，共同打造出良好的使用者互動介面！
            </p>

            {/* Floating Visual Element */}
            <div 
              className="floating-visual"
              style={{ transform: `translateY(${scrollY * -0.5}px) rotate(${scrollY * 0.1}deg)` }}
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section-premium">
        <div className="cards-container">
          <div className="bento-grid-premium">
            
            {/* Card 1: Job Description - Top Left */}
            <div 
              ref={el => cardsRef.current[0] = el}
              className="bento-card card-job"
            >
              <div className="card-inner">

                <div className="card-header-unified">
                  <h2 className="bento-card-title">職務內容</h2>
                </div>

                <div className="card-list">
                  <div className="card-list-item">
                    <div className="item-marker">01</div>
                    <div className="item-content">
                      <h3 className="item-title">架設報名網站</h3>
                      <p className="item-desc">建立流暢的使用者體驗</p>
                    </div>
                  </div>
                  <div className="card-list-item">
                    <div className="item-marker">02</div>
                    <div className="item-content">
                      <h3 className="item-title">進行專案開發</h3>
                      <p className="item-desc">把天馬行空的點子化為現實</p>
                    </div>
                  </div>
                  <div className="card-list-item">
                    <div className="item-marker">03</div>
                    <div className="item-content">
                      <h3 className="item-title">與企業探討出題內容</h3>
                      <p className="item-desc">與企業夥伴合作，設計真實挑戰題目</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-glow card-glow-blue" />
            </div>

            {/* Card 2: Traits - Bottom Left */}
            <div 
              ref={el => cardsRef.current[1] = el}
              className="bento-card card-traits"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="card-inner">

                <div className="card-header-unified"> 
                  <h2 className="bento-card-title">徵才特質</h2>
                </div>

                <div className="card-list">
                  <div className="card-list-item">
                    <div className="item-marker">01</div>
                    <div className="item-content">
                      <h3 className="item-title">學習熱忱</h3>
                      <p className="item-desc">即使沒經驗也能成功上手</p>
                    </div>
                  </div>
                  
                  <div className="card-list-item">
                    <div className="item-marker">02</div>
                    <div className="item-content">
                      <h3 className="item-title">良好的溝通</h3>
                      <p className="item-desc">低頭打扣的孩子們也是需要抬頭說些話的</p>
                    </div>
                  </div>
                  
                  <div className="card-list-item">
                    <div className="item-marker">03</div>
                    <div className="item-content">
                      <h3 className="item-title">靈活的思路與創意</h3>
                      <p className="item-desc">遇到 bug 就要來點腦筋急轉彎 ^^</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-glow card-glow-violet" />
            </div>

            {/* Card 3: What You Will Learn - Full Right */}
            <div 
              ref={el => cardsRef.current[2] = el}
              className="bento-card card-learn"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="card-inner">
                <div className="card-header-unified">
                  <h2 className="bento-card-title">加入後可以學到什麼</h2>
                </div>

                <div className="card-list">
                  <div className="card-list-item">
                    <div className="item-marker">01</div>
                    <div className="item-content">
                      <h3 className="item-title">團隊合作</h3>
                      <p className="item-desc">和不同開發部員與其他部門合作</p>
                    </div>
                  </div>
                  <div className="card-list-item">
                    <div className="item-marker">02</div>
                    <div className="item-content">
                      <h3 className="item-title">學習網頁技術</h3>
                      <p className="item-desc">各種開發相關知識們，例如可愛的 React</p>
                    </div>
                  </div>
                  <div className="card-list-item">
                    <div className="item-marker">03</div>
                    <div className="item-content">
                      <h3 className="item-title">實作的成就感</h3>
                      <p className="item-desc">共同完成專屬於 14th 團隊的專案，成就感 up up</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-glow card-glow-indigo" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
