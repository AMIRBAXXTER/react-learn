import User from "./User/User";
import React, { PureComponent } from "react";
import { BeatLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

export default class Main extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			randomUsers: [],
		};
	}
	addRandomUser = async () => {
		await fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) =>
				this.setState((pervState) => ({
					randomUsers: [...pervState.randomUsers, data.results[0]],
				}))
			)
			.catch((err) => console.log(err));
	};
	createRandomUserList = async (number) => {
		await fetch(`https://randomuser.me/api/?results=${number}`)
			.then((res) => res.json())
			.then((data) => this.setState({ randomUsers: data.results }))
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.createRandomUserList(8);
	}

	render() {
		return (
			<>
				<div className="flex flex-wrap justify-center px-7 gap-4 bg-slate-200 w-[70%] shadow-2xl rounded-xl">
					{this.state.randomUsers.length === 0 ? (
						<BeatLoader className="h-40 mt-36" color={"#36d7b7"} />
					) : (
						<AnimatePresence>
							{this.state.randomUsers.map((user, i) => (
								<motion.div
									key={`random-${i}`}
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 40 }}
									transition={{ duration: 0.4, delay: i * 0.07 }}
								>
									<User
										name={user.name?.first}
										age={user.dob?.age}
										image={user.picture?.large}
									/>
								</motion.div>
							))}
						</AnimatePresence>
					)}
				</div>
				<button
					onClick={this.addRandomUser}
					className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-10"
				>
					add new User
				</button>
			</>
		);
	}
}
