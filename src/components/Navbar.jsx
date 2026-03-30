import React from 'react'
import {navLinks} from "../constants"
const Navbar = () => {
    return (
       <header>
           <nav>
               <img src="/logo.svg" alt="Apple logo" />

               <ul>
                   {navLinks.map(({ label})=>(
                       <li key={label}>
                           <a href={label}>{label}</a>
                       </li>
                   ))}
               </ul>

               <div className="flex-center gaap-3">
                   <button>
                       <img src="/search.svg" alt="Search(Why are you even using it??)" />
                   </button>
                   <button>
                       <img src="/cart.svg" alt="It's just looking cool at this point" />
                   </button>
               </div>
           </nav>
       </header>
    )
}
export default Navbar
