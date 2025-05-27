import React from 'react'

export default function User({name, age, image= "user_images/default.jpg", ...props}) {
  return (
    <div>
      <li>{name}</li>
      <li>{age}</li>
      <img src={image} style={{width: "200px", height: "200px"}}/>
    </div>
  )
}
