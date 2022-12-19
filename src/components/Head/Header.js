import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Produtos</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

export default Header;