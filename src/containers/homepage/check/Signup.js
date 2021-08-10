import { Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import React,{useState} from 'react';
import Axios from "axios";
export const Signup = () => {
 
const [ setPdfFile]=useState();
const [pdfFileError, setPdfFileError]=useState('');
const validate = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  Role: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
  Salary:  Yup.number()
  .positive('Salary must be greater than zero')
  .required('Salary is required'),
  
})  
const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              console.log(selectedFile.size)
              addPdf(e.target.result)
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{
      console.log('select your file');
    }
  }
/*  const addPdf = (file) => {
    Axios.post("http://localhost:3002/file", {
      file : file ,
    })
  }; */
  const add = (values ) => {
    Axios.post("http://localhost:3002/test", {
      firstName: values.firstName,
      lastName : values.lastName,
      email: values.email,
      Role:values.Role,
      Salary : values.Salary
    })
  };
  const addPdf = (file) => {
    Axios.post("http://localhost:3002/file", {
      file : file ,
    })
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        Role: '',
        Salary: '',
      }}
      validationSchema={validate}
      onSubmit={(values ,{resetForm}) => {
        add(values)
        resetForm({values:''});
      }}
    >
      {formik => (
        <>
        <div className ="text-black">
          <h1 className="my-4 font-weight-bold  .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" required type="text" />
            <TextField label="last Name" name="lastName" type="text" required/>
            <TextField label="Email" name="email" type="email"required />
            <TextField label="Desired Role" name="Role" required type="text" />
            <TextField label="Desired Salary" name="Salary" type="number" required />
            <button className="btn btn-dark mt-3" type="submit" >Register</button>     
          </Form>
          </div>
          <div>
            <h1>drop your cv here</h1>
          <TextField label="Choose CV" name="choosefile" type="file"  onChange={handlePdfFileChange}/>
           {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
           </div>
        </>
      )}
    </Formik>
  )
}
