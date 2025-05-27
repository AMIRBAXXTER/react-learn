import User from "./User/User";
export default function Main() {
	const users = [
		{name: "amir", age: 27, image: "user_images/1.webp"},
		{name: "reza", age: 22, image: "user_images/2.webp"},
		{name: "ahmad", age: 18, image: "user_images/3.jfif"},
		{name: "mehdi", age: 30},
	]
	return (
		<div>
			{users.map((user) => (
				<User {...user} />
			))}
		</div>
	);
}
