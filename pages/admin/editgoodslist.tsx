import { AuthContext } from "../../components/AuthContext";

import urlcat from "urlcat";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";
import EditGoodsDetailsModal from "../../components/Modals/EditGoodsDetailsModal";
import Link from "next/link";
import AddNewGoodsModal from "../../components/Modals/AddNewGoodsModal";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function AdminMain() {
  const { userDetails, setEditGoodsDets } = useContext(AuthContext);
  const [allGoods, setAllGoods] = useState([] as any[]);

  useEffect(() => {
    const urlDisplayAllGoods = urlcat(SERVER, `admin/viewgoodslist/`);
    axios
      .get(urlDisplayAllGoods)
      .then(({ data }) => {
        console.log(data);
        setAllGoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  const handleSetGoodsDetails = (id: number) => {
    const urlDisplayThisGood = urlcat(SERVER, `admin/viewgoodslist/${id}`);
    axios
      .get(urlDisplayThisGood)
      .then(({ data }) => {
        console.log(data);
        setEditGoodsDets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (id: number) => {
    const urlDeleteThisItem = urlcat(SERVER, `admin/deleteuser/${id}`);
    axios
      .get(urlDeleteThisItem)
      .then(({ data }) => {
        console.log(data);
        setAllGoods(allGoods.filter((del: { id: number }) => del.id !== id));
        alert("This item has been deleted.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className='text-center display-5'>
        Inventory List
        <br />
        <button
          type='button'
          className='btn btn-warning btn-lg p-2 m-5'
          data-bs-toggle='modal'
          data-bs-target='#addNewModal'
          data-bs-whatever='@getbootstrap'>
          Add A New Item
        </button>
      </h3>

      <AddNewGoodsModal />
      <br />
      {allGoods.map((thisGood, index) => (
        <div className='card p-3 w-50 text-center mx-auto m-3' key={index}>
          <div className='card-body'>
            <img
              src={thisGood.image_url}
              alt='itemphoto'
              style={{ height: "200px", width: "300px" }}
              className='rounded m-3'
            />
            <h5 className='card-title'>Title: {thisGood?.title}</h5>
            <h5 className='card-text'>Price: ${thisGood?.price}</h5>
            <button
              type='button'
              className='btn btn-primary m-3'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              data-bs-whatever='@getbootstrap'
              onClick={() => handleSetGoodsDetails(thisGood.id)}>
              <a>View or Edit Details</a>
            </button>
            <hr />
            <button
              className='btn btn-danger m-1'
              onClick={() => handleDeleteItem(thisGood.id)}>
              Delete This Item
            </button>
          </div>
        </div>
      ))}
      <EditGoodsDetailsModal />
    </div>
  );
}
