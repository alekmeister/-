import style from 'components/footer/footer.module.scss';
import React from 'react';
import { Header } from 'components/header/Header';
import facebook from '../../assets/footer/facebook.svg';
import instagram from '../../assets/footer/instagram.svg';
import twitter from '../../assets/footer/twitter.svg';
import cards from '../../assets/footer/cards.jpg';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_inner}>
          <Header />
          <div className={style.bottom}>
            <div className={style.rights}>
              © Все права защищены
              <a className={style.confidentiality} href="/">
                Политика конфиденциальности
              </a>
              <a className={style.offer} href="/">
                Публичная оферта
              </a>
            </div>
            <div className={style.rightBlock}>
              <a className={style.email} href="mailto:hello@womazing.com">
                hello@womazing.com
              </a>
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
}
export { Footer };
