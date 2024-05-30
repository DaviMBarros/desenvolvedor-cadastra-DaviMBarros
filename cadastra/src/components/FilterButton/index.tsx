import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const FilterButton = () => {
    const { setOpenModalFilter, ProductsList, setProductsList } = useContext(GlobalContext);

    const openModal = () => {
        setProductsList(ProductsList)
        setOpenModalFilter(true)
    }

    return (
        <div>
            <button onClick={openModal}>Filtrar</button>
        </div>
    )
}

export default FilterButton