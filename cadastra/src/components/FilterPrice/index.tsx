import style from "./style.module.css"
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const FilterPrice = () => {
    const { ProductsList, setProductsList, setCheck, } = useContext(GlobalContext);

    const filteredPrices = (e: any) => {
        const FilterPrice = ProductsList.filter((c) => c.price > e.target.min  && c.price <= e.target.max)
        setProductsList(FilterPrice)
        console.log(FilterPrice)
        // if ()
        setCheck(e.target.value)
    }

    return (
        <div>
            <div className={style.containerInput}>
                <div>
                    <input className={style.checkbox} type="checkbox" min={0} max={50} onChange={filteredPrices}/>
                    <label>de R$0 a R$50</label>
                </div>
                <div>
                    <input className={style.checkbox} type="checkbox" min={51} max={150} onChange={filteredPrices}/>
                    <label>de R$51 a R$150</label>
                </div>
                <div>
                    <input className={style.checkbox} type="checkbox" min={151} max={300} onChange={filteredPrices}/>
                    <label>de R$151 a R$300</label>
                </div>
                <div>
                    <input className={style.checkbox} type="checkbox" min={301} max={500} onChange={filteredPrices}/>
                    <label>de R$301 a R$500</label>
                </div>
                <div>
                    <input className={style.checkbox} type="checkbox" min={500} max={10000} onChange={filteredPrices}/>
                    <label>a partir de R$500</label>
                </div>

            </div>
        </div>
    )
}

export default FilterPrice