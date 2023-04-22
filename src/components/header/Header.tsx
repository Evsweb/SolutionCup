import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="Header">
        <div className="HeaderLinks">
            <Link to="/">Обзор</Link>
            <Link to="/">Категории</Link>
            <Link to="/wife">Расходы жены</Link>
        </div>
        <div className="HeaderMoney">
            <Link to='/addmoney'>Пополнить бюджет</Link>
            <Link to="/addexpenses">Добавить расход</Link>
            <Link to="/category">Добавить категорию</Link>
        </div>
    </div>
  )
}

export default Header
