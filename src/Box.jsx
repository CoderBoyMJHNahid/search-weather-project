import React, { useState } from 'react';
import axios from 'axios'
import CloudIcon from '@mui/icons-material/Cloud';
import SevereColdIcon from '@mui/icons-material/SevereCold';

const Box = () => {

  const [city,setCity] = useState({
    latitude:"",
    longitude:""
  });

  const [val,setVal] = useState(['']);

  const [name,setName] = useState('');

  const action = (e) =>{

     const {name,value} = e.target;

     setCity((prev)=>{
      return {
        ...prev,
        [name]:value
      }
     });

     setVal(['']);
     
  }

  const effect = async () =>{

   await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=b8bf2203744be4456fc7c79e3e2276da`).then( (response) => {

      setVal(response.data.main);
      setName(response.data.name);

    }).catch((error)=> {

      console.error(error);
      alert('Sorry We couldn\'t found the city!! Please try again with new lait and long');

    });
    
  }

  return (

    <>
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>


      <div className="container">
        <div className="row">
          <div style={{width:'100%',height:'80vh'}} className='col-md-6 d-flex justify-content-center align-content-center'>
            
            <div className="card m-auto" style={{width:'500px',padding:'20px'}} id="box_content">
              <div className="card-body">
                <div className="title_card my-3">
                  <h1 className='text-center'>Search the weather</h1>
                </div>
                <div className="search">
                  <label>Search weather of city with latitude and longitude</label>
                 
                    <input onChange={action} type="number" value={city.latitude} name="latitude" placeholder='Enter the latitude' className='form-control mt-3' />
                    <input onChange={action} type="number" value={city.longitude} name="longitude" placeholder='Enter the longitude' className='form-control mt-3' />
                    <div className="text-center">
                      <button className='btn btn-light mt-3 col-12' onClick={effect}>Search</button>
                    </div>
                </div>
                {(val == '') ? null : <div className="weather_dec">

                  <h4 className='text-center mt-3'>{name}</h4>

                  <h3 className='text-center'>{val.temp} °c <CloudIcon/></h3>

                  <div className="mini_dec d-flex justify-content-around">
                    <span >minimum : {val.temp_max} °c <SevereColdIcon/></span>
                    <span >maximum : {val.temp_min} °c <SevereColdIcon/></span>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
      

      
    </>
  )
}

export default Box;
