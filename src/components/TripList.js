import React, { useState } from 'react';
import { useEffect } from 'react';
import  './TripList.css'

const TripList = () => {
const[trips, setTrips] = useState([]);
const[url ,setUrl] = useState('http://localhost:8000/trips');
  useEffect(() =>{
    fetch(url)
    .then(res=>(res.json()))
    .then((data) => setTrips(data));
  },[url])
  
  
  return <div className='trip-list'> 
      <h2>Trip List </h2>
      <ul>
          {trips && trips.map((trip)=>(
              <li key={trip.id}>
                  <h3>{trip.title}</h3>
                  <p>{trip.price}</p>
              </li>
          ))}
      </ul>
      <div className='filters'>
          <button onClick={() => setUrl('http://localhost:8000/trips?loc=europe')}>Europeon</button>
          <button onClick={() => setUrl('http://localhost:8000/trips')} >All trips</button>
      </div>
  </div>;
};

export default TripList;
