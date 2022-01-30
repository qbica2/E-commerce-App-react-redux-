import * as yup from 'yup';


const Validations = yup.object().shape({
    email: yup.string().email("Please enter a valid e-mail").required("e mail cannot be empty"),
    password: yup.string().min(8).max(20).required("password cannot be empty")
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number'),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"Passwords does not match").required("password cannot be empty")
  });

  export default Validations ;
