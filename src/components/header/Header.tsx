import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="Header">
        <div className="HeaderLinks">
            <Link to="/">Обзор</Link>
            <Link to="/">Категории</Link>
            <Link to="/">Ссылка</Link>
            <Link to="/">Ссылка</Link>
        </div>
        <div className="HeaderMoney">
            <Link to='/addmoney'>Пополнить бюджет</Link>
            <Link to="/addexpenses">Добавить расход</Link>
            <Link to="/">Добавить категорию</Link>
        </div>
    </div>
  )
}

export default Header
