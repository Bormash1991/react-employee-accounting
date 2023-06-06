import WorkersItem from "../workers-item/workers-item";
import "./workers-list.scss";
const WorkersList = ({ data, onDelete }) => {
  const elements = data.map(({ id, ...workerData }) => (
    <WorkersItem onDelete={() => onDelete(id)} key={id} {...workerData} />
  ));
  return <ul className="workers-list">{elements}</ul>;
};
export default WorkersList;
