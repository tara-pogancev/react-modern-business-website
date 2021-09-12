import React, {useState} from 'react'
import HeroSection from '../components/heroSection';
import { Navbar } from './../components/navbar';
import { Sidebar } from './../components/sidebar'

export const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
        </>
    )
}
