// Main.jsx
import React, { useState, useEffect } from "react";
import User from "./User/User";
import { BeatLoader } from "react-spinners";
import Pagination from "../Pagination/Pagination";
import Counter from "../Footer/Counter/Counter";
import CounterHook from "../Footer/Counter/CounterHook";

export default function Main() {
	const [randomUsers, setRandomUsers] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=50")
			.then((res) => res.json())
			.then((data) => setRandomUsers(data.results))
			.catch((err) => console.log(err));
	}, []);

	const deleteUser = (id) => {
		setRandomUsers((users) =>
			users.filter((user) => user.login.uuid !== id)
		);
	};

	const addRandomUser = () => {
		fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) =>
				setRandomUsers((prevState) => [...prevState, data.results[0]])
			)
			.catch((err) => console.log(err));
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen my-10 rounded-lg ">
			<div className="flex flex-wrap justify-center px-7 gap-4 bg-slate-200 w-[70%] shadow-2xl rounded-xl min-h-[320px]">
				{randomUsers.length === 0 ? (
					<BeatLoader className="h-40 mt-36" color={"#36d7b7"} />
				) : null}
				<Pagination
					items={randomUsers}
					usersPerPageOptions={[4, 8, 12, 16]}
					renderItem={(user) => (
						<User
							key={user.login.uuid}
							name={user.name?.first}
							age={user.dob?.age}
							image={user.picture?.large}
							id={user.login.uuid}
							deleteUser={deleteUser}
							users={randomUsers}
						/>
					)}
				/>
			</div>
			<button
				onClick={addRandomUser}
				className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-10"
			>
				add new User
			</button>
			<div className="w-1/2 flex justify-between gap-4">
				<Counter counterName="Counter" />
				<CounterHook counterTitle="Hook Counter" />
			</div>
		</div>
	);
}
