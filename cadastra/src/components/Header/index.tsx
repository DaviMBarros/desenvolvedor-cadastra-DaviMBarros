import { useContext } from "react";
import style from "./style.module.css"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const Header = () => {
    const { count } = useContext(GlobalContext);
    return (
        <header className={style.header}>
            <div className={style.container}>
                <img src="./src/assets/logo.png" alt="logo da Cadastra" />
                <div>
                    <img src="./src/assets/bag.png" alt="sacola de compras" />
                    <span>{count}</span>
                </div>
            </div>
        </header>
    )
}

export default Header