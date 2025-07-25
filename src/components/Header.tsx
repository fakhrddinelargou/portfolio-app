import { Menu, X } from "lucide-react"


const Header = ()=> {

    return(
        <header className="header h-[10vh] w-full px-15 flex items-center justify-between ">
<h1 className="text-5xl text-blue-950 font-semibold">
  Largo<span className="text-blue-300">Dev</span>
</h1>

<nav className="navBar flex items-center gap-50 text-blue-950 relative">
  <input type="checkbox" id="checked" hidden />

  <label className="open" htmlFor="checked">
    <Menu color="black" />
  </label>

  <div className="link-container">
    <label className="close" htmlFor="checked">
      <X color="black" />
    </label>

     <ul className="links flex gap-10 font-medium text-[1.5rem] pt-[1rem] ">
        <li className="relative inline-block after:block after:h-[2px] after:bg-blue-950 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left cursor-pointer ">Home</li>
        <li className="relative inline-block after:block after:h-[2px] after:bg-blue-950 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left cursor-pointer">About Me</li>
        <li className="relative inline-block after:block after:h-[2px] after:bg-blue-950 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left cursor-pointer">Skills</li>
        <li className="relative inline-block after:block after:h-[2px] after:bg-blue-950 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left cursor-pointer">Projects</li>
        <li className="relative inline-block after:block after:h-[2px] after:bg-blue-950 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left cursor-pointer">Contact</li>
    </ul>

    <button className="animated-button w-15 font-bold mt-[.8rem] h-15">
      <span>CV</span>
      <div></div>
    </button>
  </div>
</nav>

        </header>
    )
}

export default Header





