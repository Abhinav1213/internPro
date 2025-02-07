import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import { useState, useEffect, useRef } from 'react'
import nav from "../data/nav.json"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navigation, setNavigation] = useState(nav);
    const sectionRefs = useRef({});

    useEffect(() => {
        sectionRefs.current = navigation.reduce((acc, item) => {
            acc[item.name] = document.getElementById(item.name);
            return acc;
        }, {});
    }, [navigation]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setNavigation((prevNav) =>
                        prevNav.map((item) => ({
                            ...item,
                            current: item.name === entry.target.id
                        }))
                    );
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionRefs.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            Object.values(sectionRefs.current).forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [navigation]);

    const handleSectionClick = (item) => {
        setNavigation((prevNav) =>
            prevNav.map((navItem) =>
                navItem.id === item.id ? { ...navItem, current: true } : { ...navItem, current: false }
            )
        );
    };

    return (
        <div className="sticky top-0 z-50">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex shrink-0 items-center" >
                                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                            <img alt="Your Company" src="/skylife.svg" className="h-8 w-auto cursor-pointer rounded-lg" />
                                        </Link>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    to={item.name}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                                    )}
                                                    onClick={() => handleSectionClick(item)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DisclosurePanel className="sm:hidden">
                            {({ close }) => (
                                <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={item.name}
                                            smooth={true}
                                            duration={500}
                                            offset={-260}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white cursor-pointer'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                            )}
                                            onClick={() => {
                                                handleSectionClick(item);
                                                close();
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}