import Layout from "../../components/LayoutAdmin";
import { AuthContext } from "../../components/AuthContext";
import urlcat from "urlcat";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function EditUsers() {
  const { userDetails, setEditGoodsDets } = useContext(AuthContext);
  const [thisName, setThisName] = useState<string>("");
  const [thisStatus, setThisStatus] = useState<string>("");
  const [userData, setUserData] = useState([] as any[]);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  const handleName = (e: any) => {
    setThisName(e.target.value);
  };
  const handleChangeStatus = (e: any) => {
    setThisStatus(e.target.value);
  };

  const handleSearchUserByName = () => {
    console.log(thisName);
    const urlDisplayThisUser = urlcat(SERVER, `admin/viewuserslist/`);
    axios
      .post(urlDisplayThisUser, thisName)
      .then(({ data }) => {
        console.log(data);
        // setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id: number) => {
    const urlDeleteThisUser = urlcat(SERVER, `admin/deleteuser/${id}`);
    axios
      .delete(urlDeleteThisUser)
      .then(({ data }) => {
        console.log(data);
        alert("This user has been deleted.");
      })
      .catch((error) => {
        console.log(error);
        alert("This user cannot be deleted. Please try again later.");
      });
  };

  const handleSuspend = (id: number) => {
    const urlDisplayThisUser = urlcat(SERVER, `admin/changeuserstatus/${id}`);
    axios
      .put(urlDisplayThisUser, thisStatus)
      .then(({ data }) => {
        console.log(data);
        alert(`Status for this user has been changed to level ${thisStatus}.`);
      })
      .catch((error) => {
        console.log(error);
        alert("User status could not be changed. Please try again later.");
      });
  };

  return (
    <Layout home>
      <div>
        <h3>Welcome back, {name}</h3>
        <br />
        <div className='input-group mb-3'>
          <span className='input-group-text' id='inputGroup-sizing-default'>
            Name of User <em>(case sensitive, full name only)</em>
          </span>
          <input
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            onChange={handleName}
          />
        </div>
        <button
          type='button'
          className='btn btn-dark'
          onClick={handleSearchUserByName}>
          Search
        </button>
        <br />
        <hr />
        {userData.map((each, index) => (
          <div key={index}>
            <h5>Name: {each.full_name}</h5>
            <button onClick={() => handleDelete(each.id)}>Delete User</button>
            <br />
            <hr />
            <input type='number' onChange={handleChangeStatus} />
            <button onClick={() => handleSuspend(each.id)}>
              Change User Access
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
