import { Link } from 'gatsby'
import React from 'react'

const index = () => {
  return (
    <div>
      <h1>Hello Guys</h1>
      <div>
        <Link to="/company/history">History</Link>
      </div>
      <a href="/company/history">Regular</a>
    </div>
  );
}

export default index
