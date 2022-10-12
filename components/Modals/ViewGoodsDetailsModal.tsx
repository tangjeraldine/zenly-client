import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function ViewGoodsDetailsModal() {
  const { viewGoodsDets } = useContext(AuthContext);
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
              Title: {viewGoodsDets?.title}
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Description: {viewGoodsDets?.description}
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
