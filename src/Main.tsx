import style from './Main.module.scss'
import Header1 from './/assets/Header1.jpg'
import Header2 from './/assets/Header2.jpg'
import Header3 from './/assets/Header3.jpg'
const Main = () => {
  return (

      <header className={style.header}>
          <div className={style.header_inner}>
              <div className={style.header_navigation}>
                  <svg className={style.logo_icon}>
                      <use className={style.logo_svg} xlinkHref="#logo"> </use>
                  </svg>
                  <div className={style.logo}>
                      WOMAZING
                  </div>

              <nav className="nav">
                  <a className="nav_link" href="#">Главная</a>
                  <a className="nav_link" href="#">Магазин</a>
                  <a className="nav_link" href="#">О бренде </a>
                  <a className="nav_link" href="#">Контакты</a>
              </nav>
                  <div className={style.phone}>+7 (495) 823-54-12

                  </div>
              </div>
              <div className='header_left'>
                  <div className='header_left_title'>Новые поступления в этом сезоне</div>
                  <div className='header_left_subtitle'>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</div>
                  <div className='header_left_btn'></div>
                  <button className='btn'>Открыть магазин</button>
              </div>
              <div className='header_right'>
                  <img className ='header1' src={Header1} alt='header1'/>
                  <img className ='header2' src={Header2} alt='header2' />
                  <img className ='header3' src={Header3} alt='header3'/>

              </div>

        </div>
      </header>
  );
};

export default Main;
