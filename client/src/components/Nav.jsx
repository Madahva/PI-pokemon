import { Link  } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <Link to="/">Exit</Link>
      <Link to="/home">Home</Link>
      <Link to="/create">Create</Link>
    </div>
  )
}

export default Nav
