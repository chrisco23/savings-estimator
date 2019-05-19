import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserType, incIndex } from '../actions';

class StartCard extends Component {

  handleUserType = (e) => {
    e.preventDefault();
    this.props.setUserType(e.target.value);
    this.props.incIndex();
  }

  render() {
    return [
      <div className="wwse-select-box">
        <p>This calculator provides an estimate of how the Whole Washington 
        Health Plan would impact you and your budget.</p>
      </div>,
      <button
        key="wwse-button-individual"
        className="wwse-select-button"
        onClick={this.handleUserType}
        type="submit"
        value="individual">
        I'm an Individual
      </button>,

      <div className="wwse-select-box" key="wwse-box-individual">
        <div className="wwse-info-icon"><i className="fa fa-2x fa-info-circle"></i></div>
        <p>
          To get the most accurate results, you'll need:
          </p>
            
            <ul>
              <li> Last year's tax return</li>
              <li> A pay stub for each wage earner in the household</li>
              <li> A pay stub or statement showing your insurance premium amount (if applicable)</li>
              <li> An estimate of your out-of-pocket healthcare costs</li>
            </ul>
      </div>,

      <button
        key="wwse-button-business"
        className="wwse-select-button"
        onClick={this.handleUserType}
        type="submit"
        value="business">
        I'm a Business Owner with Employees
      </button>,

      <div className="wwse-select-box" key="wwse-box-business">
        <div className="wwse-info-icon"><i className="fa fa-2x fa-info-circle"></i></div>
        <p>
        Using your current payroll and healthcare costs, this tool provides 
        a very high-level estimate of projected healthcare costs.
        </p>
      </div>

    ];
  }
};


export default connect(null, { setUserType, incIndex })(StartCard);
