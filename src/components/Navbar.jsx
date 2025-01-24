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
        
        console.log(sectionRefs.current);
    },[])
    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: "0px 0px 0px 0px", 
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

        // Observe each section
        Object.values(sectionRefs.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            // Cleanup observers on unmount
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
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={item.name}
                                            smooth={true}
                                            duration={500}
                                            offset={-70} // Adjust based on your header height
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white cursor-pointer' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
                    <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton key={item.id}>
                                <Link
                                    to={item.name}
                                    smooth={true}
                                    duration={500}
                                    offset={-70} // Adjust based on your header height
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white cursor-pointer'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                    )}
                                    onClick={() => handleSectionClick(item)}
                                >
                                    {item.name}
                                </Link>
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
}
