import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const menuItems = {
	names: ['Home', 'About', 'Contact'],
	redirection: ['/', '/', '/']
}

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	const handleNavbar = () => {
		setNavbarOpen(prevData => !prevData)
	}
	console.log(menuItems,'mi')
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
			<nav className='bg-blue-700'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
							<div className='flex items-center justify-between h-16'>
									<div className='flex items-center'>
											<div className='flex-shrink-0'>
												<Link href='/' className='text-white'>
													Logo
												</Link>
											</div>
									</div>
									<div className='hidden md:block'>
										<NavItemsDesktop />
									</div>
									<div className='md:hidden flex items-center'>
										<button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:ring-2 focus:ring-inset focus:ring-white'
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
		<Link key={index} href={menuItems?.redirection[index]} className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
			{item}
		</Link>
	))
	return <div className='ml-4 flex items-center space-x-4'>
		{commonData}
	</div>
}

const NavItemsMobile = () => {
	const commonData = menuItems?.names?.map((item, index) => (
		<Link key={index} href={menuItems?.redirection[index]} className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
			{item}
		</Link>
	))
	return <div className='md:hidden'>
		<div className='px-2 pt-3 pb-3 space-y-2 sm:px-3'>
			{commonData}
		</div>
	</div>
}