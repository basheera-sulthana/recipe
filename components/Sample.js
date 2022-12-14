import React, { useEffect } from "react";
import { useState } from "react";
import Food from "../components/Food.json";
import "./recipe.css";

function Sample() {
  const [search, setSearch] = useState("");

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div>
        <div className="container p-3">
          <div className="row">
            <center>
              <button onClick={handleClick} className="btn btn-secondary">
                Change
              </button>
            </center>
            <h1>Recipes</h1>
            <h2>hiii</h2>
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {Food.filter((Food) =>
              Food.ItemName.toLowerCase().includes(search.toLowerCase())
            ).map((Food) => {
              return (
                <>
                  <div className="col-md-4 mb-3" style={{ paddingTop: "2%" }}>
                    <div className="card-col">
                      <div className="card-header bg-custom">
                        <h3>Item ID : {Food.id}</h3>
                      </div>

                      <div className="card-body">
                      <div className=""  key={Food.ItemName}>
                      <img src={Food.Productimg}
                      className="rounded"
                      alt="img"
                      width="380"
                      height="220"/>
                      <br/>

                      <h4>Name : {Food.ItemName}</h4>
                      <p>{Food.Productdescription}</p>
                      </div>
                      </div>

                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sample;
