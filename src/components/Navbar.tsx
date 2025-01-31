import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Instalar npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const router = useRouter();  // Hook para capturar a rota atual

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = [
        { item: 'Home', path: '/', icon: 'pi pi-home' },
        { item: 'Quem somos', path: '/About', icon: 'pi pi-building' },
        /*{ item: 'Localização', path: '/Place', icon: 'pi pi-map' },*/
        { item: 'Contatos', path: '/Contact', icon: 'pi pi-phone' },
        { item: 'Agenda', path: '/Schedule', icon: 'pi pi-calendar' },
        /*{ item: 'Eventos', path: '/Event', icon: 'pi pi-calendar-times' },*/
        { item: 'Galeria', path: '/Gallery', icon: 'pi pi-image' }
        /*{ item: 'Equipe', path: '/Team', icon: 'pi pi-users' },*/
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.querySelector('#habilitar-menu') as HTMLElement | null;

            if (router.pathname === '/Schedule' || router.pathname === '/Event' || router.pathname === '/Team') {
                setIsHeroVisible(false);
                return;
            }

            if (heroElement) {
                const heroHeight = heroElement.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition > heroHeight - 100) {
                    setIsHeroVisible(false);
                } else {
                    setIsHeroVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router.pathname]);

    return (
        <header className={`p-4 fixed top-0 w-full z-50 ${isHeroVisible ? 'bg-transparent' : 'bg-[#111827]'} transition-colors duration-300`}>
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">

                <ul className="items-stretch hidden space-x-3 md:flex text-white">
                    {menuItems.map(menuItem => (
                        <li className="flex" key={menuItem.item}>
                            <a rel="noopener noreferrer" href={menuItem.path} className="flex items-center px-4">
                                {menuItem.item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botão do menu mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white p-2 rounded-md hover:bg-opacity-50">
                        <FontAwesomeIcon icon={faBars} size="lg" /> {/* Ícone de menu */}
                    </button>
                </div>

                {/* Ícone do menu à direita para versões desktop */}
                <div className="hidden md:flex">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <i className="pi pi-bars"></i> {/* Ícone de menu */}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-[#111827] bg-opacity-100 z-50 flex flex-col items-start text-white text-start">
                    <button
                        className="self-end p-2 text-white hover:bg-white"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <ul className="w-full text-start">
                        {menuItems.map(menuItem => (
                            
                            <li key={menuItem.item} className="w-full border-b border-white last:border-none text-start">
                                <a
                                    href={menuItem.path}
                                    className="block w-full px-4 py-2 text-segunda text-2xl hover:bg-sexta"
                                >
                                    <i className={`text-black ${menuItem.icon}`}></i>
                                    <span className="ml-2">{menuItem.item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
