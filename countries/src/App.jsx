
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/countries'
import Header from './components/header'
import { getCountries } from './services/countryService';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCountries = async () => {
      try{
        const data = await getCountries();
        console.log(data);
        
        setCountries(data);
      }catch(err){
        console.log("no se pudieron cargar los paises");
        
      }finally{
        setLoading(false);
      }
    }
    fetchCountries();
  }, [])

  return (
    <>
      <Header/>
        <Countries/>
    </>
  )
}

export default App
