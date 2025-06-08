import { Navigate, useLocation, useParams } from "react-router-dom";

export default function UserDetail(props) {
	const location = useLocation();
    console.log(location);
	const users = location.state ?? [];
	const params = useParams();
	const mainUser = users.find((user) => user.login.uuid === params.id);

	return (
		<div className="mb-40">
			{mainUser ? (
				<>
					<li className="list-none m-auto w-full text-center">
						{mainUser.name?.first}
					</li>
					<li className="list-none m-auto w-full text-center">
						{mainUser.dob?.age}
					</li>
					<img
						alt={mainUser.name?.first}
						src={mainUser.picture?.large}
						className="m-auto w-1/4 h-1/4 rounded-md"
					/>
					<p className=" text-center mt-10">{mainUser.email}</p>
				</>
			) : (
				<Navigate to="/" replace />
			)}
		</div>
	);
}
