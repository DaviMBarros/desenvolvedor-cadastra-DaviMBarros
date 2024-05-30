import style from "./style.module.css"

import { useContext, useState } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import FilterSize from "../FilterSize";
import FilterPrice from "../FilterPrice";
import FilterColorsMobile from "../FilterColorsMobile";

const ModalFilter = () => {
    const { setOpenModalFilter, check } = useContext(GlobalContext);
    const [isOpenFilterColors, setIsOpenFilterColors] = useState(false)
    const [isOpenFilterPrice, setIsOpenFilterPrice] = useState(false)
    const [isOpenFilterSize, setIsOpenFilterSize] = useState(false)

    const closeModal = () => {
        setOpenModalFilter(false)
    }

    

    return (
        <div className={style.modal} role="dialog">
            <div className={style.headerModal}>
                <h1>FILTRAR</h1>
                <img src="/close.svg" alt="" onClick={closeModal}/>
            </div>

            <div className={style.container}>
                <div className={style.divSelect} onClick={() => {setIsOpenFilterColors(!isOpenFilterColors)}}>
                    <h2 >CORES</h2>
                    <img src="/teste.png" alt="" className={style.img}/>
                </div>
                {isOpenFilterColors && (<FilterColorsMobile />)}

                <div className={style.divSelect} onClick={() => {setIsOpenFilterSize(!isOpenFilterSize)}}>
                    <h2 >TAMANHOS</h2>
                    <img src="/teste.png" alt="" className={style.img}/>
                </div>
                {isOpenFilterSize && (<FilterSize />)}

                <div className={style.divSelect} onClick={() => {setIsOpenFilterPrice(!isOpenFilterPrice)}}>
                    <h2 >FAIXA DE PREÇO</h2>
                    <img src="/teste.png" alt="" className={style.img}/>
                </div>
                {isOpenFilterPrice && (<FilterPrice />)}
            </div>

            <div>
                <button onClick={closeModal}>Aplicar</button>
                <button onClick={() => {check == "false"}}>Limpar</button>
            </div>
        </div>
    )
}

export default ModalFilter