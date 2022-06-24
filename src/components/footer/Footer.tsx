import style from 'components/footer/footer.module.scss';
import React from 'react';
import { HeaderLogo } from 'components/header/HeaderLogo';
import { HeaderNav } from 'components/header/HeaderNav';
import { HeaderPhoneNumber } from 'components/header/HeaderPhoneNumber';
import { Link } from 'react-router-dom';
import cards from '../../assets/footer/cards.jpg';
import twitter from '../../assets/footer/twitter.svg';
import instagram from '../../assets/footer/instagram.svg';
import facebook from '../../assets/footer/facebook.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_inner}>
          <div className={style.header}>
            <HeaderLogo />
            <HeaderNav />
            <div className={style.phone}>
              <HeaderPhoneNumber />
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.rights}>
              © Все права защищены
              <Link to="*" className={style.confidentiality}>
                Политика конфиденциальности
              </Link>
              <Link to="*" className={style.offer}>
                Публичная оферта
              </Link>
            </div>
            <div className={style.rightBlock}>
              <Link to="*" className={style.email}>
                hello@womazing.com
              </Link>
              <div className={style.social}>
                <img className={style.social_instagram} src={instagram} alt={instagram} />
                <img className={style.social_facebook} src={twitter} alt={facebook} />
                <img className={style.social_twitter} src={facebook} alt={twitter} />
              </div>
              <img className={style.cards} src={cards} alt="cards" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
