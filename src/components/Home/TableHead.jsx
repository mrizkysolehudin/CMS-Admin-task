import React from "react";

const TableHead = () => {
	return (
		<thead className="">
			<tr>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					No.
				</th>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					Nama
				</th>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					Alamat
				</th>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					Jenis kelamin
				</th>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					Tanggal lahir
				</th>
				<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
					Tanggal input
				</th>
				<th className="text-center align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  bg-indigo-800 text-indigo-300 border-indigo-700">
					Actions
				</th>
			</tr>
		</thead>
	);
};

export default TableHead;
