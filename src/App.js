import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h2>Item Pool</h2>
          <div class="mx-auto border border-dark rounded bg-success d-sm-flex flex-wrap">
            <img src="#" class="item" alt="An Item From the Item Pool" />
          </div>
        </div>

        <div class="col-sm-5">
          <h2>Selected Items</h2>
          <div class="mx-auto border border-dark rounded bg-danger d-sm-flex flex-wrap">
            <img
              src="#"
              class="item"
              alt="A Selected Item, transfered here when selected from item pool."
            />
          </div>
        </div>

        <div class="col-sm-2">
          <h3>Origins and Classes</h3>
          <div class="mx-auto border border-dark rounded bg-dark d-sm-flex flex-wrap">
            <img src="#" class="item" alt="An Origin" />
            <img src="#" class="item" alt="A Class" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-10">
          <h2>Recommended Team Comp</h2>
          <h5>Items beneath each champ</h5>
          <div class="mx-auto border border-dark rounded bg-warning d-sm-flex flex-wrap">
            <img src="#" class="item" alt="Champion" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
