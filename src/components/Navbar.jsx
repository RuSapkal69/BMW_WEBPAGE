import React from 'react'
import { navLists} from '../constants'

const Navbar = () => {

    const scrollToSection = (target) => {
        document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <header className='w-full py-5 sm:px-10 px-5 flex items-center justify-between'>
        <nav className='flex w-full screen-max-width'>
            {/* <img 
            src="/assets/images/BMW_LOGO.svg"
            alt="BMW Logo"
            width={14}
            height={18}
            /> */}

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, index) => (
                    <div onClick={() => scrollToSection(nav)} key = {index} className='px-20 text-sm cursor-pointer text-gray hover:text-white transition-all' >
                        {nav}
                    </div>

                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                {/* <img 
                src={searchImg}
                alt="Search Icon"
                width={18}
                height={18}
                />
                <img 
                src={bagImg}
                alt="Bag Icon"
                width={18}
                height={18} */}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
