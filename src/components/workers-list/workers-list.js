import WorkersItem from "../workers-item/workers-item";
import "./workers-list.scss";
const WorkersList = ({ data, onDelete, toggleParams }) => {
  const elements = data.map(({ id, ...workerData }) => (
    <WorkersItem
      onDelete={() => onDelete(id)}
      toggleParams={(e) =>
        toggleParams(id, e.currentTarget.getAttribute("data-toggle"))
      }
      key={id}
      {...workerData}
    />
  ));
  return <ul className="workers-list">{elements}</ul>;
};
export default WorkersList;
