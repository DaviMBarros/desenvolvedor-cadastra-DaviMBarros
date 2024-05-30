import style from "./style.module.css"
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const InputFilter = ({description, eventClick, value}: any) => {
    const { check } = useContext(GlobalContext);

    return (
        <div>
            <input className={style.checkbox} type="checkbox" value={value} checked={check === value} onChange={eventClick}/>
            <label className={style.label}>{description}</label>
        </div>
    )
}

export default InputFilter