import User from "./User/User";
import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "./Counter/Counter";
import CounterHook from "./Counter/CounterHook";


export default function Main() {
	const [randomUsers, setRandomUsers] = useState([]);
	const addRandomUser = () => {
		fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) =>
				setRandomUsers((prevState) => [...prevState, data.results[0]])
			)
			.catch((err) => console.log(err));
	};
	const createRandomUserList = async(number) => {
        try {
            const res = await fetch(`https://randomuser.me/api/?results=${number}`)
            const data = await res.json()
            setRandomUsers(data.results)
        } catch (error) {
            console.log(error)
        }
        
		// fetch(`https://randomuser.me/api/?results=${number}`)
		// 	.then((res) => res.json())
		// 	.then((data) => setRandomUsers(data.results))
		// 	.catch((err) => console.log(err));
	};
	const deleteUser = (id) => {
		setRandomUsers(users => users.filter(user => user.login.uuid !== id));
	};
	useEffect(() => {
		createRandomUserList(8);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen my-10 rounded-lg ">
			<div className="flex flex-wrap justify-center px-7 gap-4 bg-slate-200 w-[70%] shadow-2xl rounded-xl">
				{randomUsers.length === 0 ? (
					<BeatLoader className="h-40 mt-36" color={"#36d7b7"} />
				) : (
					<AnimatePresence>
						{randomUsers.map((user, i) => (
							<motion.div
								key={user.login.uuid}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 40 }}
								transition={{ duration: 0.4, delay: i * 0.07 }}
							>
								<User
									name={user.name?.first}
									age={user.dob?.age}
									image={user.picture?.large}
									id={user.login.uuid}
									deleteUser={deleteUser}
									users={randomUsers}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				)}
			</div>
			<button
				onClick={addRandomUser}
				className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-10"
			>
				add new User
			</button>
			<Counter counterName="Counter" />
			<CounterHook counterTitle="Hook Counter" />
		</div>
	);
}
