import { useState, useEffect } from 'react';
import Axios from "axios";
const useForm =  (callback, validate) => {
  const [values, setValues] = useState({
    username:'',
    email:'',
    message:'',
    telephone : '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const addClient = () => {
    Axios.post("http://localhost:3002/create", {
      username: values.username,
      email: values.email,
      message:values.message,
      telephone : values.telephone,
    })
  };


  
   const handleSubmit = e => {
     e.preventDefault();
 
     setErrors(validate(values));
     setIsSubmitting(true);
     addClient();
   };
 

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();   
        
      }
    },
    [callback,errors,isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
