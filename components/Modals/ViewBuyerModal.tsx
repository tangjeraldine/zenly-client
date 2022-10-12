import { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function ViewBuyerModal() {
  const { viewBuyer } = useContext(AuthContext);
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
              Name of Buyer: {viewBuyer?.full_name}, ({viewBuyer.gender})
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Phone No.: {viewBuyer?.phone_no}
            </h1>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Email: {viewBuyer?.email}
            </h1>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Date of Birth: {viewBuyer?.birthdate}
            </h1>
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
