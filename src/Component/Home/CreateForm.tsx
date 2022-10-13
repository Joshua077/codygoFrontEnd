import React, { useState } from "react";
import { HotelDetails } from "../../typescript.type";
import "./Home.css";

type FucntionProps = {
  createHotel: (data: HotelDetails) => void;
  errMessage: boolean;
  back: () => void;
};
export default function CreateForm(props: FucntionProps) {
  const [hotel, setHotel] = useState<{ [x: string]: string }>();
  const [formError, setFormError] = useState(false);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setHotel((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: hotel?.name,
      country: hotel?.country,
      city: hotel?.city,
      address: hotel?.address,
    };

    if (
      data?.name == "" ||
      data.name === undefined ||
      data?.city == "" ||
      data.city === undefined ||
      data?.country == "" ||
      data.country === undefined ||
      data?.address == "" ||
      data.address === undefined
    ) {
      setFormError(true);
      return;
    }

    props.createHotel(data);
  };

  return (
    <div>
      <button className="createButton" onClick={props.back}>
        Go Back{" "}
      </button>
      <form
        onSubmit={handleSubmit}
        className="card"
        style={{ padding: "16px" }}
      >
        <h1>Create Hotel</h1>
        {formError && (
          <p style={{ color: "red" }}> PLease Enter a valid input </p>
        )}
        <div>
          <p>Name</p>
          <input
            className="createForm"
            type="text"
            name="name"
            value={hotel?.name}
            onChange={handleForm}
          />
        </div>
        <div>
          <p>City</p>
          <input
            className="createForm"
            type="text"
            name="city"
            value={hotel?.city || " "}
            onChange={handleForm}
          />
        </div>
        <div>
          <p>Address</p>
          <input
            className="createForm"
            type="text"
            name="address"
            value={hotel?.address || " "}
            onChange={handleForm}
          />
        </div>
        <div>
          <p>Country</p>
          <input
            className="createForm"
            type="text"
            name="country"
            value={hotel?.country || " "}
            onChange={handleForm}
          />
          <button className="createButton">Create Hotel </button>
        </div>
      </form>
    </div>
  );
}
