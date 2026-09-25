import React, { useState } from 'react'

const Background = () => {
    const [color, setColor] = useState("white")

    const changeColor = () => {
        if (color === "white") {
            setColor("green")
        } else if (color === "green") {
            setColor("red")
        } else {
            setColor("white")
        }
    }

    return (
        <div style={{ backgroundColor: color, height: "20vh" }}>
            <button onClick={changeColor}>Change Background</button>
        </div>
    )
}

export default Background