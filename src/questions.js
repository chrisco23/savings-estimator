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
			tip:'The size of your household includes yourself, your spouse if you have ' +
				'one, and any individuals that qualify as dependents.<br><br><br>  This ' + 
				'number will be used to determine where your household falls on the ' + 
				'Federal Poverty Level.',
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
			tip: 'This number will be used to determine how many people in the ' +
				'household will pay a Monthly Premium.',
			tipSize: '1.3em',
      showIcon:false,
      id: 'noa'
		},
		{
			questionText:"Your Adjusted Gross Income (AGI)",
			questionSubtext:"Enter your AGI or MAGI, not Gross Income",
			inputType:'text',
			unit:'$',
			tip: "<p>Adjusted gross income (AGI) is an individual or joint couple's " +
				'total gross income minus specific deductions. income. To find your ' + 
				'AGI, refer to last year\'s tax return or use the ' +
				'<a href="http://money.cnn.com/tmp/networth2.html">AGI Calculator</a>.' +
				'</p><table class="agi-table"><tr><th><strong>If you filed...</strong>' +
				'</th><th><strong>Look for line...</strong></th></tr><tr><td>Form 1040 (2018)</td>' +
				'<td>37</td></tr><tr><td>Form 1040A (2018)</td><td>21</td></tr><tr><td>' +
				'Form 1040EZ (2018)</td><td>4</td></tr></table>' + 
				'This amount is used in conjunction with household size to determine the ' +
				'Monthly Premium.<p>Note: your employer may choose to pay this amount on ' +
				'your behalf as an employment benefit.</p>',
			tipSize:'0.8em',
      showIcon:true,
      id: 'agi'
		},
		{
			questionText: "Wages from an Employer",
			questionSubtext: "Enter the total Gross Pay Per Year for all wage earners in the household",
			inputType:'text',
			unit:'$',
			tip: 'If you are 65 years or ' +
				"older, enter '0'.<br><br>This amount is used to calculate your Employee Payroll Deduction." +
				'This tax is assessed quarterly and collected by your employer' +
				'<p>Note: your employer may choose to pay this amount on your behalf as an employment benefit.</p>',
			showIcon:true,
      id: 'gppy'
		},
		{
			questionText:"Profits from Self-Employment",
			questionSubtext:"Enter the total Net Profits for all sole proprietors in the household",
			inputType:'text',
			unit:'$',
			tip:'Use the mount in Line 31 from your Schedule C (2017 and 2018).<br><br>This amount is ' +
				'used to calculate the Self-Employment Contribution.' + 
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
			tip:'Use the amount in Line 15 from your Schedule D (2017 and 2018).' +
					'<ul><li>This tax contribution will not apply to Home Sales, Farm Income or Retirement Accounts</li></ul>' +
					'This amount will be used to calculate your Investment Profit Contribution.' +
					"<br><em>Next we'll review the insurance costs you get to " +
					'<b>eliminate</b> from your current expenses...</em>',
			showIcon:true,
      id: 'ltcg'
		},
		{
			questionText:"Your Current Monthly Healthcare Premiums",
			inputType:'text',
			unit:'$',
			tip:'<p>Include Monthly Premiums for Medical, Dental (if applicable) and Vision (if applicable).' +
					'</p> <p>Remember to include costs for each member of household.</p>',
      showIcon:true,
      id: 'hcprems'
		},
		{
			questionText:"Your Current Yearly Out-of-Pocket Costs",
			inputType:'text',
			unit:'$',
			tip:'<p>Include costs incurred over the course of the year for every member of your ' +
					'household, such as:</p><ul><li>Co-Pays</li><li>Prescriptions<sup>*</sup></li>' +
					'<li>Medical bills not covered by insurance, including:</li>' + 
					'<li>Dental, Vision, and Hearing expenses</li></ul><li>Emergency Room or Clinic Visits</li>' +
					'<li>Deductibles</li></ul>' + 
					'Note: the most you\'ll pay for prescriptions with the Whole Washington Health Plan is $250' +
					'per adult per year if a generic prescription is not available.',
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