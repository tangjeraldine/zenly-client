import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Field, Formik, Form } from "formik";
import urlcat from "urlcat";
import axios from "axios";
// import GoodsValidation from "../../Validations/GoodsValidation";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function EditGoodsDetailsModal() {
  const { editGoodsDets } = useContext(AuthContext);

  const handleEditGoodsDetails = (values: object) => {
    console.log(values);
    const urlEditGoodsDetails = urlcat(SERVER, `admin/editgoodsdetails/`);
    axios
      .put(urlEditGoodsDetails, values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Edit Goods Item Details: {editGoodsDets.title}
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            {/* using formik */}
            <Formik
              initialValues={{
                title: editGoodsDets?.title,
                image_url: editGoodsDets?.image_url,
                description: editGoodsDets?.description,
                goods_type: editGoodsDets?.goods_type,
                price: editGoodsDets?.price,
                id: editGoodsDets?.id,
              }}
              //   validationSchema={GoodsValidation}
              onSubmit={(values) => handleEditGoodsDetails(values)}>
              {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                initialValues,
              }) => (
                <Form>
                  <label htmlFor='Title'>
                    <h5>Item Title</h5>
                  </label>
                  <div>
                    <Field
                      id='title'
                      name='title'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      placeholder='Title'
                    />
                    {/* {errors.title && touched.title ? (
                      <div>{errors.title}</div>
                    ) : null} */}
                  </div>
                  <br />
                  <label htmlFor='image url'>
                    <h5>Upload Image URL</h5>
                  </label>
                  <div>
                    <Field
                      id='image_url'
                      name='image_url'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image_url}
                      placeholder='Image URL'
                    />
                  </div>
                  <br />
                  <label htmlFor='Description'>
                    <h5>Description</h5>
                  </label>
                  <div>
                    <Field
                      id='description'
                      name='description'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      placeholder='Goods Description'
                    />
                  </div>
                  <br />
                  <label htmlFor='Goods Type'>
                    <h5>Goods Type</h5>
                  </label>
                  <div>
                    <Field
                      as='select'
                      name='goods_type'
                      values={values.goods_type}
                      onChange={handleChange}>
                      <option disabled>select</option>
                      <option value='Service'>Service</option>
                      <option value='Product'>Product</option>
                    </Field>
                  </div>
                  <br />
                  <label htmlFor='Price'>
                    <h5>Price</h5>
                  </label>
                  <div>
                    <Field
                      id='price'
                      name='price'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      placeholder='Price in SGD'
                    />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-success'>
                    Save Details
                  </button>
                  <br />
                </Form>
              )}
            </Formik>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
