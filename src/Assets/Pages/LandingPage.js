import React, { useContext } from "react";
import { DataSearch } from "../Components/Data Search/data.search";
import CovidBanner from "../Images/covid19Banner.jpg";
import "../Pages/LandingPage.css";
import { DataContext } from "../Context/ContextData";
import Precaution from "./Precaution/Precaution";
export default function LandingPage() {
  const { Data, setData } = useContext(DataContext);

  return (
    <>
      <div className="container-fluid w-100 p-0 ">
        <div className="container-fluid p-0 m-0 ">
          <div className="card text-bg-dark ">
            <img src={CovidBanner} className="card-img " alt="..." />
            <div className="card-img-overlay d-flex-column bg-dark">
              <h5 className="p-35">Do I Need to Be Afraid Of Corona Virus</h5>
              <p className="p-18">
                Iterative approaches to corporate strategy foster collaborative
                thinkin
              </p>
            </div>
          </div>
        </div>

        <DataSearch />
      </div>
    </>
  );
}
