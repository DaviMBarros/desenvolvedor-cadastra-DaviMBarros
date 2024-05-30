import { useContext } from "react";
import InputFilter from "../InputFilter";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const FilterColorsMobile = () => {
    const { setProductsList, setCheck, originalList } = useContext(GlobalContext);

    
    const filteredColors = (e: any) => {
        const filterColor = originalList.filter((c) => c.color == e.target.value)
        setProductsList(filterColor)
        setCheck(e.target.value)
    }
    return (
        <div>
            <div>
                <InputFilter eventClick={filteredColors} description={"Amarelo"} value="Amarelo" />
                <InputFilter eventClick={filteredColors} description="Azul" value="Azul" />
                <InputFilter eventClick={filteredColors} description="Branco" value="Branco" />
                <InputFilter eventClick={filteredColors} description="Cinza" value="Cinza"/>
                <InputFilter eventClick={filteredColors} description="Laranja" value="Laranja"/>
                <InputFilter eventClick={filteredColors} description="Verde" value="Verde"/>
                <InputFilter eventClick={filteredColors} description="Vermelho" value="Vermelho" />
                <InputFilter eventClick={filteredColors} description="Preto" value="Preto" />
                <InputFilter eventClick={filteredColors} description="Rosa" value="Rosa" />
                <InputFilter eventClick={filteredColors} description="Vinho" value="Vinho" />   
            </div>
        </div>
    )
}

export default FilterColorsMobile