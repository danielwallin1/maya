import { ReactNode } from 'react';
import { _Products, _Hero, _Intro } from "../interfaces";
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';

interface Props {
    children?: ReactNode;
    hero: _Hero;
 }

export default function Page({children, hero}:Props) {
    return (
        <>
            <Header />
                <Hero hero={hero} />
                <main>{children}</main>
            <Footer />
        </>
    )
}
