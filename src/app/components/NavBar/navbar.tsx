"use client"

import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./NavItem/nav_item";
import "../NavBar/navbar.css"
import { usePathname } from "next/navigation";

export default function Navbar (){

    const items: NavItemInterface[] = [
            { url: "/", label: "Home" },
            { url: "/about", label: "About" },
            { url: "/projects", label: "Projects" },
            { url: "/contact", label: "Contact" },
          ]

          
    const pathname =usePathname();
    
    return(
        <header className="">
            <nav className="navbar">
                <Link href='/' className="logo">
                    <Image src="/logo1.png" 
                    width={100} 
                    height={40} 
                    alt="logo"/>
                </Link>

                 <ul className="nav-items">
                    {items.map((item, index)=>(
                     <NavItem
                        key={index}
                        url={item.url}
                        label={item.label}
                        isActive={pathname === item.url}
                     />

                    ))}
                 </ul>

                 <button className="btn"> 
                    Contact me
                 </button>
            </nav>
        </header>
    )
}