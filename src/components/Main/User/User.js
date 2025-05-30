import React from "react";
import { LuSquareUserRound } from "react-icons/lu";

export default function User({
  name : Username = "unknown",
  age,
  image = "user_images/default.jpg",
  ...props
}) {
  return (
    Username !== "amir" && (
      <div>
        <LuSquareUserRound size={100} color={"rgba(255, 0, 174, 0.77)"}/>
        <li>{Username}</li>
        <li>{age}</li>
        <img src={image} style={{ width: "200px", height: "200px" }} />
      </div>
    )
  );
}
