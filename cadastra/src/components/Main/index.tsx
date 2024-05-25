import { useContext } from "react"
import FilterButton from "../FilterButton"
import ListItems from "../ListItems"
import SortButton from "../SortButton"
import style from "./style.module.css"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext"
import ModalOrder from "../ModalOrder"

const Main = () => {
    const { openModalOrder } = useContext(GlobalContext);

    return (
        <>            
        {openModalOrder ? <ModalOrder/> : null}
        <main className={style.main}>
            <h1 className={style.title}>Blusas</h1>
            <div className={style.teste}>
                <div className={style.styleButtons}>
                    <FilterButton/>
                    <SortButton/>
                </div>
            </div>
            <ListItems/>
            
        </main>
        </>

    )
}

export default Main