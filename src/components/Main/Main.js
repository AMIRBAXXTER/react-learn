import User from "./User/User";
export default function Main() {
	const users = [
		{id: 1, name: "", age: 27, image: "user_images/1.webp"},
		{id: 2, name: "reza", age: 22, image: "user_images/2.webp"},
		{id: 3, name: "ahmad", age: 18, image: "user_images/3.jfif"},
		{id: 4, name: "amir", age: 30},
		{id: 5, name: "zahra", age: 25},
	]
	return (
		<div className="flex flex-wrap justify-center space-x-5">
			{users.map((user) => (
				<User {...user} key={user.id} />
			))}
		</div>
	);
}
