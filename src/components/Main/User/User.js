import React from "react";
import { LuSquareUserRound } from "react-icons/lu";

export default function User({
  name : Username = "unknown",
  age,
  image = "user_images/default.jpg",
  ...props
}) {
  return (
      <div className="my-7">
        <LuSquareUserRound size={50} color={"rgba(255, 0, 174, 0.77)"}/>
        <li>{Username}</li>
        <li>{age}</li>
        <img src={image} className="w-52 h-52 hover:rotate-2 hover:scale-105 hover:opacity-80 rounded-md transition-all" />
      </div>
    )
}
