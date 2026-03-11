import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="logo-hanja">美松</span>
          <span className="logo-text">초밥</span>
        </div>
        <p className="footer__address">{t('footer.address')}</p>
        <p className="footer__tel">051-817-7726</p>
        <p className="footer__copy">{t('footer.copy')}</p>
      </div>
    </footer>
  );
}
