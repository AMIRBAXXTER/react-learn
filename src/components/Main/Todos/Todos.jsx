import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";
import { BeatLoader } from "react-spinners";

export default function Todos() {
	const [todos, setTodos] = useState([]);
	const [pending, setPending] = useState(true);

	const getTodos = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data = await res.json();
		setTodos(data);
		setPending(false);
	};

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center my-10 rounded-lg">
			<div className="flex flex-wrap justify-center px-7 gap-4 bg-slate-200 w-[70%] shadow-2xl rounded-xl min-h-[320px]">
				{pending && <BeatLoader className="h-40 mt-36" color={"#36d7b7"} />}
				<Pagination
					items={todos}
					usersPerPageOptions={[3, 6, 9, 12]}
					renderItem={(todo) => (
						<div
							key={todo.id}
							className={`
							flex flex-col items-center justify-center
							w-full sm:w-[48%] md:w-[30%] min-h-[112px] p-4 m-2
							bg-slate-50 hover:bg-blue-50 transition rounded-lg shadow
							border border-slate-100
							hover:scale-[1.03] hover:shadow-lg
							`}
						>
							<div className="flex items-center gap-2 mb-2">
								<span
									className="block h-2 w-2 rounded-full"
									style={{
										background: todo.completed
											? "#22c55e"
											: "#f43f5e",
										boxShadow: todo.completed
											? "0 0 5px #22c55e66"
											: "0 0 5px #f43f5e66",
									}}
								/>
								<span className="text-sm font-medium tracking-wide text-slate-600">
									{todo.completed ? "Completed" : "Pending"}
								</span>
							</div>
							<h2
								className={`text-base md:text-lg text-center font-semibold text-slate-700 mb-1 line-clamp-2`}
							>
								{todo.title}
							</h2>
							<p className="text-xs font-mono text-slate-400 mt-2">
								Task #{todo.id}
							</p>
						</div>
					)}
				/>
			</div>
		</div>
	);
}
