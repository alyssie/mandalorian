import { useState } from 'react'

const Navbar = () => {
    const [showMe, setShowMe] = useState(false)

    function toggle() {
        setShowMe(!showMe);
    }

    return(
        <nav className="bg-primary-1 px-6 md:px-14 md:px-10">
            <div class="container mx-auto flex flex-wrap items-center justify-between py-2">
                <img src="/logo.png" alt="The Mandalorian" class="logo md:h-6 lg:h-10" />
                <div class="flex md:hidden">
                    <button id="hamburger" class="focus:outline-none border-0" onClick={toggle}>
                        <img class="block filter invert" src="/menu.png" width="40" height="40" />
                    </button>
                </div>
                <div class={showMe ? "p-4 md:p-0 md:flex w-full md:w-auto text-center md:text-right text-bold mt-5 md:mt-0 border-t border-secondary-0 md:border-none" : "hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t border-secondary-0 md:border-none"}>
                    <p class="block md:inline-block text-secondary-1 text-xs lg:text-sm py-4 px-5 md:px-2 mx-0 md:mx-2">
                        Welcome back, <a href="#" class="text-white-1 hover:text-secondary-1 ">Din Djarin</a>
                    </p>
                    <a href="#" class="block md:inline-block text-white-1 text-xs lg:text-sm hover:text-secondary-1 py-4 px-5 md:px-2 mx-0 xl:mx-4 md:mx-0">Home</a>
                    <a href="#" class="block md:inline-block text-white-1 text-xs lg:text-sm hover:text-secondary-1 py-4 px-5 md:px-2 mx-0 xl:mx-4 md:mx-0 font-bold">My Learnings</a>
                    <a href="#" class="block md:inline-block text-white-1 text-xs lg:text-sm hover:text-secondary-1 py-4 px-5 md:px-2 md:pr-0 ml-0 xl:ml-4 md:mx-0">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;