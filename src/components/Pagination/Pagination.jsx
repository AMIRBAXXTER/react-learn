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

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	const [inputPage, setInputPage] = useState("");

	if (totalPages <= 1) return null;
	const pages = createPagination(currentPage, totalPages);

	const handleInputChange = (e) => {
		const value = e.target.value.replace(/[^0-9]/g, "");
		setInputPage(value);
	};

	const handleInputSubmit = (e) => {
		e.preventDefault();
		const page = Number(inputPage);
		if (page && page >= 1 && page <= totalPages) {
			onPageChange(page);
			setInputPage("");
		}
	};

	return (
		<div className="flex gap-2 justify-center my-5 items-center select-none">
			<button
				className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				قبلی
			</button>
			{pages.map((page, idx) =>
				page === "..." ? (
					<span key={`ellipsis-${idx}`} className="px-2">...</span>
				) : (
					<button
						key={page}
						className={`px-3 py-1 rounded ${
							currentPage === page
								? "bg-blue-700 text-white"
								: "bg-gray-200 hover:bg-gray-300"
						}`}
						onClick={() => onPageChange(page)}
						disabled={currentPage === page}
					>
						{page}
					</button>
				)
			)}
			<button
				className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				بعدی
			</button>
			<form onSubmit={handleInputSubmit} className="flex items-center gap-1 ml-2">
				<input
					className="px-2 py-1 rounded border w-16 text-center bg-white"
					type="text"
					value={inputPage}
					onChange={handleInputChange}
					placeholder="پرش"
					dir="ltr"
				/>
				<button
					type="submit"
					className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
					disabled={
						!inputPage ||
						Number(inputPage) < 1 ||
						Number(inputPage) > totalPages
					}
				>
					برو
				</button>
			</form>
		</div>
	);
}
