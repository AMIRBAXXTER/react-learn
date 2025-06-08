import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function User({
    name: Username = "unknown",
    age,
    image = "user_images/default.jpg",
    id,
    ...props
}) {

    const DeleteHandler = (id) => {
		props.deleteUser(id)
	};
    return (
        <div className="my-7">
            <RiDeleteBin6Line className="float-right hover:cursor-pointer"size={20} color={"red"} onClick={() => DeleteHandler(id)} />
            <li className="list-none m-auto w-full text-center">{Username}</li>
            <li className="list-none m-auto w-full text-center">{age}</li>
            <Link to={`/users/${id}`} state={props.users}>
                <img
                alt={Username}
                src={image}
                className="w-52 h-52 hover:rotate-2 hover:scale-105 hover:opacity-80 rounded-md transition-all"
            />
            </Link>
            
        </div>
    );
}
