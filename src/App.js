import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  /* Display the post feed */

  constructor(props) {
    super(props);
    this.state = {
      ChampionPool: [],
      ItemPool: [],
      SelectedItems: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("/api/champions/")
      .then(res => this.setState({ ChampionPool: res.data }))
      .catch(err => console.log(err)); // eslint-disable-line no-console

    axios
      .get("/api/items/")
      .then(res => this.setState({ ItemPool: res.data }))
      .catch(err => console.log(err)); // eslint-disable-line no-console
  }

  render() {
    const ChampList = this.state.ChampionPool.map(d => (
      <img
        src={process.env.PUBLIC_URL + "/images/champions/" + d.name + ".png"}
        class="item"
        alt={d.data.name}
      />
    ));

    const ItemList = this.state.ItemPool.map(d => (
      <img src={"./public/" + d.name + ".png"} class="item" alt={d.data.name} />
    ));

    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <h2>Item Pool</h2>
            <div class="mx-auto border border-dark rounded bg-success d-sm-flex flex-wrap">
              {ItemList}
            </div>
          </div>

          <div class="col-sm-5">
            <h2>Selected Items</h2>
            <div class="mx-auto border border-dark rounded bg-danger d-sm-flex flex-wrap">
              {this.state.SelectedItems}
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
}

App.propTypes = {
  url: PropTypes.string.isRequired
};

export default App;
