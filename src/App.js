import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ChampionPool: [],
      ItemPool: [],
      SelectedItems: [],
      Origins: [],
      Classes: [],
      itemSelector: 0
    };
    this.fetchData = this.fetchData.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
    this.deselectItem = this.deselectItem.bind(this);
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

  chooseItem(e) {
    const Item = Object.create(e);
    const selection = this.state.itemSelector;
    Item.selector = selection;
    JSON.parse(JSON.stringify(Item));

    this.setState({ itemSelector: this.state.itemSelector + 1 });

    this.setState(prevState => ({
      SelectedItems: [...prevState.SelectedItems, Item]
    }));
  }

  deselectItem(e) {
    var array = this.state.SelectedItems.filter(function(s) {
      return s.selector !== e.selector;
    });
    this.setState({ SelectedItems: array });
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

    function createItemList(data, itemChooser) {
      return data.map((d, index) => (
        <img
          src={require("./static/" + d.name + ".png")}
          class="item"
          alt={d.data.name}
          data-item={index}
          onClick={itemChooser.bind(this, d)}
        />
      ));
    }

    const ChampList = createList(this.state.ChampionPool);
    const ClassList = createList(this.state.Classes);
    const OriginList = createList(this.state.Origins);

    const ItemList = createItemList(this.state.ItemPool, this.chooseItem);
    const SelectedItemList = createItemList(
      this.state.SelectedItems,
      this.deselectItem
    );

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
              {SelectedItemList}
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
