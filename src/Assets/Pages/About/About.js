import React from "react";
import covidbanner from "../../Images/covidbanner.webp";
import Card from "react-bootstrap/Card";
import "./about.css";
import covid from "../../Images/covidstarted.jpg";
import cough from "../../Images/cough.png";
import { Symptopms } from "../../Data/Symptomsdata";
export default function About() {
  return (
    <div className=" w-100 ">
      <Card className="">
        <Card.Img src={covidbanner} alt="covidbanner" />
      </Card>
      <div className=" text-black   px-5 mx-5">
        <div className="aboutcovid w-75 p-5 mx-5 rounded row  ">
          <h3>What is Corona Virus?</h3>
          <p>
            Coronaviruses are a type of virus. There are many different kinds,
            and some cause disease. A coronavirus identified in 2019,
            SARS-CoV-2, has caused a pandemic of respiratory illness, called
            COVID-19.
          </p>
          <div className="About-card px-5 py-3 ">
            <div className="p-4  m-5 about-info text-white">
              <h5>What you need to Know</h5>
              <h3>Covid-19</h3>
              <ul>
                <li>
                  COVID-19 is the disease caused by SARS-CoV-2, the coronavirus
                  that emerged in December 2019.
                </li>
                <li>
                  COVID-19 can be severe, and has caused millions of deaths
                  around the world as well as lasting health problems in some
                  who have survived the illness.
                </li>
                <li>
                  The coronavirus can be spread from person to person. It is
                  diagnosed with a test.
                </li>
                <li>
                  The best way to protect yourself is to get vaccinated and
                  boosted when you are eligible, follow testing guidelines, wear
                  a mask, wash your hands and practice physical distancing.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <h4>How did Corona Virus Started?</h4>
            <img src={covid} className="covidimg2" />
            <p>
              The first case of COVID-19 was reported Dec. 1, 2019, and the
              cause was a then-new coronavirus later named SARS-CoV-2.
              SARS-CoV-2 may have originated in an animal and changed (mutated)
              so it could cause illness in humans. In the past, several
              infectious disease outbreaks have been traced to viruses
              originating in birds, pigs, bats and other animals that mutated to
              become dangerous to humans. Research continues, and more study may
              reveal how and why the coronavirus evolved to cause pandemic
              disease.
            </p>
          </div>
          <div className="mt-5">
            <h4>How did It Spread?</h4>

            <p>
              As of now, researchers know that the coronavirus is spread through
              droplets and virus particles released into the air when an
              infected person breathes, talks, laughs, sings, coughs or sneezes.
              Larger droplets may fall to the ground in a few seconds, but tiny
              infectious particles can linger in the air and accumulate in
              indoor places, especially where many people are gathered and there
              is poor ventilation. This is why mask-wearing, hand hygiene and
              physical distancing are essential to preventing COVID-19.
            </p>
          </div>
          <div className="mt-5">
            <h4>Symptoms of Covid-19 </h4>
            <div className="symptom gap-5 row">
              {Symptopms.map((sym) => {
                return (
                  <div className=" symptom-card  col-3">
                    <img src={sym.iconmage} />
                    <span>{sym.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
