import './ReviewComp.css'
import { observer } from "mobx-react-lite";
import MoneyStore from '../../store/MoneyStore'
import 'reactjs-popup/dist/index.css';

function ReviewComp() {

  return (
    <div className="Review">
      <div className="ReviewBody">
        всего денех {MoneyStore.getTotalIncome()}
      </div>
    </div>
  )
}

export default observer(ReviewComp);
