import React, { useEffect, useState } from "react";
import { newhotel, data } from "../../typescript.type";
import { Link } from "react-router-dom";
export default function HomeLeft() {
  const [hotel, setHotel] = useState<newhotel | null>(null);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/hotel`)
      .then((res) => res.json())
      .then((data: data) => {
        setHotel(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div style={{ marginBottom: "54px", marginTop: "39px" }}>
        <h4> City</h4>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Select Available City
          </button>
          <ul className="dropdown-menu">
            {hotel?.map((x) => {
              return (
                <li key={x._id}>
                  <Link className="dropdown-item" to={`/?city=${x.city}`}>
                    {x.city}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div style={{ marginBottom: "154px", marginTop: "39px" }}>
        <h4> Country </h4>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Select Available Country
          </button>
          <ul className="dropdown-menu">
            {hotel?.map((x) => {
              return (
                <li>
                  <Link className="dropdown-item" to={`/?country=${x.country}`}>
                    {x.country}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
