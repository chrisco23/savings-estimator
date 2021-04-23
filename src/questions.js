const questions = {
	individual:[
		{
			questionText:"Size of Your Household",
			inputType:'number',
			min:{
				val: 1,
				error: 'Please enter a household size greater than zero.'
			},
			max:{
				val: 20,
				error:'Please enter a household size between 1-20.'
			},
			tip:'<p>The size of your household includes yourself, your spouse if you have ' +
				'one, and any individuals that qualify as dependents.<p>' + 
				'<p>This number will be used to determine where your household falls on the ' + 
				'Federal Poverty Level.</p>',
      showIcon:true,
      id: 'soh'
		},
		{
			questionText:"Number of Adults over 19",
			inputType:'number',
			max:{
				val: 'Size of Your Household',
				error:'Number of Adults over 19 cannot exceed total household size!'
			},
			defaultValue:1,
			tip: '<p>This number will be used to determine how many people in the household will pay a ' +
				'<a href="https://wholewashington.org/monthly-premium/" rel="noopener noreferrer" target="_blank">Monthly Premium</a>.</p>',
			tipSize: '1.3em',
      showIcon:true,
      id: 'noa'
		},
		{
			questionText:"Your Adjusted Gross Income (AGI)",
			questionSubtext:"Enter your AGI or MAGI, not Gross Income",
			inputType:'text',
			unit:'$',
			tip: "<p>Adjusted Gross Income (AGI) is an individual or joint couple's " +
				'total gross income minus specific deductions.</p>' + 
				'<span style="text-align: center">' +
				'<p>Use the ' +
				'<a href="http://money.cnn.com/tmp/networth2.html" rel="noopener noreferrer" target="_blank">AGI Calculator</a> ' +
				'to see what\'s included / deduced OR</p>' +
				'<p>Find ' +
				'<a href="https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income" rel="noopener noreferrer" target="_blank">Adjusted Gross Income</a> ' +
				'on last year\'s tax return.' +
				'<table class="agi-table"><tr><th><strong>If you filed...</strong>' +
				'</th><th><strong>Look for line...</strong></th></tr><tr><td>Form 1040 (2020)</td>' +
				'<td>11</td></tr><tr><td>Form 1040A (2020)</td><td>8b</td></tr>' +
				'</table>' + 
				'<p>This amount is used in conjunction with household size to determine the ' +
				'<a href="https://wholewashington.org/monthly-premium/" rel="noopener noreferrer" target="_blank">Monthly Premium</a>.</p>' +
				'<p>Note: your employer may choose to pay this amount on your behalf as an employment benefit.</p>',
			tipSize:'0.8em',
      showIcon:true,
      id: 'agi'
		},
		{
			questionText: "Your Wages from an Employer",
			questionSubtext: "Enter the total Gross Pay per Year for all wage earners in the household",
			inputType:'text',
			unit:'$',
			tip: '<p>This amount is used to calculate your ' +
				'<a href="https://wholewashington.org/employee-payroll-deduction/" rel="noopener noreferrer" target="_blank">Employee Payroll Deduction</a>, ' +
				'which is assessed quarterly and collected by your employer.</p>' +
				'<p>If you had wages and are 65 years or older, enter \'0\'; the Employee Payroll Deduction will not apply to you.</p>' +
				'<p>Note: your employer may choose to pay this amount on your behalf as an employment benefit.</p>',
      showIcon:true,
      id: 'gppy'
		},
		{
			questionText:"Your Profits from Self-Employment",
			questionSubtext:"Enter the total Net Profits for all sole proprietors in the household",
			inputType:'text',
			unit:'$',
			tip:'<p>Use the amount in Line 31 from your Schedule C.</p><p>This amount is used to calculate the ' +
				'<a href="https://wholewashington.org/self-employment-contribution/" rel="noopener noreferrer" target="_blank">Self-Employment Contribution</a>.</p>' + 
				'<ul><li>If Net Profits from Self-Employment are less than $15,000, the tax does not apply</li>' +
				'<li>This tax is assessed yearly and paid with other business excise taxes.</li></ul>',
      showIcon:true,
      id: 'spi'
		},
		{
			questionText:"Your Net Long-Term Capital Gains",
			questionSubtext:"Enter your profits made from investments held longer than 12 months",
			inputType:'text',
			unit:'$',
			tip:'<p>Use the amount in Line 15 from your Schedule D.  If you had a loss, enter \'0\'.</p>' +
				'<ul><li>This tax contribution will not apply to Home Sales, Farm Income or Retirement Accounts</li></ul>' +
				'<p>This amount will be used to calculate your ' + 
				'<a href="https://wholewashington.org/investment-profit-contribution/" rel="noopener noreferrer" target="_blank">Investment Profit Contribution</a>.</p>' +
				"<p><em>Next we'll review the insurance costs you get to " +
				'<b>eliminate</b> from your current expenses...</em></p>',
      showIcon:true,
      id: 'ltcg'
		},
		{
			questionText:"Your Current Monthly Healthcare Premiums",
			inputType:'text',
			unit:'$',
			tip:'<p>Include Monthly Premiums for Medical, Dental (if applicable) and Vision (if applicable).</p>' +
				'<p>Remember to include costs for each member of household.</p>',
      showIcon:true,
      id: 'hcprems'
		},
		{
			questionText:"Your Current Yearly Out-of-Pocket Costs",
			inputType:'text',
			unit:'$',
			tip:'<p>Include costs incurred over the course of the year for every member of your household, such as:</p>' +
				'<ul><li>Co-Pays</li><li>Prescriptions<sup>*</sup></li>' +
				'<li>Medical bills not covered by insurance, including:</li>' + 
				'<li>Dental, Vision, and Hearing expenses</li><li>Emergency Room or Clinic Visits</li>' +
				'<li>Deductibles</li></ul>' + 
				'<p><sup>*</sup>The most you\'ll pay for prescriptions with the Whole Washington Health Plan is $250 ' +
				'per adult per year if a generic prescription is not available.</p>',
      showIcon:true,
      id:'yoopc'
		}
	],
	business:[
		{questionText:'Annual Total Payroll Costs', inputType:'text',unit:'$', tip: '&nbsp'},
		{questionText:'Current Annual Healthcare Costs', inputType:'text',unit:'$', tip: '&nbsp'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			tip: '&nbsp',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range',
			tip: 'Use the slider to indicate the Percentage of Employees Covered. ' + 
				'Include part-time employees when selecting your percentage. '
		}
	]
};

export default questions;