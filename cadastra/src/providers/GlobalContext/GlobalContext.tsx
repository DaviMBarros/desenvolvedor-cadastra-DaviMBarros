import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { IGlobalContext, IGlobalProviderProps, IProduct } from "./@type";

export const GlobalContext = createContext({} as IGlobalContext)

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
    const [ProductsList, setProductsList] = useState<IProduct[]>([])
    const [ originalList , setOriginalList] = useState<IProduct[]>([])
    const [count, setCount] = useState(0)
    const [openModalOrder, setOpenModalOrder] = useState(false)
    const [openModalFilter, setOpenModalFilter] = useState(false)
    const [ cont, setCont ] = useState(9)
    const [ addFilter, setAddFilter ] = useState<string[]>([])
    const [check, setCheck ] = useState("")
    const [ init, setInit ] = useState<IProduct[]>([])

    useEffect( () => {
        try{
            const getProducts = async () => {
                const { data } = await api.get<IProduct[]>("products/")
                setProductsList(data)
                setOriginalList(data)
            }
            getProducts()

        }catch(error){
            console.log(error)
        }
    }, [])

    return(
        <GlobalContext.Provider value={{
            ProductsList,
            count,
            setCount,
            openModalOrder,
            setOpenModalOrder,
            setProductsList,
            init,
            setInit,
            cont,
            setCont,
            openModalFilter,
            setOpenModalFilter,
            addFilter,
            setAddFilter,
            check, 
            setCheck,
            originalList,
            setOriginalList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
