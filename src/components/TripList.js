import React, { useState,useCallback } from 'react';
import { useEffect } from 'react';
import  './TripList.css'
import {useFetch} from '../hooks/useFetch';
import Loading from './Loading';
const TripList = () => {

const[url ,setUrl] = useState('http://localhost:8000/trips');
 const{data,loading,error}=  useFetch(url,{type:'GET'});
    
  
  return <div className='trip-list'> 
      <h2>Trip List </h2>
      <ul>

          {loading && <Loading/>}  
          {error && <h2>{error}</h2>}
          {data && data.map((trip)=>(
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
