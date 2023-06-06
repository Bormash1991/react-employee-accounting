import "./workers-filter.scss";
const WorkersFilter = () => {
  return (
    <div className="workers-filter">
      <button className="workers-filter__btn workers-filter__btn_active">
        Усі працівники
      </button>
      <button className="workers-filter__btn ">На підвищення</button>
      <button className="workers-filter__btn ">З/П більше 1000</button>
    </div>
  );
};
export default WorkersFilter;
