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
				'one, and any individuals that qualify as dependents.<br><br><br>  This will be used to ' +
				'determine where your household falls on the Federal Poverty Level, which will ' +
				'then be used to determine your Monthly Premium.',
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
			tip: 'This will be used to determine where your household falls on the ' +
				'Federal Poverty Level, which will then be used to determine your ' +
				'Monthly Premium',
			tipSize: '1.3em',
      showIcon:false,
      id: 'noa'
		},
		{
			questionText:"Your Adjusted Gross Income (AGI)",
			inputType:'text',
			unit:'$',
			tip: "<p>Adjusted gross income (AGI) is an individual or joint couple's " +
				'total gross income minus specific deductions. Use your AGI, NOT gross ' +
				" income. To find your AGI, refer to last year's tax return or use the " +
				'<a href="http://money.cnn.com/tmp/networth2.html">AGI Calculator</a>.' +
				'</p><table class="agi-table"><tr><th><strong>If you filed...</strong>' +
				'</th><th><strong>Look for line...</strong></th></tr><tr><td>Form 1040</td>' +
				'<td>37</td></tr><tr><td>Form 1040A (2017)</td><td>21</td></tr><tr><td>' +
				'Form 1040EZ (2017)</td><td>4</td></tr></table>' + 
				'<p>Your Monthly Premium amount depends on where you fall on the Federal ' +
				'Poverty Level using Modified Adjusted Gross Income (MAGI).  For most, ' +
				'or similar to MAGI.  If you know your MAGI, enter it above, but for the ' +
				'purpose of this estimator, AGI is sufficient.</p>',
			tipSize:'0.8em',
//			link:['http://money.cnn.com/tmp/networth2.html','Take me to the AGI Calculator first...'],
      showIcon:true,
      id: 'agi'
		},
		{
			questionText: "Gross Pay Per Year - Wages from an Employer",
			inputType:'text',
			unit:'$',
			tip: 'These are your wages from an employer.  If you are 65 years or ' +
				"older, enter '0'.<br><br>This amount is used to calculate your Personal Health Security " +
				'Assessment from Payroll(link forthcoming).  Use your pay stubs to ' +
				'determine your gross pay for the year.  This tax is assessed quarterly ' +
				'and collected by your employer, and may be paid by your employer ' +
				'as a benefit of employment.',
			showIcon:true,
      id: 'ltcg'
		},
		{
			questionText:"Sole Proprietor Income - Earnings from Self-Employment",
			inputType:'text',
			unit:'$',
			tip:'Use Line 31 from your Schedule C (2017 and 2018).<br><br>This amount is ' +
				'used to calculate your Personal Health Security Assessment from ' +
				'Self-Employment(link forthcoming).<br><br>If Net Profits from ' + 
				'Self-Employment are less than $15,000, the individual is not subject ' +
				'to this assessment.<br><br>This tax is assessed yearly and paid with other ' +
				'business excise taxes.',
      showIcon:true,
      id: 'ltcg'
		},
		{
			questionText:"Your Net Long-Term Capital Gains",
			inputType:'text',
			unit:'$',
			tip:'Net Long-Term Capital Gains are the profits made from investments ' +
					'held for longer than 12 months, for example, profits earned from the ' +
					'sale of stocks. This tax contribution will not apply to Home Sales, ' + 
					'Farm Income or Retirement Accounts.<br><br>If you file Schedule D, ' +
					'look for line item 15.  This amount will be used to calculate your ' +
					'Investment Profit Contribution.' + 
					"<br><em>Next we'll review the insurance industry costs you get to " +
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
					'Note: the most you\'ll pay for prescriptions with I-1600 Universal Healthcare is $250' +
					'per adult per year.',
					showIcon:true,
      id:'yoopc'
		},
		{
			questionText: "Universal Healthcare Benefits",
			inputType: '',
			unit: '',
			tip: 'Whether you save or pay a little more, there are undeniable ' + 
				'benefits that apply to all. Most prescriptions are fully covered! ' +
				'And if you need a non-generic prescription, the most you’ll pay is ' +
				'$250 per year!  You can see the doctor you want. There are no ' +
				'networks to worry about. You won’t need separate plans for vision ' +
				'or dental or mental health services. They’re all included! Audiology ' +
				'too! Companies are still able to attract the best job candidates by ' +
				'paying for their employee’s premium and/or personal health assessment ' +
				'as part of benefits package. It’s up to them! There are no ' +
				'deductibles or surprise out-of-pocket costs. No one will go bankrupt ' +
				'because they got sick. Healthcare isn’t tied to a job or spouse or ' +
				'salary. This is real freedom!'
		}
	],
	business:[
		{questionText:'Annual Total Payroll Costs', inputType:'text',unit:'$'},
		{questionText:'Current Annual Healthcare Costs', inputType:'text',unit:'$'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range',
			tip: 'Use the slider to indicate the Percentage of Employees Covered. ' + 
				'Include part-time employees when selecting your percentage. '
		}
	]
};

export default questions;
