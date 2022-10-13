import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Component/Home/Home.css";

export default function Edit() {
  const history = useNavigate();
  const { id } = useParams();

  const [formError, setFormError] = useState(false);

  const [name, setName] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [city, setCity] = useState<any>();
  const [address, setAddress] = useState<any>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cod-joshbackend.herokuapp.com/api/v1/hotel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message, "ffff");
        setName(data.message.name);
        setCity(data.message.city);
        setAddress(data.message.address);
        setCountry(data.message.country);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      country,
      city,
      address,
    };
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    setLoading(true);
    fetch(`https://cod-joshbackend.herokuapp.com/api/v1/hotel/${id}`, requestOptions)
      .then((response) => {
        response.json();
      })
      .then((result) => {
        setLoading(false);
        console.log(result, "result");
        history("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("error here");
        setFormError(true);
      });
  };

  return (
    <div className="edit">
      {loading ? (
        <div >
          <h1 style={{textAlign : "center"}}>Loading</h1>
        </div>
      ) : (
        <form style={{ padding: "16px" }} onSubmit={handleSubmit}>
          <h1>Edit Hotel</h1>
          {formError && (
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "23px",
                color: "red",
              }}
            >
              {" "}
              PLease Enter a valid input{" "}
            </p>
          )}
          <div>
            <p>Name</p>
            <input
              className="editForm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>City</p>
            <input
              className="editForm"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <p>Address</p>
            <input
              className="editForm"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <p>Country</p>
            <input
              className="editForm"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <button className="createButton">Edit Hotel </button>
        </form>
      )}
    </div>
  );
}
