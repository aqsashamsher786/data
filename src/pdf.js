import React,{useState} from 'react'
// Import the main component
import Axios from "axios";
//import {base64toBlob} from "./type";
export const Pdf = () => {

  // Create new plugin instance
 
  // for onchange event
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [ setViewPdf]=useState(null);

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              console.log(selectedFile.size+'!!!!!!!!!!!!!!')
              addPdf(e.target.result);
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
  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
      console.log(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }
  /* const blob = base64toBlob(base64String);
  const url = URL.createObjectURL(blob); */
  
  
  return (
    <div className='container'>

    <br></br>
    
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
        <button type="submit" className='btn btn-success btn-lg' >
          View
        </button>
      </form>
      <br></br>
      <h4>View PDF</h4>
    </div>
  )
}
export default Pdf;
