import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
              <span className="stat__num">30+</span>
              <span className="stat__label">{t('about.career')}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat__num">2009</span>
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
              src="https://cdn.pixabay.com/photo/2016/11/21/14/22/asian-1846740_1280.jpg"
              alt="Japanese sushi craft"
              loading="lazy"
            />
          </div>
          <div className="about__image about__image--offset">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/07/08/56/sushi-2292018_1280.jpg"
              alt="Sushi platter"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
