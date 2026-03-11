import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export default function Location() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const mapsUrl =
    'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EC%83%88%EC%8B%B9%EB%A1%9C29%EB%B2%88%EA%B8%B0%2014%201%EC%B8%B5%20%EB%AF%B8%EC%86%A1%EC%B4%88%EB%B0%A5';
  const kakaoUrl =
    'https://map.kakao.com/?q=%EB%B6%80%EC%82%B0+%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC+%EC%83%88%EC%8B%B9%EB%A1%9C29%EB%B2%88%EA%B8%B0+14';

  return (
    <section className="location fade-section" id="location" ref={ref}>
      <div className="location__inner">
        <div className="location__info">
          <p className="section-label">LOCATION</p>
          <h2 className="section-title">{t('location.title')}</h2>
          <div className="location__address-block">
            <p className="location__name">{t('location.address_full')}</p>
            <p className="location__addr">{t('location.address')}</p>
          </div>
          <div className="location__links">
            <a className="map-btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              NAVER MAP
            </a>
            <a className="map-btn map-btn--outline" href={kakaoUrl} target="_blank" rel="noopener noreferrer">
              KAKAO MAP
            </a>
          </div>
        </div>

        <div className="location__map">
          <iframe
            title="미송초밥 위치"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6!2d129.0558!3d35.1580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356892b0e90af0c3%3A0x0!2z67aA7IKw7LKt67CU64Ko!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr&q=%EB%B6%80%EC%82%B0%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EC%83%88%EC%8B%B9%EB%A1%9C29%EB%B2%88%EA%B8%B0%2014"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
