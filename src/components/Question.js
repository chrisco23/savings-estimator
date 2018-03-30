import React, { Component } from 'react';
import '../css/Question.css';
import Parser from 'html-react-parser';

class Question extends Component {
	constructor(props) {
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress(event) {
		const allowed = '0123456789';
		function contains(stringValue, charValue){
			return stringValue.indexOf(charValue) > -1;
		}
		const invalidKey = event.key.length === 1 && !contains(allowed, event.key);
		invalidKey && event.preventDefault();
	}

	componentDidUpdate() {
		if(this.input) {
			this.input.focus();
		}
	}

	render() {
		if (this.props.inputType === '' || typeof this.props.inputType === 'undefined') {
			console.error('Must pass an inputType to Question component!');
		}

		if (this.props.inputType === 'select-box' && this.props.options === '') {
			console.error('Must pass options to Question with inputType "select-box"');
		}
		if (this.props.inputType === 'button' && this.props.options === '') {
			console.error('Must pass options to Question with inputType "button"');
		}
		return (
			<div className="card">
				<form onSubmit={this.props.handleSubmit}>
					<p className="card-text">{this.props.question}</p>
					<div className="input-container">
					{this.props.unit && <i className="fa fa-2x fa-usd"></i>}
					{this.props.inputType === 'number' &&
						<input onChange={this.props.handleChange}
							className="number-box"
							type="number"
							onKeyPress={this.handleKeyPress}
							value={this.props.vars[this.props.index] ? this.props.vars[this.props.index] : ''}
							// required
							autoFocus
							ref={(input) => { this.input = input; }}
						>
						</input>}

					{this.props.inputType === 'text' &&

						<input onChange={this.props.handleChange}
							className="text-box"
							type="text"
							onKeyPress={this.handleKeyPress}
							value={this.props.vars[this.props.index] ? this.props.vars[this.props.index] : ''}
							// required
							autoFocus
							ref={(input) => { this.input = input; }}
						>
						</input>}

					{this.props.inputType === 'select-box' &&
						<select
							defaultValue={this.props.vars[this.props.index]}
							onChange={this.props.handleChange}
							className="select-box"
							ref={(input) => { this.input = input; }}
						// required
						>
							{this.props.options.map((item, index) => {
								return <option key={index} value={item}>{item}</option>
							})}
						</select>
					}

					{this.props.inputType === 'button' &&
						this.props.options.map((item, index) => {
							return (
								<button
									type="button"
									onClick={this.props.handleSelectBtn}
									key={index}
									value={item}
								>
									{item}
								</button>
							);
						})
					}

					{this.props.inputType === 'range' &&
						<div className="slidecontainer">
							<input onChange={this.props.handleRange} type="range" min="0" max="100"
								ref={(input) => { this.input = input; }}
								value={this.props.vars[this.props.index] ? this.props.vars[this.props.index] : 50} className="slider" id="myRange"></input>
							<span className="range">{this.props.range}%</span>
						</div>
					}
					</div>
					{/* End input-container */}
					{this.props.tip &&
						<div className="tip-box" style={{fontSize:this.props.tipSize}}>
							<i className="fa fa-2x fa-info-circle tip-icon"></i>
							<div className="tip">
								{Parser(this.props.tip)}
							</div>
							<a className="tip-link" href={this.props.link[0]} target="_blank">{this.props.link[1]}</a>
						</div>
					}
					{this.props.inputType !== 'button' &&
						<button type="submit">Next</button>
					}
				</form>
			</div>
		);
	}
};

export default Question;
