import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <button className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-hanja">美松</span>
          <span className="logo-text">초밥</span>
        </button>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {['about', 'menu', 'location', 'contact'].map((id) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {t(`nav.${id}`)}
            </button>
          ))}
        </nav>

        <div className="header__lang">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              className={`lang-btn${i18n.language === code ? ' lang-btn--active' : ''}`}
              onClick={() => changeLanguage(code)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile-menu">
          {['about', 'menu', 'location', 'contact'].map((id) => (
            <button key={id} className="mobile-nav-link" onClick={() => scrollTo(id)}>
              {t(`nav.${id}`)}
            </button>
          ))}
          <div className="mobile-lang">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${i18n.language === code ? ' lang-btn--active' : ''}`}
                onClick={() => { changeLanguage(code); setMenuOpen(false); }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
