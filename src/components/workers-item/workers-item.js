import "./workers-item.scss";

const WorkersItem = ({
  name,
  salary,
  onDelete,
  stared,
  increase,
  toggleParams,
}) => {
  let itemClass = "workers-item ";
  let starClass = "fas fa-star fa-star_show";
  if (!stared) {
    starClass = "fas fa-star ";
  }
  if (increase) {
    itemClass += "increase";
  }
  return (
    <li className={itemClass}>
      <div
        onClick={toggleParams}
        data-toggle="stared"
        className="workers-item__name"
      >
        {name}
      </div>
      <div className="workers-item__salary">{salary}$</div>
      <div className="workers-item__box">
        <button
          onClick={toggleParams}
          data-toggle="increase"
          className="workers-item__btn"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={onDelete} className="workers-item__btn">
          <i className="fas fa-trash"></i>
        </button>
        <button className="workers-item__btn  workers-item__btn_tra">
          <i className={starClass}></i>
        </button>
      </div>
    </li>
  );
};
export default WorkersItem;
