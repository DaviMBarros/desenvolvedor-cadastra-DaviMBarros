import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const SortButton = () => {
    const { setOpenModalOrder } = useContext(GlobalContext);

    const openModal = () => {
        setOpenModalOrder(true)
    }

    return (
        <div>
            <button onClick={openModal}>Ordenar</button>
        </div>
    )
}

export default SortButton