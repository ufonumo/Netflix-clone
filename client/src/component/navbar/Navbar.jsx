import React , {useState} from 'react'
import './navbar.scss';
import logo from '../../assets/Netflix.svg'
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown, Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    console.log(isScrolled);


    return (
        <div className={ isScrolled ? 'navbar scrolled' : 'navbar' }>
            <div className="container">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <SearchIcon className='icons'/>
                    <span>Kid</span>
                    <Notifications  className='icons'/>
                    <Avatar />
                    <div className="profile">
                        <ArrowDropDown  className='icons'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Log out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
