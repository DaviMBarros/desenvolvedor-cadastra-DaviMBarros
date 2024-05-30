import style from "./style.module.css"

import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const FilterSize = () => {
    const { ProductsList, setProductsList, setCheck, check, originalList} = useContext(GlobalContext);
    
    
    
    const filteredSizes = (e: any) => {
        const FilterSize = originalList.filter((c) => { for(let i = 0; i <= c.size.length; i++) {
            if (c.size[i] == e.target.value) {
                return c.size[i]
            }
        }})
        setProductsList(FilterSize)
    }

    return (
        <div>
                <div className={style.containerButton}>
                    <button className={style.button} value={"P"} onChange={filteredSizes}>P</button>
                    <button className={style.button} value={"M"} onClick={filteredSizes}>M</button>
                    <button className={style.button} value={"G"} onClick={filteredSizes}>G</button>
                    <button className={style.button} value={"GG"} onClick={filteredSizes}>GG</button>
                    <button className={style.button} value={"U"} onClick={filteredSizes}>U</button>
                    <button className={style.button} value={36} onClick={filteredSizes}>36</button>
                    <button className={style.button} value={38} onClick={filteredSizes}>38</button>
                    <button className={style.button} value={40} onClick={filteredSizes}>40</button>
                    <button className={style.button} value={42} onClick={filteredSizes}>42</button>
                    <button className={style.button} value={44} onClick={filteredSizes}>44</button>
                    <button className={style.button} value={46} onClick={filteredSizes}>46</button>
                </div>
        </div>
    )
}

export default FilterSize