import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
      .then(res=>res.json())
      .then(data =>setCountries(data))
  }, [])


  return (
    <div className="App">
      {countries.map(data => <Countries countries={data}></Countries>)}
    </div>
  );
}

export default App;
