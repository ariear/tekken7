import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between px-10 py-3 fixed w-full">
            <img src="/logo/logo-t7.png" className="w-[240px]" alt="" />
            <div className="flex items-center font-pupylinux text-lg font-medium">
                <p className="mr-8"><NavLink to='/' style={(active) => {
                    return {
                        textShadow: active.isActive ? '0px -4px 13px rgba(206,89,55,0.98), 0px 4px 16px rgba(206,89,55,0.6)' : ''
                    }
                }} className={(active) => active.isActive ? 'text-orange-500 transition-all' : 'text-gray-400'}>Home</NavLink></p>
                <p className="mr-8"><NavLink to='/fighters' style={(active) => {
                    return {
                        textShadow: active.isActive ? '0px -4px 13px rgba(206,89,55,0.98), 0px 4px 16px rgba(206,89,55,0.6)' : ''
                    }
                }} className={(active) => active.isActive ? 'text-orange-500 transition-all' : 'text-gray-400'}>Fighters</NavLink></p>
                <p className="mr-8"><NavLink to='/about' style={(active) => {
                    return {
                        textShadow: active.isActive ? '0px -4px 13px rgba(206,89,55,0.98), 0px 4px 16px rgba(206,89,55,0.6)' : ''
                    }
                }} className={(active) => active.isActive ? 'text-orange-500 transition-all' : 'text-gray-400'}>About</NavLink></p>

                <button className="bg-blue-800 hover:bg-blue-500 text-white transition-all duration-200 py-3 px-6 border-4 border-white hover:outline-4 outline-1 hover:outline-blue-500 outline focus:outline-4 focus:outline-blue-300">
                    CONTACT ME
                </button>
            </div>
        </nav>
    )
}

export default Navbar