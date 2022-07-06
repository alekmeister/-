import React from 'react';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

type clientAddress = { name: string; placeholder: string };
const address: clientAddress[] = [
  { name: 'country', placeholder: 'Cтрана' },
  { name: 'city', placeholder: 'Город' },
  { name: 'street', placeholder: 'Улица' },
  { name: 'house', placeholder: 'Дом' },
  { name: 'apartment', placeholder: 'Квартира' },
];

export const BuyerAddress: React.FC = ({ data }) => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Адрес получателя </div>
      <Formik
        initialValues={{
          country: '',
          city: '',
          street: '',
          house: '',
          apartment: '',
        }}
        validationSchema={Yup.object({
          country: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          city: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          street: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          house: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          apartment: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
        })}
        onSubmit={(values) => {
          data(values);
        }}
      >
        <Form className={style.inner}>
          {address.map((el) => (
            <>
              <Field className={style.input} placeholder={el.placeholder} name={el.name} key={uuidv4()} />
              <ErrorMessage className={style.valid} name={el.name} component="div" key={uuidv4()} />
            </>
          ))}
        </Form>
      </Formik>
    </div>
  );
};
