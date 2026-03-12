import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('visible');
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const career = useCountUp(30, 1600, visible);
  const since = useCountUp(2009, 2000, visible);

  return (
    <section className="about fade-section" id="about" ref={ref}>
      <div className="about__inner">
        <div className="about__text">
          <p className="section-label">{t('about.since')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about__desc">{t('about.desc1')}</p>
          <p className="about__desc">{t('about.desc2')}</p>
          <p className="about__desc">{t('about.desc3')}</p>

          <div className="about__stats">
            <div className="stat">
              <span className="stat__num">{career}+</span>
              <span className="stat__label">{t('about.career')}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat__num">{since}</span>
              <span className="stat__label">{t('about.since_label')}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat__icon">一</span>
              <span className="stat__label">{t('about.specialty')}</span>
            </div>
          </div>
        </div>

        <div className="about__image-wrap">
          <div className="about__image">
            <img
              src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=1280&q=85"
              alt="Sashimi platter"
              loading="lazy"
            />
          </div>
          <div className="about__image about__image--offset">
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1280&q=85"
              alt="Sushi assortment"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
