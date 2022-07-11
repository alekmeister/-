import React, { useEffect } from 'react';
import style from 'components/pages/main/Main.module.scss';
import Header2 from 'assets/Header2.jpg';
import gear from 'assets/main.service/gear.svg';
import hand from 'assets/main.service/hand.svg';
import quality from 'assets/main.service/quality.svg';
import sliderDown from 'assets/main.service/sliderDown.jpg';
import arrow from 'assets/arrow.svg';
import { Title } from 'components/title/Title';
import { Clothes } from 'components/clothres/Clothes';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { getClothes } from 'components/store/clothes/actionCreators/getClothes';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClothes({ page: 1 }));
  }, []);
  const data = useAppSelector((state) => state.clothes.items);

  return (
    <>
      <section className={style.section}>
        <div className={style.slider}>
          <div className={style.slider_inner}>
            <div className={style.slider_left}>
              <Title>Новые поступления в этом сезоне</Title>
              <div className={style.slider_left_subtitle}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</div>
              <div className={style.slider_left_btn}>
                <div className={style.arrow}>
                  <img className={style.arrow_down} src={arrow} alt={arrow} />
                </div>
                <Link to="store">
                  <button className={style.btn}>Открыть магазин</button>
                </Link>
              </div>
            </div>
            <div className={style.slider_right}>
              <div className={style.slider_right_inner}>
                <img className={style.slider_right_header2} src={Header2} alt="header2" />
                {/* <img className={style.slider_right_header1} src={Header1} alt="header1" /> */}
                {/* <img className={style.slider_right_header3} src={Header3} alt="header3" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.section_in}>
            <div className={style.title}> Новая коллекция </div>
            <Clothes items={data} />
          </div>
        </section>
        <Link to="store">
          <div className={style.button}>
            <button className={style.btn_2}>Открыть магазин</button>
          </div>
        </Link>
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
                <a className={style.description_more} href="/Users/Oleg/WebstormProjects/tretyakovka/public">
                  Подробнее о бренде{' '}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
