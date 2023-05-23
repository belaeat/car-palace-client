import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { Tooltip } from 'react-tooltip'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><Link to='/add-toy'>Add Toys</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img className="w-1/2" src={logo} alt="" />
                </Link>


            </div>
            <div className="navbar-center flex justify-center">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                    {
                        user && <li><Link to='/my-toys'>My Toys</Link></li> 
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user &&
                    <>
                        <img className='mask mask-circle h-10' src={user?.photoURL} alt={user.displayName} data-tooltip-id={user.displayName} data-tooltip-content={user.displayName} /><Tooltip id={user.displayName} />
                    </>
                }
                {user ? <>
                    <p onClick={handleLogOut} className="btn border-none bg-[#86C8BC] ms-2">Logout</p>
                </> :
                    <>
                        
                        <p className="btn border-none bg-[#F16385] me-2"><Link to='/sign-up'>Sign Up</Link></p>
                        <p className="btn border-none bg-[#86C8BC]"><Link to='/login'>Login</Link></p>
                    </>

                }

            </div>
        </div>
    );
};

export default NavBar;