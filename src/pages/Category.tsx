import { useState } from 'react';
import Header from '../components/header/Header'
import MoneyStore from '../store/MoneyStore'
import { observer } from "mobx-react-lite";

function Category() {
    const [category, setCategory] = useState('');


  return (
    <div className="CenterWrapper">
      <Header/>
      <div className="CenterWrapper">
        <div className='DefaultMargin'>Добавить категорию</div>
        <input className='DefaultMargin' id='moneySumm' type="text" onChange={(event)=> setCategory(event.target.value)}/>
        <div 
            className='Button DefaultMargin'
            onClick={()=> {
                MoneyStore.addCategory(category);
            }}
        >
            <span>Добавить категорию</span>
        </div>
        {MoneyStore.categories.map(elem => 
          <div key={elem.id}>{elem.value}</div>
        )}
      </div>
    </div>
  )
}

export default observer(Category)
