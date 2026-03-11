import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export default function Contact() {
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
    <section className="contact fade-section" id="contact" ref={ref}>
      <div className="contact__inner">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-title">{t('contact.title')}</h2>

        <div className="contact__grid">
          <div className="contact__card">
            <div className="contact__icon">&#9742;</div>
            <h3 className="contact__card-title">{t('contact.phone')}</h3>
            <p className="contact__tel">051-817-7726</p>
            <a className="contact__btn" href="tel:051-817-7726">
              {t('contact.call_now')}
            </a>
          </div>

          <div className="contact__card">
            <div className="contact__icon">&#9200;</div>
            <h3 className="contact__card-title">{t('contact.hours')}</h3>
            <p className="contact__info">{t('contact.hours_detail')}</p>
            <p className="contact__info" style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.85rem' }}>
              {t('contact.closed')}: {t('contact.closed_detail')}
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__icon">&#128205;</div>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__info">부산 부산진구<br />새싹로29번길 14 1층</p>
          </div>
        </div>
      </div>
    </section>
  );
}
