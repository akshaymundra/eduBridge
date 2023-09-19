import Link from "next/link"
import Style from "./Header.module.css";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return (
        <header className={Style.header}>
            <Link className={Style.link} href={'/'}>
                <HomeIcon style={{ color: 'var(--light)', fontSize: '18px' }} />
                Home
            </Link>
        </header>
    )
}

export default Header