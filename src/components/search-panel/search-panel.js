import { Component } from "react";
import "./search-panel.scss";
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onUpdateSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.onUpdateSearch(search);
  };
  render() {
    return (
      <input
        type="text"
        className="search-panel__input"
        placeholder="Знайти робітника"
        onChange={this.onUpdateSearch}
        value={this.state.search}
      />
    );
  }
}
export default SearchPanel;
