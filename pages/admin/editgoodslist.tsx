import Layout from "../../components/LayoutAdmin";
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

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

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
    <Layout home>
      <div>
        <h3>Welcome back, {name}</h3>
        <button
          type='button'
          className='btn btn-warning p-2 m-5'
          data-bs-toggle='modal'
          data-bs-target='#addNewModal'
          data-bs-whatever='@getbootstrap'>
          <a>Add A New Item</a>
        </button>
        <AddNewGoodsModal />
        <br />
        {allGoods.map((thisGood, index) => (
          <div className='card p-3 w-50 text-center' key={index}>
            <div className='card-header'>{thisGood?.created_at}</div>
            <div className='card-body'>
              <img
                src={thisGood.image_url}
                alt='itemphoto'
                style={{ height: "200px", width: "300px" }}
              />
              <h5 className='card-title'>Title: {thisGood?.title}</h5>
              <p className='card-text'>Price: {thisGood?.price}</p>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                data-bs-whatever='@getbootstrap'
                onClick={() => handleSetGoodsDetails(thisGood.id)}>
                <a>View or Edit Details</a>
              </button>
              <br />
              <button
                className='btn btn-danger'
                onClick={() => handleDeleteItem(thisGood.id)}>
                Delete This Item
              </button>
            </div>
          </div>
        ))}
        <EditGoodsDetailsModal />
      </div>
    </Layout>
  );
}
