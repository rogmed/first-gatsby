import React from "react"

export default function Header(props) {
    return (
        <>
        <h1>{props.text}</h1>
        <h2>{props.subtitle}</h2>
        </>
    )
}