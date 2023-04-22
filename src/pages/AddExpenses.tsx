import { useState } from 'react';
import Header from '../components/header/Header'
import MoneyStore from '../store/MoneyStore'
import { useNavigate } from 'react-router-dom';

function AddMoney() {
    let navigate = useNavigate();
    const [summ, setSumm] = useState(MoneyStore.categories[0].value);
    const [category, setCategory] = useState(MoneyStore.categories[0].value);


  return (
    <div className="CenterWrapper">
      <Header/>
      <div className="CenterWrapper">
        <div className='DefaultMargin'>Введите сумму расхода и выберите категорию</div>
        <input className='DefaultMargin' id='moneySumm' type="number" onChange={(event)=> setSumm(event.target.value)}/>
        <div 
            className='Button DefaultMargin'
            onClick={()=> {
                MoneyStore.addMoney(Number(summ));
                navigate("/") 
            }}
        >
          <select>
        {MoneyStore.categories.map(fbb =>
            <option 
                onChange={()=> setCategory(fbb.value)}
                key={fbb.id}
                value={fbb.value}
            >
                {fbb.value}
            </option>
            )};
        </select>
            <span>Пополнить</span>
        </div>
      </div>
    </div>
  )
}

export default AddMoney
