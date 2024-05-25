import style from "./style.module.css"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const ListItems = () => {
    const { ProductsList, setCount, count, setInit, init, cont, setCont} = useContext(GlobalContext);
    // const [ init, setInit ] = useState<IProduct[]>([])
    // const [ cont, setCont ] = useState(9)

    useEffect( () => {
        setInit([...ProductsList.slice(0, cont)])
        // setInit(ProductsList)
    }, [ProductsList])

    const handleMore = () => {
        setCont(cont + 9)
        setInit([...ProductsList.slice(0, cont + 9)])
        console.log(init)
    }

    const addToBag = () => {
        setCount(count + 1)
    }

    return (
        <div className={style.container}>
            <ul className={style.containerList}>
                {ProductsList && ProductsList.length > 0 ? (  
                    init.map((object) => (
                <li key={object.id}>
                    <img src={object.image} alt="" />
                    <p className={style.productName}>{object.name.toUpperCase()}</p>    
                    <div>
                        <p className={style.price}>{Number(object.price).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
                        <p className={style.payInstallment}>
                            até {object.parcelamento[0]}x de {Number(object.parcelamento[1]).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}
                        </p>
                    </div>
                    <button onClick={addToBag}>COMPRAR</button>
                </li>
                ))
                ) : (
                    <p>deu merda</p>
                )}
            </ul>
            {
                init && init.length >= cont ? 
                <button onClick={handleMore} className={style.buttonHandleMore}>CARREGAR MAIS</button>
                : <p> Todos os produtos foram carregados</p>
            }
        </div>
    )
}

export default ListItems