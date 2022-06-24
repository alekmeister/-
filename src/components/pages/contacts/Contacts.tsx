import React from 'react';
import { Title } from 'components/title/Title';
import style from './contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <div className={style.container}>
      <Title>Контакты</Title>
      <div className={style.map} />
      <div className={style.connectionWithUs}>
        <div className={style.item}>
          Телефон
          <div className={style.item_phoneNumber}>+7 (495) 823-54-12</div>
        </div>
        <div className={style.item}>
          E-mail
          <div className={style.item_email}>info@sitename.com </div>
        </div>
        <div className={style.item}>
          Адрес
          <div className={style.item_street}>г. Москва, 3-я улица Строителей, 25</div>
        </div>
      </div>
      <div className={style.writeUs}>
        Напишите нам
        <input className={style.writeUs_input} placeholder="Имя" />
        <input className={style.writeUs_input} placeholder="E-mail" />
        <input className={style.writeUs_input} placeholder="Телефон" />
        <input className={style.writeUs_input} placeholder="Сообщение" />
      </div>
      <button className={style.btn}>Отправить</button>
      <div className={style.success}> Сообщение успешно отправлено</div>
    </div>
  );
};

export { Contacts };
