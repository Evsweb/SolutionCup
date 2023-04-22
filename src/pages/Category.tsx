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
        <input className='DefaultMargin' value={category} id='moneySumm' type="text" onChange={(event)=> setCategory(event.target.value)}/>
        <div 
            className='Button DefaultMargin'
            onClick={()=> {
                MoneyStore.addCategory(category);
                setCategory('');
            }}
        >
            <span>Добавить категорию</span>
        </div>
        {MoneyStore.categories.map(elem => 
          <div className="Category DefaultMargin" key={elem.id}>
            <div className="CategoryWrapper">
              <div>{elem.value}</div>
              <div className="DeleteButton" onClick={() => {
                MoneyStore.categories = MoneyStore.categories.filter(item => item.id !== elem.id)
              }}>удалить</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default observer(Category)
