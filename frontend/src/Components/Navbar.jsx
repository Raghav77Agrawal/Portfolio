import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link,useLocation } from 'react-router-dom'
const navigation = [
  { name: 'About', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects'},
  { name: 'Contact', href: '/contact' },
]
import raghav from '../Assets/Ra.png';


export default function Navbar() {

  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  const location = useLocation();

  return (
     <Disclosure as="nav" className="bg-gray-800" style={{backgroundColor:'black'}}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={raghav}
                className="h-8 w-auto"
              />
            </div>
          {/* Desktop navigation: only visible at 750px+ (use md:block, md = 768px) */}
<div className="hidden md:flex flex-1 items-center justify-end">
  <div className="flex space-x-4">
    {navigation.map((item) => {
      const isActive = location.pathname === item.href;
      return (
        <Link
          key={item.name}
          to={item.href}
          aria-current={isActive ? 'page' : undefined}
          className={classNames(
            isActive ? 'bg-gray-900 text-info' : 'text-gray-300 hover:bg-gray-700 hover:text-primary',
            'rounded-md px-3 py-2 text-bg font-medium',
          )}
        >
          {item.name}
        </Link>
      );
    })}
  </div>
</div>

          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
      return (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
            isActive ? 'bg-gray-900 text-info' : 'text-gray-300 hover:bg-gray-700 hover:text-primary',
            'block rounded-md px-3 py-2 text-base font-medium',
          )}
        >
          {item.name}
        </Link>
      );
})}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}