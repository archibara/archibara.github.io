import { Link } from 'src/components/Link';

export const NavBar = () => {
  return (
    <nav>
      <ul className="p-2 flex gap-2">
        <li>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}