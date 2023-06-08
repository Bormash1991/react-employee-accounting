import "./workers-info.scss";
const WorkersInfo = ({ workers, increasedWorkers }) => {
  return (
    <div className="workers-info">
      <div className="workers-info__record">
        Облік співробітників у компанії
      </div>
      <div className="workers-info__sum">
        Спільне число працівників: {workers}
      </div>
      <div className="workers-info__prize">
        Премію отримають: {increasedWorkers}
      </div>
    </div>
  );
};
export default WorkersInfo;
