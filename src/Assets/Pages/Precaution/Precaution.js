import React from "react";
import Mask from "../../Images/mask.jpg";
import Distance from "../../Images/distance.jpg";
import Wash from "../../Images/wash.jpg";
import Infected from "../../Images/infected.png";
import Stay from "../../Images/stayhome.png";
import { height } from "@mui/system";
export default function Precaution() {
  return (
    <div className="bg-light">
      <h1 className="title text-center  text-capitalize fw-bold fs-2 my-4 text-black bg-light pt-5">
        Precaution measures{" "}
      </h1>
      <div className="container text-center ">
        <div className="row">
          <div className="col mx-5">
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: `18rem` }}>
              <img
                src={Mask}
                className="card-img-top prevention-Img"
                alt="..."
                height="400px"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">Wear Mask</h5>
                <p className="card-text fs-6">
                  Masks should be used as part of a comprehensive strategy of
                  measures to suppress transmission and save lives
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-5">
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: `18rem`, height: '21.5rem' }}>
              <img
                src={Distance}
                className="card-img-top prevention-Img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">
                  Practice Social Distancing{" "}
                </h5>
                <p className="card-text fs-6">
                  Social distancing aim to slow the spread of disease by
                  stopping chains of transmission of COVID-19.
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-5">
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: `18rem` }}>
              <img
                src={Wash}
                className="card-img-top prevention-Img "
                alt="..."
                height="190px"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">Wash Your Hands</h5>
                <p className="card-text fs-6">
                  Regular handwashing is the best ways to remove germs, avoid
                  getting sick, and prevent the spread of germs to others.
                </p>
              </div>
            </div>
          </div>
          <div className="col my-5 mx-2">
            <div
              className="card shadow p-3 mb-5 bg-white rounded"
              style={{ width: `18rem`, margin: `10px 224px` }}
            >
              <img
                src={Infected}
                className="card-img-top prevention-Img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">
                  Avoid Close Contact With Infected People
                </h5>
                <p className="card-text fs-6">
                  Avoiding contact with people who have COVID-19, can reduce
                  your risk of catching the virus from them.
                </p>
              </div>
            </div>
          </div>
          <div className="col my-5 mx-2">
            <div
              className="card shadow p-3 mb-5 bg-white rounded" 
              style={{ width: `18rem`, margin: `10px 10px`, height: '23rem' }}
            >
              <img
                src={Stay}
                className="card-img-top prevention-Img"
                alt="..."
                height="190px"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">Stay At Home</h5>
                <p className="card-text fs-6">
                  Self-isolation is recommended for those diagnosed with
                  COVID-19 and who suspect they have been infected.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
