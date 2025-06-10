import React, { useState, useEffect } from "react";
import User from "./User/User";
import { BeatLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "../Footer/Counter/Counter";
import CounterHook from "../Footer/Counter/CounterHook";
import Pagination from "../Pagination/Pagination";

export default function Main() {
	const [randomUsers, setRandomUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage, setUsersPerPage] = useState(4);

	const addRandomUser = () => {
		fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) =>
				setRandomUsers((prevState) => [...prevState, data.results[0]])
			)
			.catch((err) => console.log(err));
	};

	const createRandomUserList = async (number) => {
		try {
			const res = await fetch(
				`https://randomuser.me/api/?results=${number}`
			);
			const data = await res.json();
			setRandomUsers(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUser = (id) => {
		setRandomUsers((users) =>
			users.filter((user) => user.login.uuid !== id)
		);
	};

	useEffect(() => {
		createRandomUserList(50);
	}, []);

	const totalPages = Math.ceil(randomUsers.length / usersPerPage);
	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = randomUsers.slice(indexOfFirstUser, indexOfLastUser);

	const handlePageChange = (pageNumber) => {
		if (pageNumber < 1 || pageNumber > totalPages) return;
		setCurrentPage(pageNumber);
	};

	const handleUsersPerPageChange = (e) => {
		setUsersPerPage(Number(e.target.value));
		setCurrentPage(1);
	};

	const pageMotion = {
		initial: { opacity: 0, scale: 0.92 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.92 },
		transition: { duration: 0.22 }
	};

	const cardMotion = {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.70 },
		transition: { duration: 0.28 }
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen my-10 rounded-lg ">
			<div className="flex flex-wrap justify-center px-7 gap-4 bg-slate-200 w-[70%] shadow-2xl rounded-xl min-h-[320px]">
				{randomUsers.length === 0 ? (
					<BeatLoader className="h-40 mt-36" color={"#36d7b7"} />
				) : (
					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage + "-" + usersPerPage}
							{...pageMotion}
							className="flex flex-wrap justify-center gap-4 w-full"
						>
							{currentUsers.map((user) => (
								<motion.div
									key={user.login.uuid}
									{...cardMotion}
									layout
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
						</motion.div>
					</AnimatePresence>
				)}
			</div>
			<div className="flex items-center gap-2 mt-4">
				<label htmlFor="usersPerPage" className="text-sm">تعداد در هر صفحه: </label>
				<select
					id="usersPerPage"
					value={usersPerPage}
					onChange={handleUsersPerPageChange}
					className="border rounded px-2 py-1"
				>
					{[4, 8, 12].map((num) => (
						<option key={num} value={num}>{num}</option>
					))}
				</select>
			</div>
            {/* فقط این یک بار Pagination */}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
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
