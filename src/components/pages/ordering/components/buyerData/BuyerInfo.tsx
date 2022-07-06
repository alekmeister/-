import React from 'react';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const validPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

type clientInformation = { name: string; placeholder: string };

const Info: clientInformation[] = [
  { name: 'name', placeholder: 'Имя' },
  { name: 'email', placeholder: 'E-mail' },
  { name: 'phone', placeholder: 'Телефон' },
  { name: 'message', placeholder: 'Комментарий' },
];
type initValue = { name: string; phone: string; email: string; message: string };

// type Props = React.Dispatch<React.SetStateAction<initValue>>;
// type Props = () => void

export const BuyerInfo: React.FC = ({ data }) => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Данные покупателя </div>
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
          phone: Yup.string().matches(validPhone, 'Неверный номер').required('Обязательное поле'),
        })}
        onSubmit={(values) => {
          data(values);
          console.log(values);
        }}
      >
        <Form className={style.inner}>
          {Info.map((el) => (
            <>
              <Field className={style.input} placeholder={el.placeholder} name={el.name} key={uuidv4()} />
              <ErrorMessage className={style.valid} name={el.name} component="div" key={uuidv4()} />
            </>
          ))}
          <button type="button">1</button>
        </Form>
      </Formik>
    </div>
  );
};
