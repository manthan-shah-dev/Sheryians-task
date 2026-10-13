import React from "react"
console.log(React)
console.log("Hello")
const root=document.querySelector("#root")

const h1=React.createElement("h1",null,"Hello This is From React")

console.log(h1)


ReactDOM.createRoot(root).render(h1)

// npm init -y
// for create the new package.json
