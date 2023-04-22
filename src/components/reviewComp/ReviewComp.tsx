import './ReviewComp.css'
import { observer } from "mobx-react-lite";

function ReviewComp() {

  return (
    <div className="Review">
      <div className="ReviewBody">
        тут будет тело ревью
      </div>
    </div>
  )
}

export default observer(ReviewComp);
