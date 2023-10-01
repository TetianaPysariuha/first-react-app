import React from "react";
import styles from "./CartForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { clearCartAC } from '../../store/cartData/actionCreators';
import * as yup from 'yup';
import { useSelector } from 'react-redux';


const CartForm = () => {

    const dispatch = useDispatch();
    const cartData = useSelector(store => store.cartData.cartData);

    const initialValues = {
        name: '',
        lastName: '',
        age: '',
        adress: '',
        phone: '',
    }

    const validationChema = yup.object().shape({
        name: yup.string()
            .required('Поле є обов\'язковим до заповнення'),
        lastName: yup.string()
            .required('Поле є обов\'язковим до заповнення'),
        age: yup.number()
            .min(16, 'Замовити товар можуть тільки повнолітні особи')
            .max(120, 'Напевно, є помилка у введених даних - вам дійсно стільки років?')
            .required('Поле є обов\'язковим до заповнення'),
        adress: yup.string()
            .required('Поле є обов\'язковим до заповнення'),
        phone: yup.string()
            .required('Поле є обов\'язковим до заповнення'),
    })

    const handleSubmit = (values, { resetForm }) => {
        const dataSend = {user: values, purchases: cartData};
        console.log(dataSend);
        dispatch(clearCartAC    ());
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationChema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty }) => (
                <Form className={styles.form}>

                    <Field
                        className={styles.formField}
                        name='name'
                        type='text'
                        placeholder = "Ім'я"
                    />
                    <ErrorMessage name='name'>{msg => <span className={styles.errorMessage}>{msg}</span>}</ErrorMessage>

                    <Field
                        className={styles.formField}
                        name='lastName'
                        type='text'
                        placeholder = "Прізвище"
                    />
                    <ErrorMessage name='lastName'>{msg => <span className={styles.errorMessage}>{msg}</span>}</ErrorMessage>

                    <Field
                        className={styles.formField}
                        name='age'
                        type='text'
                        placeholder = "Вік"
                    />
                    <ErrorMessage name='age'>{msg => <span className={styles.errorMessage}>{msg}</span>}</ErrorMessage>

                    <Field
                        className={styles.formField}
                        name='adress'
                        type='text'
                        placeholder = "Адреса доставки"
                    />
                    <ErrorMessage name='adress'>{msg => <span className={styles.errorMessage}>{msg}</span>}</ErrorMessage>

                    <Field
                        className={styles.formField}
                        name='phone'
                        type='text'
                        placeholder = "Телефон"
                    />
                    <ErrorMessage name='phone'>{msg => <span className={styles.errorMessage}>{msg}</span>}</ErrorMessage>

                    <button
                        className={styles.btnSubmit}
                        disabled={!dirty || !isValid}
                        type='submit'
                    >Замовити</button>

                </Form>)
            }
        </Formik>
    )
}

export default CartForm;