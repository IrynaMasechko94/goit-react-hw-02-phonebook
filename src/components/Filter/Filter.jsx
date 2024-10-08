import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  static defaultProps = {
    filter: this.filter,
    handleChange: this.handleChange,
  };
  render() {
    const { filter, handleChange } = this.props;
    return (
      <div>
        <label className={css.filterLabel}>Find contacts by Name </label>
        <input
          type="text"
          className={css.filterName}
          name="filter"
          placeholder="Enter filter"
          value={filter}
          onChange={handleChange}
        />
      </div>
    );
  }
}
