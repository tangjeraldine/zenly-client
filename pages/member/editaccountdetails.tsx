import Layout from "../../components/LayoutLogin";
import urlcat from "urlcat";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import Router from "next/router";
import ErrorPage from "../../components/ErrorPage";
import { Field, Formik, Form } from "formik";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import EditAccountDetsValidation from "../../Validations/EditAccountDetsValidation";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const { userDetails } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [editSuccessful, setEditSuccessful] = useState(true);

  useEffect(() => {
    const urlCurrentUser = urlcat(
      SERVER,
      `/sign/currentuser/${userDetails?.id}`
    );
    axios
      .get(urlCurrentUser)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }

  const handleEditProfile = (values: object) => {
    const urlEditUserDets = urlcat(
      SERVER,
      `/sign/edituserdetails/${userDetails?.id}`
    );
    axios
      .put(urlEditUserDets, values)
      .then(({ data }) => {
        console.log(data);
        setEditSuccessful(true);
        alert("Account details updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        setEditSuccessful(false);
      });
  };

  const handleDeleteUser = () => {
    const urlDeleteUser = urlcat(
      SERVER,
      `/sign/deletemyaccount/${userDetails?.id}`
    );
    axios
      .delete(urlDeleteUser)
      .then(({ data }) => {
        console.log(data);
        alert("Your account has been deleted successfully.");
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Your account could not be deleted. Please try again later or reach out to our team for technical assistance."
        );
      });
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Layout home>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <img
                src='https://images.unsplash.com/photo-1662920390926-61936eddb607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
                alt='sidepic'
                className='d-block mx-auto image-fluid'
              />
            </div>
            <div className='col-sm'>
              <h1 className='display-6 m-4'>Edit Account Details</h1>
              <div className='m-4'>
                <Formik
                  initialValues={{
                    full_name: userDetails?.full_name,
                    email: userDetails?.email,
                    password: "",
                    phone_no: userDetails?.phone_no,
                    birthdate: userDetails?.birthdate,
                    gender: userDetails?.gender,
                  }}
                  validationSchema={EditAccountDetsValidation}
                  onSubmit={(values) => {
                    handleEditProfile(values);
                  }}>
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
                        {/* {errors.full_name && touched.full_name ? (
                    <div>{errors.full_name}</div>
                  ) : null} */}
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
                        {/* {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null} */}
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
                        {/* {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null} */}
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
                        {/* {errors.phone_no && touched.phone_no ? (
                    <div>{errors.phone_no}</div>
                  ) : null} */}
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
                        {/* {errors.birthdate && touched.birthdate ? (
                    <div>{errors.birthdate}</div>
                  ) : null} */}
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
                        {/* {errors.gender && touched.gender ? (
                    <div>{errors.gender}</div>
                  ) : null} */}
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
                        Edit Account Details
                      </button>
                      <br />
                      {!editSuccessful && (
                        <p>
                          Failed to edit user details. Please try again later.
                        </p>
                      )}
                    </Form>
                  )}
                </Formik>
                <br />
                <button className='btn btn-danger' onClick={handleDeleteUser}>
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
