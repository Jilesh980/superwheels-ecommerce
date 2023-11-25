import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CompanyLogo from '../../assets/logo/branding.png'
import { Link } from 'react-router-dom'

const user = {
  name: 'Paul Ivan Dela Cruz',
  email: 'paulivan@example.com',
  imageUrl:
    'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/379798906_6595027330583071_6322618597329491293_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4XssOwj4DvLqzqru-j4A-vlQIL7X82Oa-VAgvtfzY5sW22xBHsdKFEJaZoC2JBXl1sVj0wgZjhs34tKTNd22R&_nc_ohc=u1-BQZuIK3wAX_Ak5xy&_nc_oc=AQmu1j1lf2meyK9YH6suehAZW22IiX9bmKbeJx1bDR6wa0EsxpugBQ9Zs1CGVuKchOE&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfDtxHVM1t_gLNdhP-f6FuFd4y318uXcH2_jEK3L-A6Buw&oe=655A33DF',
}
const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Products', href: '/products'},
  { name: 'About', href: '/about'},
  { name: 'Dealerships', href: '/dealerships'}
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar({children}) {
    return ( 
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-black">
                {({ open }) => (
                    <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                            <img
                                className="h-10 w-auto"
                                src={CompanyLogo}
                                alt="Your Company"
                            />
                            </div>
                            <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                    item.current
                                        ? 'bg-gray-900 text-white'
                                        : 'font-primary text-[1.2rem] text-white hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                            <Link to='/cart'>
                                <button
                                    type="button"
                                    className="bg-black rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                >
                    
                                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </Link>
                                <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    3
                                </span>


                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                </Menu.Button>
                                </div>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                        <a
                                            href={item.href}
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        )}
                                    </Menu.Item>
                                    ))}
                                </Menu.Items>
                                </Transition>
                            </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                            </Disclosure.Button>
                        ))}
                        </div>
                        <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                            <div className="text-sm font-medium leading-none text-white">{user.email}</div>
                            </div>
                            <Link className='ml-auto' to='/cart'>
                                <button
                                type="button"
                                className="flex-shrink-0 rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </Link>
                                <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    3
                                </span>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            >
                                {item.name}
                            </Disclosure.Button>
                            ))}
                        </div>
                        </div>
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
                </main>
            </div>
        </>
    );
}

export default Navbar;