import "./button.css";
import "./buttonController";
import ButtonController from './buttonController'
import {observer} from 'mobx-react-lite';

function Button() {
  console.log("knopushka");

  return (
    <div onClick={()=> ButtonController.keker()} className="Button Primary">
      {ButtonController.kek}
    </div>
  );
}

export default observer(Button);
