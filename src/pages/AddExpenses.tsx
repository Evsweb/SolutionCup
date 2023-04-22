import { useState } from 'react';
import Header from '../components/header/Header'
import MoneyStore from '../store/MoneyStore'
import { useNavigate } from 'react-router-dom';

function AddMoney() {
    let navigate = useNavigate();
    const [summ, setSumm] = useState(1);
    const [category, setCategory] = useState(MoneyStore.categories[0].value);


  return (
    <div className="CenterWrapper">
      <Header/>
      <div className="CenterWrapper">
        <div className='DefaultMargin'>Введите сумму расхода и выберите категорию</div>
        <div>
          <input className='DefaultMargin' id='moneySumm' type="number" onChange={(event)=> setSumm(event.target.value)}/>
        </div>
        <div>
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
        </div>
        <div 
            className='Button DefaultMargin'
            onClick={()=> {
                MoneyStore.catchMoney(Number(summ), category);
                navigate("/") 
            }}
        >
            <span>Украсть денег</span>
        </div>
      </div>
    </div>
  )
}

export default AddMoney
