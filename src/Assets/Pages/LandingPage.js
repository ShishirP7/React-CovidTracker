import React, { useContext, useState } from "react";
import { DataSearch } from "../Components/Data Search/data.search";
import Navbar from "../Components/NavBar/Navbar";
import CovidBanner from "../Images/covid19Banner.jpg";
import "../Pages/LandingPage.css";
import { DataContext } from "../Context/ContextData";
import News from "../Components/NewsComp/News";
export default function LandingPage() {
  const { Data, setData } = useContext(DataContext);
  const data = () => {
    console.log(Data);
  };
  return (
    <>
      <div className="container-fluid w-100 p-0  ">
        <Navbar />
        <div className="container-fluid p-0 m-0 ">
          <div class="card text-bg-dark">
            <img src={CovidBanner} class="card-img " alt="..." />
            <div class="card-img-overlay d-flex-column bg-dark">
              <h5 class="p-35">Do I Need to Be Afraid Of Corona Virus</h5>
              <p class="p-18">
                Iterative approaches to corporate strategy foster collaborative
                thinkin
              </p>
            </div>
          </div>
        </div>

        <DataSearch />
      </div>
      <News/>
    </>
  );
}
