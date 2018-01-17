import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
const imaginaryThings = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
    { label: 'Thing 3', value: 3 },
    { label: 'Thing 4', value: 4 },
    { label: 'Thing 5', value: 5 },
  ];
const axios = require('axios');


// Our inner form component. Will be wrapped with Formik({..})
const InnerForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    resetForm
  } = props;
  const _handleSelect = (selectChoice) => {
    setFieldValue('imaginaryThingId', selectChoice.value);
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label> Tema de Interes</label>
        <VirtualizedSelect
          name="imaginaryThingId"
          value={values.imaginaryThingId}
          options={imaginaryThings}
          onChange={_handleSelect} />
        <small className="form-text text-muted">
        </small>
      </div>
        <div className='form-group'>
            <input
                id="name"
                placeholder="mi nombre"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className= {errors.name && touched.name ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.name &&
            touched.name && <div className="input-feedback">{errors.name}</div>}
        </div>
        <div className='form-group'>
            <input
                id="email"
                placeholder="mi correo"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.email &&
            touched.email && <div className="input-feedback">{errors.email}</div>}
        </div>
        

        <div className='form-group'>
            <input
                id="phone"
                placeholder="mi teléfono"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.phone &&
            touched.phone && <div className="input-feedback">{errors.phone}</div>}
        </div>
        <button type="submit" disabled={isSubmitting} className='btn btn-dark btn-lg btn-block my-5'>
            enviar
        </button>
        </form>
  );
};

const UserForm = withFormik({
  mapPropsToValues: () => ({ email: '', name: '', phone: '', imaginaryThingId: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    name: Yup.string()
      .required(),
    phone: Yup.number()
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
     // console.log(values.imaginaryThingId);
      
    axios({
        url: '/mydb',
        method: 'post',
        data: values,
        auth: {
            username: "7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix",
            password: "263ec09fe38de9074079e2653e93626c75e4bb4db2e4c1cb59a4f47da6daf037" 
        }
    }).then(res => {
        console.log(res);
        alert("Gracias, tus datos fueron guardados correctamente.")
        resetForm();
    })
      .catch(err => console.log(err));
  },
  displayName: 'BasicForm', // helps with React DevTools
})(InnerForm);


export default UserForm;
