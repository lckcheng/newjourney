import React from "react"
import {navigate} from "gatsby"
import MyHeader from "../components/MyHeader"

const Test = () => (
    <div>
        <MyHeader title="My Test Header"></MyHeader>
        <h1>Testing the page 1</h1>
        <h2>Testing again!!</h2>
        <button onClick={()=>navigate("/")}>Nagivate to Homepage</button>
    </div>

)

export default Test;