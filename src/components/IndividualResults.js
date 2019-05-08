import React from "react";
import { addCommas } from '../helpers/helper-functions';
import MessageBox from './MessageBox';
import ContributionsRow from './ContributionsRow';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_individual_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};

const IndividualResults = ({
  results: {
    sizeOfHousehold,
    currentCosts,
    totalPersonalContribution,
    income,
    capitalGainsContribution,
    premium,
    savings,
    numberOfAdults,
    healthcareContributionFromWages,
    healthcareContributionFromSelfEmployment
  }}) => {

  const MONTH = 12;
  return(
    <div className="wwse-results">
      <div className="wwse-results-total-box wwse-results-box-new">
        <div
          className={`wwse-results-header wwse-results-header-new ${savings > 0 ? 'new-cost' :''}`}
          key="savings-label"
        >
          {savings > 0 ? 
            <div>
              <h3>CONGRATULATIONS!</h3>
              <h3>TOTAL SAVINGS!</h3>
            </div> :
            <div>
              <h3>YOUR BENEFIT</h3>
            </div>
          }
          </div>
        {savings > 0 ?
        <div className="wwse-results-total" key="savings-value">
          <p className="wwse-results-total-top wwse-results-total-total">
            ${addCommas(Math.floor(savings / MONTH))}/month</p>
          <p className="wwse-results-total-bottom">(${savings}/year)</p>
        </div> : ''
        }
      </div>
      <MessageBox key="ind-nosavings-result"/>

      <div className="wwse-results-box">
        <div className="wwse-results-header">
          <h3>Your <strong>Current</strong> Cost</h3>
        </div>

        <div className="wwse-results-total">
          <p className="wwse-results-total-top wwse-results-total-current">
            ${addCommas(Math.floor(currentCosts))}/month
          </p>
          <p className="wwse-results-total-bottom">
            (${addCommas(currentCosts*12)}/year)
          </p>
        </div>
      </div>

      <div className="wwse-results-box wwse-results-box-new">
        <div className="wwse-results-header wwse-results-header-new">
          <h3><strong>New</strong> Projected Cost</h3>
        </div>

        <div className="wwse-results-total wwse-results-total-new">
          <p className="wwse-results-total-top wwse-results-total-projected">
            $
            { addCommas(Math.floor(totalPersonalContribution / MONTH)) }
            /month
          </p>
          <p className="wwse-results-total-bottom">
            (
            $
            { addCommas(Math.floor(totalPersonalContribution)) }
            /year)
          </p>
        </div>
      </div>

      <div className="wwse-results-total-box">
        <div className="wwse-results-header wwse-results-header-contributions">
          <h3>PERSONAL HEALTH ASSESSMENT</h3>
        </div>
        <div className="wwse-results-contributions-container">
          <ContributionsRow
            title="Healthcare Contribution from Wages"
            contribution={parseInt(healthcareContributionFromWages)}
          />
          <ContributionsRow
            title="Healthcare Contribution from Self Employment"
            contribution={parseInt(healthcareContributionFromSelfEmployment)}
          />
        </div>
      </div>

      <div className="wwse-results-total-box">
        <div className="wwse-results-header wwse-results-header-contributions">
          <h3>PROJECTED CONTRIBUTIONS</h3>
        </div>
        <div className="wwse-results-contributions-container">

          <ContributionsRow
            link="https://i1600-wholewashington.nationbuilder.com/investment_profit_contribution"
            title="Investment Profit Contribution"
            contribution={capitalGainsContribution}
            monthlyBreakdown="false"
          />

          {
          sizeOfHousehold > 1 &&
          parseInt(sizeOfHousehold, 10) -
          parseInt(numberOfAdults, 10) >
          0 &&
          (
            <div className="wwse-contributions-row">
              <p className="wwse-contributions-row-heading">Per Child Monthly Premium</p>
              <p className="wwse-contributions-row-result">
                FREE x{" "}
                {parseInt(sizeOfHousehold, 10) -
                  parseInt(numberOfAdults, 10)}
                </p>
              </div>
            )
          }

            <div className="wwse-contributions-row">
              <p className="wwse-contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium" 
                target="_blank" rel="noopener noreferrer">Per Adult Monthly Premium</a><sup>*</sup>
              </p>
              <p className="wwse-contributions-row-result">
                $
                {
                  addCommas(Math.floor(premium / MONTH))
                }
                /month {
                  sizeOfHousehold > 1 &&
                  `x${numberOfAdults}`
                }
              </p>
            </div>
            <p className="wwse-premium-disclaimer">
              <sup>*</sup> Employers may choose to pay the Monthly Premium as part of their benefits.
            </p>
          </div>
        </div>

      <CalculationDocs/>
    </div>
  )
}
export default IndividualResults;
