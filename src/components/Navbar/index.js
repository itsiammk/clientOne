import React, { useState } from 'react';
import Link from 'next/link';
import style from './style.module.scss'

const menuItems = {
	names: ['Home', 'About Us', 'Services', 'Career', 'Projects', 'Contact Us'],
	redirection: ['/', '/', '/services', '/', '/', '/'],
	textColor: ['black', 'black', 'black', 'black', 'black', 'white'],
	hoverBg: ['blue-500', 'blue-500', 'blue-500', 'blue-500', 'blue-500', 'white'],
	bg: ['white', 'white', 'white', 'white', 'white', 'blue'],
	hoverTextColor: ['white', 'white', 'white', 'white', 'white', 'black']
}

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	const handleNavbar = () => {
		setNavbarOpen(prevData => !prevData)
	}
	const navbarMenuOpen = () => {
		return <svg  className="h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor" >
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M6 18L18 6M6 6l12 12"
				/>
		</svg>
	}

	const navbarMenuClosed = () => {
		return <svg className="h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h16m-7 6h7"
			/>
		</svg>
	}

  return (
    <>
			<nav className={`bg-white shadow-lg sticky top-0`}>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
							<div className='flex items-center justify-between h-16'>
									<div className='flex items-center'>
											<div className='flex-shrink-0'>
												<Link href='/' className='text-blue'>
													Logo
												</Link>
											</div>
									</div>
									<div className='hidden md:block'>
										<NavItemsDesktop />
									</div>
									<div className='md:hidden flex items-center'>
										<button className='inline-flex items-center justify-center p-2 rounded-md text-blue-800 md:text-blue-800 hover:text-blue-800 focus:ring-inset '
											onClick={handleNavbar}
										>
											{navbarOpen ? navbarMenuOpen() : navbarMenuClosed()}
										</button>
									</div>
							</div>
					</div>
					{navbarOpen && <NavItemsMobile />}
			</nav>
    </>
  );
};

export default Navbar;

const NavItemsDesktop = () => {
	const commonData = menuItems?.names?.map((item, index) => (
		<Link key={index} href={menuItems?.redirection[index]} className={`px-5 text-${menuItems?.textColor[index]} bg-${menuItems?.bg[index]}-500 hover:bg-${menuItems?.hoverBg[index]} hover:text-${menuItems?.hoverTextColor[index]} rounded-lg p-2`}>
			{item}
		</Link>
	))
	return <div className='ml-4 flex items-center space-x-4' >
		{commonData}
	</div>
}

const NavItemsMobile = () => {
	const commonData = menuItems?.names?.map((item, index) => (
		<Link key={index} href={menuItems?.redirection[index]} className='text-blue block hover:bg-blue-500 hover:text-white rounded-lg p-2'>
			{item}
		</Link>
	))
	return <div className='md:hidden'>
		<div className='px-2 pt-3 pb-3 space-y-2 sm:px-3'>
			{commonData}
		</div>
	</div>
}