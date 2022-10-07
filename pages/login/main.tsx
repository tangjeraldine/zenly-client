import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import urlcat from "urlcat";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import LoginValidation from "../../Validations/LoginValidation";
import Layout from "../../components/layoutPublic";
import RegisterModal from "../../components/Modals/RegisterModal";

export default function FirstPost() {
  const [open, setOpen] = useState(false);
  const [signInSuccessful, setSignInSuccessful] = useState(true);

  const handleSignIn = (values: string) => {
    setSignInSuccessful(false);
    console.log(values);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Layout home>
        <Head>
          <title>Login to ZenLy</title>
        </Head>
        <div className='text-center align-middle'>
          <Image
            src='/images/icon_pic.png' // Route of the image file
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt='zenly'
          />
          <h2>Login</h2>
          <h5>Welcome back.</h5>
          <br />
          {/* using formik */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginValidation}
            onSubmit={(values) => handleSignIn(values)}>
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              initialValues,
            }) => (
              <Form>
                {" "}
                <label htmlFor='Email'>
                  <h5>Email</h5>
                </label>
                <div>
                  <Field
                    id='email'
                    name='email'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Email'
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <br />
                <label htmlFor='Password'>
                  <h5>Password</h5>
                </label>
                <div>
                  {" "}
                  <Field
                    id='password'
                    name='password'
                    type={open === false ? "password" : "text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='Password'
                    class='w-full mt-2 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm'
                  />
                  {open === false ? (
                    <BsEyeSlashFill onClick={handleToggle} />
                  ) : (
                    <BsEyeFill onClick={handleToggle} />
                  )}
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <br />
                <button
                  type='submit'
                  className='btn btn-outline-dark'
                  style={{ backgroundColor: "#5BB318" }}
                  disabled={
                    !(
                      Object.keys(errors).length === 0 &&
                      Object.keys(touched).length !== 0
                    )
                  }>
                  Sign in
                </button>
                <br />
                {!signInSuccessful && <p>Sign in failed!</p>}
              </Form>
            )}
          </Formik>
          <br />
          <h5>or</h5>
          <br />
          <button
            type='button'
            className='btn btn-outline-dark'
            style={{ backgroundColor: "#FF9F29" }}
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            data-bs-whatever='@mdo'>
            Register a new account
          </button>
          <br />
          <Link href='/'>Back to home</Link>
        </div>

        <RegisterModal />
      </Layout>
    </div>
  );
}
