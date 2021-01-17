import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
    return (
        <>
        <h1>{props.text}</h1>
        <h2>{props.subtitle}</h2>
        <Link to="/contact">Contact</Link>
        </>
    )
}