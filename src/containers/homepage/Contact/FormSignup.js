import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
const FormSignup = ({submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right' >
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <input
            className='form-input'
            type='text'
            name='message'
            placeholder='Enter your message'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>telephone</label>
          <input
            className='form-input'
            type='text'
            name='telephone'
            placeholder='XXX-XXX-XXXX'
            value={values.telephone}
            onChange={handleChange}           
          />
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>
       
        <button  className ="form-input-btn" type='submit' onClick = {onsubmit}>
        submit
        </button>    
      </form>
    </div>
  );
};

export default FormSignup;
