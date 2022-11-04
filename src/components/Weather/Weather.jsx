import React, { useState, useEffect } from 'react'
import { states } from '../../constants/states'
import axios from "axios";
import './Weather.css'
function Weather() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [weatherData, setWeatherData] = useState({
    humidity: '',
    temperature: '',
    pressure: ''
  })
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: state == '' ? states[0] : state },
    headers: {
      'X-RapidAPI-Key': '65f80013d5msh03fc58481aad33ep13e36bjsn6cc135746874',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.request(options).then(function (response) {
      setWeatherData({
        humidity: response.data.current.humidity,
        temperature: response.data.current.temp_c,
        pressure: response.data.current.pressure_mb
      })
      setLoading(false);
    }).catch(function (error) {
      console.error(error);
      setLoading(false);
    });
  }, [state]);

  const HandleChange = (e) => {
    const value = e.target.value;
    setState(value);
  }
  return (
    <div>
      <h2 className="p-4 text-sm text-black">Weather</h2>
      <div className="w-full mb-[6rem] min-h-[70vh] p-4 bg-white rounded-2xl">
        <div className="input flex flex-col justify-center min-w-[300px] w-[35%] mx-auto my-7">
          <label htmlFor="state" className='my-4 text-center'>Select state</label>
          <select name="state" className="bg-[#EDEDED] px-4 text-black h-[50px] rounded-[10px]" id="state" onChange={HandleChange}>
            {states.map((state, index) => <option key={index} value={state}>{state}</option>)}
          </select>
        </div>

        <div className='h-auto bg-light-blue p-6 w-fit mx-auto text-white rounded-[23px] flex justify-center flex-wrap'>
          <div className='temperature'>
            <p className="text-sm text-center font-Roboto">Temperature</p>
            <div className='flex items-center px-8'>
              <h1 className="text-[56px] quantity font-podkova text-center">{loading ? "...." : weatherData?.temperature} °C</h1>
              <div className='w-[4px] v-divider h-[124px] ml-12 bg-white'></div>
            </div>
            <div className='h-[4px] h-divider w-full my-4 bg-white'></div>

          </div>
          <div className='humidity'>
            <p className="text-sm text-center font-Roboto">Humidity</p>
            <div className='flex items-center px-8'>
              <h1 className="text-[56px] quantity font-podkova">{loading ? "...." : weatherData?.humidity}</h1>
              <div className='w-[4px] v-divider h-[124px] ml-10 bg-white'></div>
            </div>
              <div className='h-[4px] h-divider w-full md:hidden my-4 bg-white'></div>
          </div>
          <div className='pressure'>
            <p className="text-sm text-center font-Roboto">Pressure</p>
            <div className='flex items-center mx-10'>
              <h1 className="text-[56px] quantity font-podkova">{loading ? "...." : weatherData?.pressure}</h1>
              <div className='w-0 v-divider h-[124px] bg-white'></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather