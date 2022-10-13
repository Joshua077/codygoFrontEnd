
import React from 'react'
import { Link } from 'react-router-dom';
import {RightProps} from "../../typescript.type";


export default function HomeRight(props : RightProps ) {
    

    return (
        <div>
        
          {props.hotelList?.map((x) =>{
            return(
              <div className='card' key={x._id}>
                <div className='hotelName'>
                <h6> {x.name.toLocaleUpperCase()}</h6>
                </div>
                <div className='hotelDetails'>
                <p>City : {x.city.toLocaleUpperCase()}</p>
                <p>Country : {x.country.toLocaleUpperCase()}</p>
                <p>Address : {x.address.toLocaleUpperCase()}</p>
               
              <Link to={`/edit/${x._id}`}> <button className='editButton'>Edit</button></Link> 
               <button onClick={() => {props.deleteHotel(x._id)}} className='deleteButton'>Delete</button>
                </div>
               
              </div>
            )
          }).reverse()}
        </div>
    )
}
