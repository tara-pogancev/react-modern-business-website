import React, {useState} from 'react'
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { Navbar } from './../components/navbar';
import { Sidebar } from './../components/sidebar';

import Image1 from "../images/design-notes.svg";

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
            <InfoSection 
                image = {Image1}
                id = "about"
                subtitle="Mauris tempor interdum"
                title="Proin condimentum diam"
                text="In luctus nibh nec metus placerat consectetur. Maecenas odio mi, ullamcorper at porta non, egestas vitae velit. Donec lacinia porta tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec arcu nec diam posuere tincidunt. Nulla dignissim enim id nibh luctus, ullamcorper sagittis eros semper."
                btnText = "Start today"
            />
        </>
    )
}
