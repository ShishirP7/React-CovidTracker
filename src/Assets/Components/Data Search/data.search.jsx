import img3 from "../../Images/covid-icon.png";
import active from "../../Images/cough.png";
import total from "../../Images/emergency.png";
import today from "../../Images/stayhome.png";
import death from "../../Images/death.png";
import recovered from "../../Images/hospital-bed.png";
import critical from "../../Images/critical.png";
import { BsEmojiSmile } from "react-icons/bs";
import { ImSad } from "react-icons/im";
import { FaSyringe } from "react-icons/fa";
import "./dataSearch.css";
import { useContext } from "react";
import { DataContext } from "../../Context/ContextData";

export const DataSearch = () => {
  return (
    <>
      <div className="container ">
        <DataCard />
      </div>
    </>
  );
};

export const DataCard = () => {
  return (
    <>
      {/* Covid Data Container*/}
      <div className="container data-Card p-5 ">
        <div className="row info-container">
          {/* <h1 className="header mb-5">Covid-19 Data Globally</h1> */}
          <GlobalData />
          <SearchCountry />
        </div>
      </div>
    </>
  );
};

{/* Global Data Component*/ }
export const GlobalData = () => {
  const { Data, setData } = useContext(DataContext);
  return (
    <div className="col-7 cases-container">
      <div className="row info-Image">
        <h1 className="header mb-5">Covid-19 Global Data</h1>
        <div className="col-sm-12 col-lg-5 mb-5 d-flex justify-content-between item">
          <div>
            <h5>Total Death</h5>
            <p>{Data.TotalDeaths}</p>
          </div>
          <div>
            <img src={death} alt="Covid Death" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 mb-5 d-flex justify-content-between item">
          <div>
            <h5>Active</h5>
            <p>{Data.TotalConfirmed}</p>
          </div>
          <div>
            <img src={active} alt="Active Cases" />
          </div>
        </div>
      </div>
      <div className="row info-Image">
        <div className="col-sm-12 col-lg-5 mb-5 d-flex justify-content-between item">
          <div>
            <h5>New Deaths</h5>
            <p>{Data.NewDeaths}</p>
          </div>
          <div>
            {" "}
            <img src={total} alt="Total Case" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 mb-5 d-flex justify-content-between item">
          <div>
            <h5>Today</h5>
            <p>{Data.NewConfirmed}</p>
          </div>
          <div>
            {" "}
            <img src={today} alt="Today Case" />
          </div>
        </div>
      </div>
      <div className="row info-Image">
        <div className="col-sm-12 col-lg-5  mb-5 d-flex justify-content-between item">
          <div className="w-25">
            <h5>Recovered</h5>
            <p>{Data.TotalRecovered}</p>
          </div>
          <div>
            <img src={recovered} alt="Recovere Case" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 mb-5 d-flex justify-content-between item">
          <div>
            <h5>Critical</h5>
            <p>{Data.NewRecovered}</p>
          </div>
          <div>
            {" "}
            <img src={critical} alt="Critical Case" />
          </div>
        </div>
      </div>
      <p>
        Do you want to know more about Covid-19 Cases and Deaths?
        <a href="https://data.humdata.org/visualization/covid19-humanitarian-operations/?ga1">
          <span style={{ color: "#ad2b41" }}>Click Here!</span>
        </a>
      </p>
    </div>
  );
};
{/* Searched Data Component*/ }
export const SearchCountry = () => {
  const { handleSearch, setdetails, CountryData } = useContext(DataContext);

  return (
    <>
      <div className="col-5 search-container">
        <div className="container row input-Field gap-2">
          <input
            className="col-7"
            onChange={(e) => setdetails(e.target.value)}
            placeholder="Enter Country Name"
          ></input>
          <button
            className="col-4 btn btn-outline-primary btn-lg btn-block"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {CountryData ? (
          <>
            {
              <div className="container-fluid mt-5">
                <h5 className="">Updated Data of {CountryData.country}</h5>
                <div className="row main-in">
                  <div className="col-sm-6 mt-3">
                    <div className="data-row new-row" id="1">
                      <div>
                        <img src={img3} id="covid-icon" alt="Total Case" />
                      </div>
                      <div className="data-search">
                        <p>New Cases</p>
                        <h6>{CountryData.cases}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="data-row rec-row" id="2">
                      <div>
                        <BsEmojiSmile size="30px" />
                      </div>
                      <div className="data-search">
                        <p>Recovered</p>
                        <h6>{CountryData.recovered}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="data-row death-row" id="3">
                      <div>
                        <ImSad size="30px" />
                      </div>
                      <div className="data-search">
                        <p>Deaths</p>
                        <h6>{CountryData.deaths}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="data-row pcr-row" id="4">
                      <div>
                        <FaSyringe size="30px" />
                      </div>
                      <div className="data-search">
                        <p>PCR Test </p>
                        <h6>{CountryData.tests}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        ) : (
          <>
            <div className="container-fluid mt-5">
              <div>No countyr Selected</div>
              {[1, 1, 1, 1, 1].map((el) => {
                return (
                  <div className="mt-3">
                    <div className="card">Country1</div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
