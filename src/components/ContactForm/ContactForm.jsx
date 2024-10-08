import React, { Component } from 'react';
import css from './ContactForm.module.css';
const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  static defaultProps = { handleSubmit: this.handleSubmit };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            Name
            <input
              className={css.formName}
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name"
            />
          </label>
          <label className={css.formLabel}>
            Number
            <input
              className={css.formNumber}
              type="tel"
              name="number"
              required
              value={number}
              onChange={this.handleChange}
              placeholder="Enter your number"
            />
          </label>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
