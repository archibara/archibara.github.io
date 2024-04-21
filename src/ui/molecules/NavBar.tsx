import { Link } from '../atoms/Link.tsx';

export const NavBar = () => {
  return (<div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold" search={{}}>
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
  )
}