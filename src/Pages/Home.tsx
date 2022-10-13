import React, { useEffect, useState } from "react";
import "../Component/Home/Home.css";
import HomeRight from "../Component/Home/HomeRight";
import { newhotel, data, HotelDetails } from "../typescript.type";
import CreateForm from "../Component/Home/CreateForm";
import { useLocation} from "react-router-dom";
import HomeLeft from "../Component/Home/HomeLeft";

export default function Home() {
  const [hotel, setHotel] = useState<newhotel | null>(null);
  const [loading, setLoading] = useState(false);
  const [newHotel, setNewHotel] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const [deletehotel, setDeletehotel] = useState(false);
  const [createhotel, setCreatehotel] = useState(false);
   const {search} = useLocation()
   
  const Back = () => {
    setNewHotel(false);
  };
  const deleteHotel = (id: number) => {
    const requestOptions = {
      method: "DELETE",
    };
    setLoading(true);
    fetch("https://cod-joshbackend.herokuapp.com/api/v1/hotel/" + id, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
       
        setLoading(false);
        setDeletehotel(true);
      })
      .catch((error) => {
        setLoading(false);
        setDeletehotel(true);
        
      });
  };

  const createHotel = (data: HotelDetails) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    setLoading(true);

    fetch("https://cod-joshbackend.herokuapp.com/api/v1/hotel", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        
        setLoading(false);
        setNewHotel(false);
        setCreatehotel(true);
      })
      .catch((error) => {
        setLoading(false);
        setCreatehotel(false);
        
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://cod-joshbackend.herokuapp.com/api/v1/hotel${search ? `${search}` : ''}`)
      .then((res) => res.json())
      .then((data: data) => {
        setHotel(data.message);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
       
      });
  }, [deletehotel, createhotel, search]);

  return (
    <div className="home">
      <div className="header">
        <h1>Hotel Records</h1>
      </div>
      {loading && <h1>Loading</h1>}
      <div className="container" style={{ marginTop: "54px" }}>
        <div className="row">
          <div className="col-sm-12 col-lg-4" >
            <h3>Categories</h3>
            <HomeLeft />
          </div>
          <div className="col-sm-12 col-lg-8">
            {newHotel ? (
              <div>
                {errMessage && <p> PLease Enter a valid input </p>}
                <CreateForm
                  createHotel={createHotel}
                  errMessage={errMessage}
                  back={Back}
                />
              </div>
            ) : (
              <div>
                <button
                  className="editButton"
                  onClick={() => {
                    setNewHotel(true);
                  }}
                >
                  Create Hotel
                </button>
                <HomeRight hotelList={hotel} deleteHotel={deleteHotel} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
