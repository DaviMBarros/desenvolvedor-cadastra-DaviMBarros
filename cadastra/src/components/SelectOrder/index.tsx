import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const SelectOrder = () => {
    const { setProductsList, ProductsList, setInit, cont } = useContext(GlobalContext);

    const sortOrder = (button: any) => {
        if (button == "Mais recente") {
            ProductsList.sort((a, b) => {
                if (a.date > b.date) {
                  return -1;
                }
                if (a.date < b.date) {
                  return 1;
                }
                return 0;
            })
            setProductsList(ProductsList)
            setInit([...ProductsList.slice(0, cont)])

        } else if (button == "Maior preço") {
            ProductsList.sort((a, b) => b.price - a.price);
            setProductsList(ProductsList)
            setInit([...ProductsList.slice(0, cont)])

        } else if (button == "Menor preço") {
            ProductsList.sort((a, b) => a.price - b.price);
            setProductsList(ProductsList)
            setInit([...ProductsList.slice(0, cont)])
        };
    }

    return (
        <div>
            <select name="" onChange={(e) => {sortOrder(e.target.value)}}>
                <option  selected disabled>Ordenar por:</option>
                <option  value={"Mais recente"}>Mais recente</option>
                <option  value={"Maior preço"}>Maior preço</option>
                <option  value={"Menor preço"}>Menor preço</option>
            </select>
        </div>
    
    )
}

export default SelectOrder