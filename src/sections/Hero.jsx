import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__pre">— 정통 일식 전문 —</p>
        <h1 className="hero__title">
          <span className="hero__hanja">美松</span>
          <span className="hero__kr">초밥</span>
        </h1>
        <p className="hero__sub">{t('hero.subtitle')}</p>
        <button className="hero__cta" onClick={scrollToMenu}>
          {t('hero.cta')}
        </button>
      </div>
      <div className="hero__scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  );
}
