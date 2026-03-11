import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const MENU_DATA = {
  lunch: [
    { key: 'lunch_a', price: '25,000' },
    { key: 'lunch_b', price: '30,000' },
  ],
  course: [
    { key: 'course_b', price: '35,000' },
    { key: 'course_a', price: '40,000' },
    { key: 'special_a', price: '55,000' },
    { key: 'special_b', price: '75,000' },
  ],
  ala_carte: [
    { key: 'sushi_a', price: '20,000' },
    { key: 'sushi_b', price: '30,000' },
    { key: 'eel', price: '30,000' },
    { key: 'inari', price: '15,000' },
  ],
};

function MenuBlock({ category, items, categoryLabel }) {
  const { t } = useTranslation();
  return (
    <div className="menu-block">
      <h3 className="menu-block__title">{categoryLabel}</h3>
      <ul className="menu-list">
        {items.map(({ key, price }) => (
          <li key={key} className="menu-item">
            <span className="menu-item__name">{t(`menu.items.${key}`)}</span>
            <span className="menu-item__dots" />
            <span className="menu-item__price">₩{price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="menu-section fade-section" id="menu" ref={ref}>
      <div className="menu-section__bg" />
      <div className="menu-section__inner">
        <p className="section-label" style={{ color: '#c9a96e' }}>OMAKASE &amp; COURSES</p>
        <h2 className="section-title" style={{ color: '#fff' }}>{t('menu.title')}</h2>

        <div className="menu-grid">
          <MenuBlock
            category="lunch"
            items={MENU_DATA.lunch}
            categoryLabel={t('menu.lunch')}
          />
          <MenuBlock
            category="course"
            items={MENU_DATA.course}
            categoryLabel={t('menu.course')}
          />
          <MenuBlock
            category="ala_carte"
            items={MENU_DATA.ala_carte}
            categoryLabel={t('menu.ala_carte')}
          />
        </div>

        <p className="menu-note">{t('menu.note')}</p>
      </div>
    </section>
  );
}
