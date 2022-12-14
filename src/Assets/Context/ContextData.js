import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [Data, setData] = useState([]);
  const [details, setdetails] = useState("");
  const [CountryData, setCountryData] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((data) => {
      setData(data.data.Global);
      setloading(true);
      console.log(data)
    });
  }, []);

  const handleSearch = (e) => {
    details === ""
      ? alert("Field Khali vo kei Lekha na bro")
      : axios
          .get(`https://disease.sh/v3/covid-19/countries/${details}`)
          .then((Output) => {
            setCountryData(Output.data);
            console.log(Output.data);
          })
          .catch((err) => {
            alert("Country Not Found: Arkai planet Bata Ayeu kya !");
          });
  };
  return (
    <DataContext.Provider
      value={{ Data, setData, handleSearch, setdetails, CountryData, details ,loading}}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
