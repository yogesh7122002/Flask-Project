import React, { useState, useEffect } from "react";



export default function App() {
  const [data, setData] = useState({})
  useEffect(() => {
  fetch("/api")
    .then(res => res.json())
    .then(res => console.log(res))
}, [])

  return (
    <>
      <h1>Hey Boy</h1>
      <div>
        Header Div
      </div>
    </>
  )
}

