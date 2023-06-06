import WorkersItem from "../workers-item/workers-item";
import "./workers-list.scss";
const WorkersList = () => {
  const data = [
    { name: "Bohdan", salary: 800, increase: false, id: 1, stared: false },
    { name: "Anna", salary: 1000, increase: true, id: 2, stared: true },
  ];
  const elements = data.map((worker) => (
    <WorkersItem key={worker.id} {...worker} />
  ));
  return <ul className="workers-list">{elements}</ul>;
};
export default WorkersList;
