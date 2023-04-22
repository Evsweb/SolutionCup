import './ReviewComp.css'
import { observer } from "mobx-react-lite";
import MoneyStore from '../../store/MoneyStore'
import 'reactjs-popup/dist/index.css';

function ReviewComp() {

  return (
    <div className="Review">
      <div className="ReviewBody">
        <div className="DefaultMargin">
            Всего денег заработано: {MoneyStore.getTotalIncome()}
        </div>
        <div className="DefaultMargin">
            Всего денег потрачено: {MoneyStore.getTotalExpense()}
        </div>
        <div className="DefaultMargin">
            Состояние счета: {MoneyStore.getTotalIncome() - MoneyStore.getTotalExpense()} рублей
        </div>
        {
            MoneyStore.getTotalIncome() - MoneyStore.getTotalExpense() < 0 && <div>"Нужно больше золота"</div>
        }
      </div>
    </div>
  )
}

export default observer(ReviewComp);
