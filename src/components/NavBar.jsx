import './Nav.css'
import Logo from "./Logo"

function NavBar(){
    return(
       <nav className="fixed top-0 w-full backdrop-blur-md z-50  " >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
             <Logo/>   
             <div className=" navselec flex items-center gap-8">
            <a href="#home"className=" navselec pointer relative">Home</a>
            <a  href="#courses"className="navselec pointer relative ">Cursos</a>
           <a  href="#courses"className=" navselec pointer relative ">Quem somos</a>
        </div>
        </div>
      </nav>
    )
}

export default NavBar