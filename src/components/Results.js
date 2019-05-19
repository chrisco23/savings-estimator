import React, { Component } from 'react';
import BusinessResults from './BusinessResults';
import IndividualResults from './IndividualResults';
import { removeCommas, rmDecAndRound } from '../helpers/helper-functions';
import { connect } from 'react-redux';
import { getIndividualResults, getBusinessResults } from '../actions';

class Results extends Component {

  // call getResult function before component mounts to hydrate state with results
	componentWillMount() {
		this.getResult();
	}

	getResult = () => {
    const { vars, userType } = this.props;
    // conditionally get either business or individual results returned to our results object
    // use helper func to prepare data by stripping any decimals and round
		if (userType === 'business') {
			this.props.getBusinessResults(
        rmDecAndRound(vars[2]),
        rmDecAndRound(vars[0])
      );
		}
		else {
			this.props.getIndividualResults(
        rmDecAndRound(vars[0]),
        rmDecAndRound(vars[1]),
        rmDecAndRound(vars[2]),
        rmDecAndRound(vars[3]),
        rmDecAndRound(vars[4]),
        rmDecAndRound(vars[5]),
        rmDecAndRound(vars[6]),
        rmDecAndRound(vars[7]),
      );
		}
	}

	render() {
    const { results, userType, vars, range } = this.props;

		if (userType === 'business') {
      if(!results.futureCost) return null;

      const colorBarGreen = {
        width: `${parseInt((results.futureCost / removeCommas(vars[1])) * 100, 10) + 10}%`
      };

      let rangeStyle = {
				fontSize: `${1 + range / 100}em`,
				width: `${1}em`,
				height: `${1}em`
			};

      return (
				// Business Results
					<BusinessResults
						colorBarGreen={colorBarGreen}
						rangeStyle={rangeStyle}
						vars={vars}
						results={results}
						range={range}
					/>
			);
		} else {
			return (
			// Individual Results
				<IndividualResults
					results={results}
				/>
			);
		}
	}
};

function mapStateToProps(state){
  return{
    userType: state.userType,
    vars: state.vars,
    range: state.range,
    results: state.results
  }
}

export default connect(mapStateToProps, {getBusinessResults, getIndividualResults})(Results);
