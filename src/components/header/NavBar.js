import './NavBar.css';
import {Link} from "react-router-dom";
import {menuItems} from "../../resources/menuItems";

export default function NavBar() {

    return (
        <nav id="navbar">
            {
                menuItems.map((item) => {
                    let url = `/${item.url}`;
                    return (
                        <Link
                            onMouseEnter={() => console.log(item.title + ' Entered')}
                            onMouseLeave={() => console.log(item.title + ' Left')}
                            to={url}
                            key={item.url}>
                            {item.title}
                        </Link>
                    );
                })
            }
        </nav>
    );
}
