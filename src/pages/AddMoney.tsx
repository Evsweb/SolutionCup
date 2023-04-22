import { useState } from 'react';
import Header from '../components/header/Header'
import MoneyStore from '../store/MoneyStore'
import { useNavigate } from 'react-router-dom';

function AddMoney() {
    let navigate = useNavigate();
    const [summ, setSumm] = useState(MoneyStore.categories[0].value);


  return (
    <div className="CenterWrapper">
      <Header/>
      <div className="CenterWrapper">
        <div className='DefaultMargin'>Введите сумму пополнения</div>
        <input className='DefaultMargin' id='moneySumm' type="number" onChange={(event)=> setSumm(event.target.value)}/>
        <div 
            className='Button DefaultMargin'
            onClick={()=> {
                MoneyStore.addMoney(Number(summ));
                navigate("/") 
            }}
        >
            <span>Пополнить</span>
        </div>
      </div>
    </div>
  )
}

export default AddMoney
