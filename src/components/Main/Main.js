import User from "./User/User";
export default function Main() {
	const users = [
		{id: 1, age: 27, image: "user_images/1.webp"},
		{id: 2, age: 27, image: "user_images/1.webp"},
		{id: 3, age: 27, image: "user_images/1.webp"},
		{id: 5, age: 27, image: "user_images/1.webp"},
		{id: 7, name: "reza", age: 22, image: "user_images/2.webp"},
		{id: 8, name: "reza", age: 22, image: "user_images/2.webp"},
		{id: 9, name: "reza", age: 22, image: "user_images/2.webp"},
		{id: 10, name: "ahmad", age: 18, image: "user_images/3.jfif"},
		{id: 11, name: "amir", age: 30},
		{id: 12, name: "zahra", age: 25},
	]
	return (
		<div className="flex flex-wrap justify-around px-7 gap-4 bg-[#969696] w-[70%] shadow-2xl">
			{users.map((user) => (
				<User {...user} key={user.id} />
			))}
		</div>
	);
}
