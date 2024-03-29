import {useState} from "react";

export const Navbar = () => {

    const [links, setLinks] = useState(
        [
            {
                name: 'Sobre mí',
                id: 'about-me'
            },
            {
                name: 'Proyectos',
                id: 'projects'
            },
            {
                name: 'Contacto',
                id: 'contact'
            }
        ]
    )

    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = (e) => {
        setMenuToggle(!menuToggle)
    }

    return (
        <nav className='navbar'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>

                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                            onClick={handleToggle}
                        >
                            <span className='sr-only'>Open main menu</span>

                            <svg className='block h-6 w-6'
                                 xmlns='http://www.w3.org/2000/svg'
                                 fill='none'
                                 viewBox='0 0 24 24'
                                 strokeWidth='1.5'
                                 stroke='currentColor'
                                 aria-hidden='true'>

                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                />
                            </svg>

                            <svg className='hidden h-6 w-6'
                                 xmlns='http://www.w3.org/2000/svg'
                                 fill='none'
                                 viewBox='0 0 24 24'
                                 strokeWidth='1.5'
                                 stroke='currentColor'
                                 aria-hidden='true'>
                                <path strokeLinecap='round'
                                      strokeLinejoin='round'
                                      d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>

                        <div className='flex flex-shrink-0 items-center'>
                            <img className='block h-8 w-auto lg:hidden'
                                 src='/my-portfolio/icons8-consola-24.png'
                                 alt='terminal'
                            />

                            <img className='hidden h-8 w-auto lg:block'
                                 src='/my-portfolio/icons8-consola-24.png'
                                 alt='terminal'
                            />
                        </div>

                        <div className='hidden sm:ml-6 sm:block md:flex md:justify-end w-full'>
                            <div className='flex space-x-4'>
                                {
                                    links.map(link => (
                                        <a key={link.id}
                                           href={`#${link.id}`}
                                           className='text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        >
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {
                menuToggle &&  <div className='sm:hidden' id='mobile-menu'>
                    <div className='space-y-1 px-2 pt-2 pb-3'>
                        {
                            links.map(link => (
                                <a key={link.id}
                                   href={`#${link.id}`}
                                   className='text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                >
                                    {link.name}
                                </a>
                            ))

                        }
                    </div>
                </div>
            }
        </nav>
    )
}
