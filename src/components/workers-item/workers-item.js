import "./workers-item.scss";
import { Component } from "react";
class WorkersItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: props.increase,
      stared: props.stared,
    };
  }
  changeIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  changeStared = () => {
    this.setState(({ stared }) => ({
      stared: !stared,
    }));
  };
  render() {
    const { name, salary } = this.props;
    let itemClass = "workers-item ";
    const { increase, stared } = this.state;
    let starClass = "fas fa-star fa-star_show";
    if (!stared) {
      starClass = "fas fa-star ";
    }
    if (increase) {
      itemClass += "increase";
    }
    return (
      <li className={itemClass}>
        <div onClick={this.changeStared} className="workers-item__name">
          {name}
        </div>
        <div className="workers-item__salary">{salary}$</div>
        <div className="workers-item__box">
          <button onClick={this.changeIncrease} className="workers-item__btn">
            <i className="fas fa-cookie"></i>
          </button>
          <button className="workers-item__btn">
            <i className="fas fa-trash"></i>
          </button>
          <button className="workers-item__btn  workers-item__btn_tra">
            <i className={starClass}></i>
          </button>
        </div>
      </li>
    );
  }
}
export default WorkersItem;
