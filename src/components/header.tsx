import nlw_logo from '../assets/logo_image.svg'
import { Navlink } from './nav-link'
export function Header() {
    return (
        <div className="header">
            <img src={nlw_logo}/>
            <nav className='menu'>
               <Navlink href='/eventos'>Eventos</Navlink>
               <Navlink href='/participantes'>Participantes</Navlink>
            </nav>
        </div>
    )
}

