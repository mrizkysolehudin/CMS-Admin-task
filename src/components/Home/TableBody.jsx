import React from "react";
import Alert from "../Global/Alert";
import { formatDate } from "../../utils/formatDate";
import ButtonIcon from "./ButtonIcon";

const TableBody = ({ loading, users, handleDelete }) => {
	return (
		<tbody className={`relative }`}>
			{loading ? (
				<Alert isTable text="Loading..." />
			) : users?.length > 0 ? (
				users?.map((user, index) => {
					return (
						<tr key={index} className="hover:bg-indigo-400/90 bg-indigo-400">
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
								{index + 1}
							</td>
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
								{user?.name}
							</td>
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
								{user?.address}
							</td>
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
								{user?.gender === "l" ? "Pria" : "Wanita"}
							</td>
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
								{formatDate(user?.born_date, { withDot: true })}
							</td>
							<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
								{formatDate(user?.created_at, { includeTime: true })}
							</td>
							<td className="relative flex justify-center  border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-7 text-right">
								<div className=" py-1 px-3 gap-x-3 flex text-sm">
									<ButtonIcon
										type={"link"}
										to={`/user/${user?.id}`}
										className={"bg-green-700 hover:bg-green-800"}
										icon={<i className="fas fa-eye text-gray-100" />}
									/>
									<ButtonIcon
										type={"link"}
										to={`/user/${user?.id}/edit`}
										className={"bg-yellow-700 hover:bg-yellow-800"}
										icon={<i className="fas fa-pen text-gray-100 text-xs" />}
									/>
									<ButtonIcon
										onClick={() => handleDelete(user.id)}
										className={"bg-red-500 hover:bg-red-600 "}
										icon={<i className="fas fa-trash text-gray-100 text-xs" />}
									/>
								</div>
							</td>
						</tr>
					);
				})
			) : (
				<Alert isTable />
			)}
		</tbody>
	);
};

export default TableBody;
