import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <img className="nav-logo mr-3" alt="Corona Virus" />
            <div className="d-flex-row col ">
              <label className="nav-logo-text "> Covid-19</label>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo02"
            >
              <span>Home</span>
              <span>About</span>
              <span>Prevention</span>
              <span>News</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
