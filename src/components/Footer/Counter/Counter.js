import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			inputValue: "",
			isOnce: false,
		};
	}

	handleInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	increment = (event, isOnce = true) => {
		if (isOnce) {
			this.setState((prevState) => ({
				count: prevState.count + 1,
			}));
		} else {
			let { inputValue } = this.state;
			if (+inputValue) {
				this.setState((prevState) => ({
					count: prevState.count + +inputValue,
					inputValue: "",
				}));
			} else {
				alert("لطفا یک عدد وارد کنید");
			}
		}
	};

	changeIncrement = () => {
		this.setState({ isOnce: !this.state.isOnce });
	};

	render() {
		return (
			<div className="bg-slate-100 w-36 h-36 m-auto shadow-2xl">
				<h1>{this.props.counterName}</h1>
				<h2>{this.state.count > 20 ? "more than 20" : "less than 20"}</h2>
				<h2>Count: {this.state.count}</h2>
				<label htmlFor="checkbox">add once</label>
				<input
					type="checkbox"
					id="checkbox"
					value={this.state.isOnce}
					onChange={this.changeIncrement}
				/>
				<hr />
				<AnimatePresence mode="wait">
					<motion.div
						key={this.state.isOnce ? "once" : "input"}
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.2 }}
						className="flex flex-col gap-2"
					>
						{this.state.isOnce ? (
							<button
								className="bg-green-700 w-full px-2 py-1 hover:bg-green-900 hover:text-gray-50 active:bg-white transition-all duration-200 rounded"
								onClick={this.increment}
							>
								Increment once
							</button>
						) : (
							<>
								<button
									className="bg-green-700 w-full px-2 py-1 hover:bg-green-900 hover:text-gray-50  active:bg-white transition-all duration-200 rounded"
									onClick={(event) => this.increment(event, false)}
								>
									Increment
								</button>
								<input
									className="border border-gray-300 rounded px-3 py-2 
    										focus:border-blue-500 
    										focus:ring focus:ring-blue-200 focus:ring-opacity-50
											focus:shadow-2xl
    										outline-none
    										transition"
									type="text"
									value={this.state.inputValue}
									onChange={this.handleInputChange}
									placeholder="عدد وارد کن"
								/>
							</>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		);
	}
}
