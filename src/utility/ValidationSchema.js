import * as yup from "yup"








// For Sign-up
export const regFormSchema = yup
.object({
  email: yup.string().required("Email is required").email("Invalid email format"),
  userName: yup.string().required("Username is required"),
  password:yup.string().required("Password is required").min(8,"Minimum lenght of passwoord must be at least 8 characters"),
  confirmPassword:yup.string().required("Confirm password is required").min(8,"Minimum lenght of passwoord must be at least 8 characters")
  .oneOf([yup.ref("password")],"Password do not match")
})
.required()

// For sign-in
export const signInSchema = yup
.object({
  email: yup.string().required("Email is required").email("Invalid email format"),
  password:yup.string().required("Password is required").min(8,"Minimum lenght of passwoord must be at least 8 characters")
})
.required();

// For forget password
export const forgotPasswordSchema = yup
.object({
  email: yup.string().required("Email is required").email("Invalid email format")
})
.required();

// For reset password
export const resetPasswordSchema = yup
.object({

  password:yup.string().required("Password is required").min(8,"Minimum lenght of passwoord must be at least 8 characters"),
  confirmPassword:yup.string().required("Confirm password is required").min(8,"Minimum lenght of passwoord must be at least 8 characters")
  .oneOf([yup.ref("password")],"Password do not match")
})
.required();

// For Post
export const postSchema = yup
.object({

  text:yup.string().required("Text is required"),
  
})
.required();