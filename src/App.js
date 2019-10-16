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
      SelectedItems: [],
      Origins: [],
      Classes: []
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

    axios
      .get("/api/classes/")
      .then(res => this.setState({ Classes: res.data }))
      .catch(err => console.log(err)); // eslint-disable-line no-console

    axios
      .get("/api/origins/")
      .then(res => this.setState({ Origins: res.data }))
      .catch(err => console.log(err)); // eslint-disable-line no-console
  }

  render() {
    function createList(data) {
      return data.map(d => (
        <img
          src={require("./static/" + d.name + ".png")}
          class="item"
          alt={d.data.name}
        />
      ));
    }

    const ChampList = createList(this.state.ChampionPool);
    const ItemList = createList(this.state.ItemPool);
    const ClassList = createList(this.state.Classes);
    const OriginList = createList(this.state.Origins);

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

          <div class="col-sm-1">
            <h3>Classes</h3>
            <div class="mx-auto border border-dark rounded bg-dark d-sm-flex flex-wrap">
              {ClassList}
            </div>
          </div>

          <div class="col-sm-1">
            <h3>Origins</h3>
            <div class="mx-auto border border-dark rounded bg-dark d-sm-flex flex-wrap">
              {OriginList}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h2>Recommended Team Comp</h2>
            <h5>Items beneath each champ</h5>
            <div class="mx-auto border border-dark rounded bg-warning d-sm-flex flex-wrap">
              {ChampList}
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
