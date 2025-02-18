import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/countries";
import Header from "./components/header";
import { getCountries } from "./services/countryService";
import Paginator from "./components/paginator";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCountries = countries.slice(startIndex, endIndex);
  const totalPages = Math.ceil(countries.length / itemsPerPage);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        console.log(data);

        setCountries(data);
      } catch (err) {
        console.log("no se pudieron cargar los paises");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  function IncreasePaginator() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }
  function decreasePaginator() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  return (
    <>
      <Header />

    
      <div className="row mt-5 justify-content-center">
        {paginatedCountries.map((country) => (
          <Countries
            key={country.name.common}
            countries={country}
            currentPage={currentPage}
            paginatedCountries={paginatedCountries}
            totalPages={totalPages}
            IncreasePaginator={IncreasePaginator}
            decreasePaginator={decreasePaginator}
          />
        ))}
      </div>

      <div>
        <Paginator 
        currentPage={currentPage}
        totalPages={totalPages}
        IncreasePaginator={IncreasePaginator}
        decreasePaginator={decreasePaginator}
        ></Paginator>
      </div>
    </>
  );
}

export default App;
