import { useState } from "react";
// import Router from "next/router";
import urlcat from "urlcat";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import RegisterValidation from "../../Validations/RegisterValidation";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(true);

  const handleRegisterNew = (values: object, event: any) => {
    event.preventDefault();
    const url = urlcat(SERVER, "/sign/newuser");
    axios
      .post(url, values)
      .then(({ data }) => {
        setRegistrationSuccessful(true);
        // Router.push("/login/redirect");
        alert("Your account has been created! Please log in.");
      })
      .catch((error) => {
        setRegistrationSuccessful(false);
        alert("Your account could not be created. Please try again later.");
      });
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className='modal fade'
      id='exampleModal'
      // tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Register as a member
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div
            className='modal-body text-center align-middle'
            style={{
              backgroundColor: "#FFCB42",
            }}>
            {/* using formik */}
            <Formik
              initialValues={{
                full_name: "",
                email: "",
                password: "",
                phone_no: "",
                birthdate: "",
                gender: "",
              }}
              validationSchema={RegisterValidation}
              onSubmit={(values, event) => handleRegisterNew(values, event)}>
              {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                initialValues,
              }) => (
                <Form>
                  <label htmlFor='Full Name'>
                    <h5>Full Name</h5>
                  </label>
                  <div>
                    <Field
                      id='full_name'
                      name='full_name'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.full_name}
                      placeholder='Full Name'
                    />
                    {errors.full_name && touched.full_name ? (
                      <div>{errors.full_name}</div>
                    ) : null}
                  </div>
                  <br />
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
                    <Field
                      id='password1'
                      name='password'
                      type={open === false ? "password" : "text"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder='Password'
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
                  <label htmlFor='Phone No.'>
                    <h5>Phone No.</h5>
                  </label>
                  <div>
                    <Field
                      name='phone_no'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone_no}
                      placeholder='Phone No.'
                    />
                    {errors.phone_no && touched.phone_no ? (
                      <div>{errors.phone_no}</div>
                    ) : null}
                  </div>
                  <br />
                  <label htmlFor='Birthdate'>
                    <h5>Birthdate</h5>
                    <p>(DD-MM-YYYY)</p>
                  </label>
                  <div>
                    <Field
                      name='birthdate'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthdate}
                      placeholder='DD-MM-YYYY'
                    />
                    {errors.birthdate && touched.birthdate ? (
                      <div>{errors.birthdate}</div>
                    ) : null}
                  </div>
                  <br />
                  <label htmlFor='Gender'>
                    <h5>Gender</h5>
                  </label>
                  <div>
                    <Field
                      as='select'
                      name='gender'
                      values={values.gender}
                      onChange={handleChange}>
                      <option disabled>select</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </Field>
                    {errors.gender && touched.gender ? (
                      <div>{errors.gender}</div>
                    ) : null}
                  </div>
                  <br />
                  <button
                    type='submit'
                    className='btn btn-success'
                    disabled={
                      !(
                        Object.keys(errors).length === 0 &&
                        Object.keys(touched).length !== 0
                      )
                    }>
                    Register As Member
                  </button>
                  <br />
                  {!registrationSuccessful && <p>Registration failed!</p>}
                </Form>
              )}
            </Formik>
          </div>
          <div className='modal-footer'>
            <p>Click anywhere outside this window to close it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
