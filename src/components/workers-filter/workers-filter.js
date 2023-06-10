import { Component } from "react";
import "./workers-filter.scss";
class WorkersFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }
  onChooseFilter = (e) => {
    if (e.target.classList.contains("workers-filter__btn")) {
      const filter = e.target.getAttribute("data-filter");
      this.setState({ filter });
      this.props.onChooseFilter(filter);
    }
  };
  render() {
    const { filter } = this.state;it 
    const activeClass = "workers-filter__btn workers-filter__btn_active";
    const defaultClass = "workers-filter__btn";
    return (
      <div className="workers-filter" onClick={this.onChooseFilter}>
        <button
          data-filter=""
          className={filter == "" ? activeClass : defaultClass}
        >
          Усі працівники
        </button>
        <button
          data-filter="increase"
          className={filter == "increase" ? activeClass : defaultClass}
        >
          На підвищення
        </button>
        <button
          data-filter="more"
          className={filter == "more" ? activeClass : defaultClass}
        >
          З/П більше 1000
        </button>
      </div>
    );
  }
}
export default WorkersFilter;
