import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handleSearch = event => this.props.onSearch(event.target.value);

  render() {
    return (
      <div className={css.filter}>
        <label htmlFor="search">Find contacts by name</label>
        <input type="search" name="search" onChange={this.handleSearch} />
      </div>
    );
  }
}
