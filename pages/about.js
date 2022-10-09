import React from 'react'

function add(a, b) {
  return a + b;
}


export default function about() {
  return (
    <div>{ add(5, 8) }</div>
  )
}

