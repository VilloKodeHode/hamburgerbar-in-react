import { useState } from "react"
import { HamburgerBar } from "./HamburgerBar"
import {NavBar} from "./NavBar"

export const Header = () => {
const [isOpen, setIsOpen] = useState(false)

const handleMenuToggle = () => {
    setIsOpen(!isOpen)
}


    return (
        <header id="hjem" className='bg-black fixed w-full z-50 flex flex-col justify-center'>
<div className='flex items-center justify-between px-4 lg:px-12'>
  <div>
      <img src="/logo.png" alt="" className='h-24' />
  </div>

<NavBar/>

<HamburgerBar handleMenuToggle={handleMenuToggle} isOpen={isOpen} setIsOpen={setIsOpen} />

</div>

</header>
    )
}