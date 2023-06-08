import { Component } from "react";
import nextId from "react-id-generator";

import "./app.scss";
import SearchPanel from "../search-panel/search-panel";
import WorkersInfo from "../workers-info/workers-info";
import WorkersFilter from "../workers-filter/workers-filter";
import WorkersList from "../workers-list/workers-list";
import AddForm from "../add-form/add-form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Bohdan", salary: 800, increase: false, id: 1, stared: false },
        { name: "Anna", salary: 1000, increase: true, id: 2, stared: true },
        { name: "Anna L.", salary: 1500, increase: false, id: 3, stared: true },
      ],
    };
  }
  deleteWorker = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((elem) => elem.id !== id),
    }));
  };
  toggleParams = (id, param) => {
    this.setState(({ data }) => ({
      data: data.map((worker) => {
        if (worker.id === id) {
          return { ...worker, [param]: !worker[param] };
        }
        return worker;
      }),
    }));
  };

  addWorker = (name, salary) => {
    const newWorker = {
      name,
      salary,
      increase: false,
      id: nextId(),
      stared: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newWorker],
    }));
  };
  render() {
    const workers = this.state.data.length;
    const increasedWorkers = this.state.data.filter(
      (worker) => worker.increase
    ).length;
    return (
      <div className="app">
        <WorkersInfo workers={workers} increasedWorkers={increasedWorkers} />
        <div className="search-panel">
          <SearchPanel />
          <WorkersFilter />
        </div>
        <WorkersList
          onDelete={this.deleteWorker}
          toggleParams={this.toggleParams}
          data={this.state.data}
        />
        <AddForm onAdd={this.addWorker} />
      </div>
    );
  }
}
export default App;
