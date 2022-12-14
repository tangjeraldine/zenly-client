import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import urlcat from "urlcat";
import { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import parseJwt from "../../parseJwt";
import Router from "next/router";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import LoginValidation from "../../Validations/LoginValidation";
import LayoutCommon from "../../components/Layouts/LayoutCommon";

import RegisterModal from "../../components/Modals/RegisterModal";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function FirstPost() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInSuccessful, setSignInSuccessful] = useState(true);
  const { setUserDetails } = useContext(AuthContext);

  const handleLogin = async (values: object) => {
    setLoading(true);
    setSignInSuccessful(true);
    const url = urlcat(SERVER, "sign/login");
    axios
      .post(url, values)
      .then(({ data }) => {
        const UserType = parseJwt(data.token).currentUser.security_lvl;
        const USER = parseJwt(data.token).currentUser;
        setUserDetails(USER);
        setLoading(false);
        if (UserType === 1) {
          Router.push("/member/mainpage");
        } else if (UserType === 2) {
          Router.push("/admin/mainpage");
        } else {
          Router.push("/login/redirect");
        }
      })
      .catch((error) => {
        console.log(error);
        setSignInSuccessful(false);
        setLoading(false);
        Router.push("/login/redirect");
      });
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <LayoutCommon home>
      <div>
        <Head>
          <title>Login to ZenLy</title>
        </Head>
        <RegisterModal />
        {loading ? (
          <p className='placeholder-glow p-5'>
            Loading...
            <span className='placeholder col-12'></span>
          </p>
        ) : (
          <div className='text-center align-middle'>
            <Image
              src='/images/icon_pic.png'
              height={150}
              width={150}
              alt='zenly'
            />
            <h2 className='p-2'>Login</h2>
            <h5 className='p-2'>Hu??n y??ng! (Welcome back.)</h5>
            <div
              className='alert alert-warning alert-dismissible fade show m-3'
              role='alert'>
              <strong>Hey there!</strong> Please log in again to confirm your
              account.
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'></button>
            </div>
            <br />
            {/* using formik */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginValidation}
              onSubmit={(values) => handleLogin(values)}>
              {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                initialValues,
              }) => (
                <Form>
                  <label htmlFor='Email'>
                    <h5>Email</h5>
                  </label>
                  <div>
                    <Field
                      id='email2'
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
                    <Field
                      id='password2'
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
                  {!signInSuccessful && <p>Login failed!</p>}
                </Form>
              )}
            </Formik>
            <br />
            <h5>or</h5>
            <br />
            <button
              type='button'
              className='btn btn-outline-dark m-2'
              style={{ backgroundColor: "#FF9F29" }}
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              data-bs-whatever='@mdo'>
              Register a new account
            </button>
            <br />
            <Link href='/'>
              <a>
                <button className='btn btn-outline-dark m-3'>
                  Back to home
                </button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </LayoutCommon>
  );
}
