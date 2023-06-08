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
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };
  render() {
    const { name, salary } = this.state;

    return (
      <div className="add-form">
        <h3 className="add-form__title">Додайте нового співробітника</h3>
        <form onSubmit={(e) => this.onSubmit(e)} className="add-form__form">
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
          <button type="submit" className="add-form__btn">
            Додати
          </button>
        </form>
      </div>
    );
  }
}
export default AddForm;
