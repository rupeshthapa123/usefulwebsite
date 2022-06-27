import React from "react";

/**
 * It takes in a link and a name, and returns a button with the name and link.
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A button with a link and a name.
 */
const Button = (props)=>{
    return <a href={props.link}><button className="button">{props.name}</button></a>
}

export default Button;