import "./app.scss";
import SearchPanel from "../search-panel/search-panel";
import WorkersInfo from "../workers-info/workers-info";
import WorkersFilter from "../workers-filter/workers-filter";
import WorkersList from "../workers-list/workers-list";
import AddForm from "../add-form/add-form";
function App() {
  return (
    <div className="app">
      <WorkersInfo />
      <div className="search-panel">
        <SearchPanel />
        <WorkersFilter />
      </div>
      <WorkersList />
      <AddForm />
    </div>
  );
}
export default App;
