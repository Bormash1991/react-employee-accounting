import { Component } from "react";
import "./add-form.scss";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, salary } = this.state;
    const { onAdd } = this.props;
    return (
      <div className="add-form">
        <h3 className="add-form__title">Додайте нового співробітника</h3>
        <form className="add-form__form">
          <input
            value={name}
            name="name"
            onChange={this.onValueChanges}
            type="text"
            placeholder="Ім'я"
            className="add-form__input"
          />
          <input
            value={salary}
            name="salary"
            onChange={this.onValueChanges}
            type="text"
            placeholder="З/П в $"
            className="add-form__input"
          />
          <button
            onClick={(e) => onAdd(e, { name, salary })}
            className="add-form__btn"
          >
            Додати
          </button>
        </form>
      </div>
    );
  }
}
export default AddForm;
