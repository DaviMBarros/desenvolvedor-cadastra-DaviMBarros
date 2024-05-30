import { useContext } from "react"
import FilterButton from "../FilterButton"
import ListItems from "../ListItems"
import SortButton from "../SortButton"
import style from "./style.module.css"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext"
import ModalOrder from "../ModalOrder"
import ModalFilter from "../ModalFilter"
import FilterColorsMobile from "../FilterColorsMobile"
import FilterPrice from "../FilterPrice"
import FilterSize from "../FilterSize"
import SelectOrder from "../SelectOrder"

const Main = () => {
    const { openModalOrder, openModalFilter } = useContext(GlobalContext);

    return (
        <>            
        {openModalOrder ? <ModalOrder/> : null}
        {openModalFilter ? <ModalFilter/> : null}
        <main className={style.main}>
            

            <div className={style.containerTitle}>
                <h1 className={style.title}>Blusas</h1>
                <SelectOrder />
            </div>

            <div className={style.divMobile}>
                <h1 className={style.title}>Blusas</h1>
                <div className={style.styleButtons}>
                    <FilterButton/>
                    <SortButton/>
                </div>
            </div>
            <div className={style.mainContent}>
                <div className={style.containerFilters}>
                    <FilterColorsMobile/>
                    <FilterSize/>
                    <FilterPrice/>
                </div>    
                <ListItems/> 
            </div>
        </main>
        </>

    )
}

export default Main