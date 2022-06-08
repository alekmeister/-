import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Basket } from 'assets/basket.svg';
import tShirt from 'assets/tShirt.jpg';
import kypalnik from 'assets/kypalnik.jpg';
import style from './Main.module.scss';
import Header1 from './assets/Header1.jpg';
import Header2 from './assets/Header2.jpg';
import Header3 from './assets/Header3.jpg';
import sweetshot from './assets/sweetshot.jpg';

function Main() {
  return (
    <main>
      <div className={style.container}>
        <header className={style.header}>
          <div className={style.header_navigation}>
            <div className={style.header_left}>
              <Logo className={style.logo_icon} />
              <div className={style.logo}>WOMAZING</div>
            </div>
            <nav className={style.nav}>
              <a className={style.nav_link} href="/">
                Главная
              </a>
              <a className={style.nav_link} href="/">
                Магазин
              </a>
              <a className={style.nav_link} href="/">
                О бренде
              </a>
              <a className={style.nav_link} href="/">
                Контакты
              </a>
            </nav>
            <div className={style.phone}>
              <Phone className={style.phone_icon} />
              <div className={style.phone_number} />+ 7(495) 823 - 54 - 12
            </div>
            <Basket className={style.basket} />
          </div>
        </header>
        <section className={style.section}>
          <div className={style.section_inner}>
            <div className={style.section_left}>
              <div className={style.section_left_title}>Новые поступления в этом сезоне</div>
              <div className={style.section_left_subtitle}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</div>
              <div className={style.section_left_btn}>
                <button className={style.btn}>Открыть магазин</button>
              </div>
            </div>
            <div className={style.section_right}>
              <img className={style.section_right_header2} src={Header2} alt="header2" />
              <img className={style.section_right_header1} src={Header1} alt="header1" />
              <img className={style.section_right_header3} src={Header3} alt="header3" />
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.section_in}>
            <div className={style.section_title}> Новая коллекция </div>
            <div className={style.section_items}>
              <div className={style.section_items_item}>
                <div className={style.section_items_item_img}>
                  <img src={tShirt} alt={tShirt} />
                </div>
                <div className={style.section_items_item_title}> Футболка USA </div>
                <div className={style.section_items_item_price}> $229 </div>
              </div>
              <div className={style.section_items_item}>
                <div className={style.section_items_item_img}>
                  <img src={kypalnik} alt={kypalnik} />
                </div>
                <div className={style.section_items_item_title}>Купальник Glow </div>
                <div className={style.section_items_item_price}> $129 </div>
              </div>
              <div className={style.section_items_item}>
                <div className={style.section_items_item_img}>
                  <img src={sweetshot} alt={sweetshot} />
                </div>
                <div className={style.section_items_item_title}> Свитшот Sweet Shot</div>
                <div className={style.section_items_item_price}> $129 </div>
              </div>
            </div>
          </div>
          <button className={style.btn_2}>Открыть магазин</button>
        </section>
      </div>
    </main>
  );
}

export default Main;
