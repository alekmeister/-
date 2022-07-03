import React, { useRef, useState } from 'react';
import { Title } from 'components/title/Title';
import { Map, Marker } from 'pigeon-maps';
import emailjs from '@emailjs/browser';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './contacts.module.scss';
import 'yup-phone';
import cn from 'classnames';

type Values = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const validPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const Contacts: React.FC = () => {
  const [responce, setResponce] = useState('');
  const sendEmail = (values: Values) => {
    emailjs.send('default_service', 'template_hs8oii9', values, 'tcKnImVuukeeJQ9d2').then(
      (result) => {
        setResponce(result.text);
      },
      (error) => {
        setResponce(error.text);
      }
    );
  };

  return (
    <div className={style.container}>
      <Title>Контакты</Title>

      <div className={style.map}>
        <Map height={450} defaultCenter={[55.7612915, 37.61944967]} defaultZoom={17}>
          <Marker width={50} anchor={[55.7612915, 37.61944967]} />
        </Map>
      </div>

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
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          email: Yup.string().email('Неправильный email').required('Обязательное поле'),
          phone: Yup.string().matches(validPhone, 'Неверный номер'),
          message: Yup.string().min(12, 'Минимум 12 символов').required('Обязательное поле'),
        })}
        onSubmit={(values) => {
          sendEmail(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={style.writeUs}>
            Напишите нам
            <Field className={style.writeUs_input} placeholder="Имя" name="name" />
            <ErrorMessage className={style.valid} name="name" component="div" />
            <Field className={style.writeUs_input} placeholder="E-mail" name="email" />
            <ErrorMessage className={style.valid} name="email" component="div" />
            <Field className={style.writeUs_input} placeholder="Телефон" name="phone" />
            <ErrorMessage className={style.valid} name="phone" component="div" />
            <Field as="textarea" className={style.writeUs_input} placeholder="Сообщение" name="message" />
            <ErrorMessage className={style.valid} name="message" component="div" />
            <button className={cn(style.btn, { [style.disabled]: isSubmitting })} type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
      {responce === 'OK' ? <div className={style.success}> Сообщение успешно отправлено</div> : null}
    </div>
  );
};

export { Contacts };
