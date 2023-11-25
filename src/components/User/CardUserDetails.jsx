import React from "react";
import { formatDate } from "../../utils/formatDate";

const CardUserDetails = ({ user }) => {
	return (
		<article className="w-64 mx-auto text-gray-300 bg-indigo-900 rounded-2xl h-min px-8 py-6 shadow-lg">
			<div className=" ">
				<h2 className="text-white font-bold text-2xl tracking-wide">
					{user?.name}
				</h2>
			</div>
			<p className=" font-semibold mt-2.5">{user?.address}</p>
			<p className="text-emerald-400 font-semibold mt-2.5">
				{user?.gender === "l" ? "Pria" : "Wanita"}
			</p>
			<p className=" font-semibold mt-2.5">
				{" "}
				{formatDate(user?.born_date, { month: "long" })}
			</p>
			<div className="h-1 w-full bg-black mt-8 rounded-full">
				<div className="h-1 rounded-full  bg-yellow-500 " />
			</div>
			<div className="mt-3 text-white text-xs">
				<span className="text-gray-400 ">
					Tanggal dibuat:
					<span className="ml-1">
						{formatDate(user?.created_at, { includeTime: true })}
					</span>
				</span>
			</div>
		</article>
	);
};

export default CardUserDetails;
