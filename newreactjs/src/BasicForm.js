import {useFormik} from "formik";
import * as yup from 'yup';

const formValidation = (values)=> {
    const errors= {};
    
    if(values.email.length<5){
        errors.email = "please enter longer email";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "please enter a valid email";
        }

    if(values.password.length<8){
        errors.password = "please enter longer password";
    } else if(values.password.length>12){
        errors.password = "please enter less than 12"; 
    }
    return errors;
}

const formValidationSchema = yup.object({
    email: yup.string()
    .min(5, "need a bigger email")
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"character not match")
    .required(),
    password: yup.string()
    .min(8, "need a longer password")
    .max(12, "password should be between 8 to 12 character")
    .required(),
});

export function BasicForm(){
    const {handleSubmit,values, handleChange, handleBlur,errors, touched} =useFormik({
            initialValues: {email:"", password:""}, 
            // validate: formValidation,
            validationSchema : formValidationSchema,
            // onSubmit:(values) =>{
            //     console.log("onSubmit",values);
            // },
    });
    return(
    <form onSubmit ={handleSubmit}>
        <input 
        id="email"  
        name="email"
        value={values.email} 
        onChange={handleChange}
        onBlur={handleBlur}
        type="email" 
        placeholder = "please enter your email" />
        {errors.email && touched.email ? errors.email : ""}

        <input 
        id="password"
        name="password"
        value={values.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        type="password" 
        placeholder = "please enter your password" />
        {errors.password && touched.email ? errors.password : ""}

        <button type="submit">Submit</button>
    </form>
    );
  }