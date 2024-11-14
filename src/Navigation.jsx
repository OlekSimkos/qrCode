import { Link } from "react-router-dom";
import s from "./navigation.module.css";

const Navigation = () =>{
    return(
        <nav className={s.container}>
            <Link to="/generate"> Генерировать QR </Link>
            <Link to="/scan"> Сканировать QR </Link>
            <Link to="/generateHistory"> История генерирования QR </Link>
            <Link to="/scanHistory">  История сканирования QR</Link>
        </nav>
    );
};

export default Navigation;