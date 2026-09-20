
import {navLinks} from '../constants';

function NavBar() {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo"/>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={`/${link.label.toLowerCase()}`}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search icon"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart icon"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
