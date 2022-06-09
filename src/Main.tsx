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
import gear from './assets/main.service/gear.svg';
import hand from './assets/main.service/hand.svg';
import quality from './assets/main.service/quality.svg';
import sliderDown from './assets/main.service/sliderDown.jpg';
import facebook from './assets/footer/facebook.svg';
import instagram from './assets/footer/instagram.svg';
import twitter from './assets/footer/twitter.svg';
import cards from './assets/footer/cards.jpg';

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
      </div>
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
            <div className={style.section_right_inner}>
              <img className={style.section_right_header2} src={Header2} alt="header2" />
              <img className={style.section_right_header1} src={Header1} alt="header1" />
              <img className={style.section_right_header3} src={Header3} alt="header3" />
            </div>
          </div>
        </div>
      </section>

      <div className={style.container}>
        <section className={style.section}>
          <div className={style.section_in}>
            <div className={style.section_title}> Новая коллекция </div>
            <div className={style.section_items}>
              <div className={style.section_items_item}>
                <div className={style.section_items_item_img}>
                  <img src={tShirt} alt={tShirt} />
                </div>
                <div className={style.section_items_item_title}> Футболка USA </div>
                <div className={style.section_items_item_prices}>
                  <div className={style.section_items_item_price}>$229</div>
                  <div className={style.section_items_item_newPrice}>$129 </div>
                </div>
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
        <section>
          <div className={style.important}>
            <div className={style.important_title}> Что для нас важно </div>
            <div className={style.important_service}>
              <div className={style.important_item}>
                <div className={style.important_item_img}>
                  <img src={quality} alt={quality} />
                </div>
                <div className={style.important_item_title}> Качество</div>
                <div className={style.important_item_text}> Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества </div>
              </div>
              <div className={style.important_item}>
                <div className={style.important_item_img}>
                  <img src={gear} alt={gear} />
                </div>
                <div className={style.important_item_title}> Скорость</div>
                <div className={style.important_item_text}> Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах </div>
              </div>
              <div className={style.important_item}>
                <div className={style.important_item_img}>
                  <img src={hand} alt={hand} />
                </div>
                <div className={style.important_item_title}> Ответственность</div>
                <div className={style.important_item_text}> Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={style.dreamTeam}>
            <div className={style.dreamTeam_title}>Команда мечты Womazing</div>
            <div className={style.dreamTeam_inner}>
              <div className={style.dreamTeam_img}>
                <img src={sliderDown} alt={sliderDown} />
              </div>
              <div className={style.description}>
                <div className={style.description_title}>Для каждой</div>
                <div className={style.description_text}>
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                  <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                </div>
                <a className={style.description_more} href="/">
                  Подробнее о бренде{' '}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.footer_inner}>
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
                <div className={style.phone_number} />+ 7(495) 823 - 54 - 12
              </div>
            </div>

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
    </main>
  );
}

export default Main;
