import React, { useState } from "react";

function createPagination(current, total) {
	const pages = [];
	pages.push(1);
	let startPage = Math.max(current - 1, 2);
	let endPage = Math.min(current + 1, total - 1);
	if (startPage > 2) pages.push("...");
	for (let i = startPage; i <= endPage; i++) pages.push(i);
	if (endPage < total - 1) pages.push("...");
	if (total > 1) pages.push(total);
	return pages;
}

/**
 * props:
 *   items      : Array (کل دیتا)
 *   usersPerPageOptions: optional Array<number> (مثلاً: [4, 8, 12])
 *   renderItem : function (fn(user): ReactNode)
 *   className  : optional string
 */
export default function Pagination({
	items = [],
	usersPerPageOptions = [4, 8, 12],
	renderItem,
	className = "",
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage, setUsersPerPage] = useState(usersPerPageOptions[0]);
	const [inputPage, setInputPage] = useState("");
	const [error, setError] = useState("");

	const totalPages = Math.ceil(items.length / usersPerPage);
	const indexOfLast = currentPage * usersPerPage;
	const indexOfFirst = indexOfLast - usersPerPage;
	const currentUsers = items.slice(indexOfFirst, indexOfLast);

	const pages = createPagination(currentPage, totalPages);

	const handlePageChange = (page) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		setError("");
	};

	const handleInputChange = (e) => {
		setInputPage(e.target.value.replace(/[^0-9]/g, ""));
		setError("");
	};

	const handleInputSubmit = (e) => {
		e.preventDefault();
		const page = Number(inputPage);
		if (page && page >= 1 && page <= totalPages) {
			setCurrentPage(page);
			setInputPage("");
			setError("");
		} else {
			setInputPage("");
			setError(
				`Please enter a valid page number between 1 and ${totalPages}`
			);
		}
	};

	const handleUsersPerPageChange = (e) => {
		setUsersPerPage(Number(e.target.value));
		setCurrentPage(1);
        setError("");
	};

	return (
		<div className={"flex flex-col items-center w-full " + className}>
			<div className="flex flex-wrap justify-center gap-4 w-full">
				{currentUsers.map(renderItem)}
			</div>
			<div className="flex gap-2 justify-center my-5 items-center select-none">
				<button
                        className={`px-2 py-1 rounded bg-blue-200 hover:bg-gray-300 ${currentPage === 1 && "hidden"}`}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					Previous
				</button>
				{pages.map((page, idx) =>
					page === "..." ? (
						<span key={`ellipsis-${idx}`} className="px-2">
							...
						</span>
					) : (
						<button
							key={page}
							className={`px-3 py-1 rounded ${
								currentPage === page
									? "bg-blue-500 text-white"
									: "bg-blue-200 hover:bg-blue-300"
							}`}
							onClick={() => handlePageChange(page)}
							disabled={currentPage === page}
						>
							{page}
						</button>
					)
				)}
				<button
					className={`px-2 py-1 rounded bg-blue-200 hover:bg-gray-300 ${currentPage === totalPages && "hidden"}`}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
				</button>
				<form
					onSubmit={handleInputSubmit}
					className="flex items-center gap-1 ml-2"
				>
					<input
						className="px-2 py-1 rounded border w-16 text-center bg-slate-300 focus:outline-none"
						type="text"
						value={inputPage}
						onChange={handleInputChange}
						dir="ltr"
					/>
					<button
						type="submit"
						className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
					>
						Go
					</button>
				</form>
				<select
					value={usersPerPage}
					onChange={handleUsersPerPageChange}
					className="border rounded px-2 py-1 ml-2"
				>
					{usersPerPageOptions.map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
			</div>
			{error && (
				<p className="text-red-500 text-xs mt-1 w-full text-center">
					{error}
				</p>
			)}
		</div>
	);
}
