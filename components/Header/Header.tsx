'use client';
import React, { useEffect, useState } from 'react';
import UserIcon from '../Icons/UserIcon';
import SearchIcon from '../Icons/SearchIcon';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import { useCartState } from '@/Zustand/useCartState';
import Link from 'next/link';
import MobileNav from '../Icons/MobileNav';
import Logo from '../Icons/Logo';
import LogoMobile from '../Icons/LogoMobile';

export default function Header() {
	const { cartDisplayHandler, cart }: any = useCartState();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`bg-[#F5F0EB] w-full ${isScrolled ? 'fixed top-0 shadow-md' : ''} flex justify-around items-center h-[80px] z-10`}
		>
			{/* Logo & Mobile Nav */}
			<div className='flex gap-x-6'>
				<div className='md:hidden cursor-pointer flex items-center justify-center'>
					<MobileNav />
				</div>
				<Link
					href={'/'}
					className='md:text-xl md:block hidden cursor-pointer font-bold'
				>
					<Logo />
				</Link>
				<Link
					href={'/'}
					className='md:text-xl md:hidden cursor-pointer font-bold'
				>
					<LogoMobile />
				</Link>
			</div>
			{/* Menu */}
			<div className='gap-5 hidden md:flex'>
				<div className='cursor-pointer'>Home</div>
				<div className='cursor-pointer'>Men</div>
				<div className='cursor-pointer'>Women</div>
				<div className='cursor-pointer'>Exclusive</div>
				<div className='cursor-pointer'>Blog</div>
			</div>
			{/* Nav Icons */}
			<div className='flex gap-2'>
				<div className='cursor-pointer'>
					<SearchIcon />
				</div>
				<Link href={'/login'} className='cursor-pointer'>
					<UserIcon />
				</Link>
				<div
					className='cursor-pointer relative'
					onClick={cartDisplayHandler}
				>
					<ShoppingCartIcon />{' '}
					<span className='absolute flex justify-center items-center top-3 -right-3 bg-gray-950 text-white rounded-full p-3 h-[3px] w-[3px] sm:h-[18px] sm:w-[18px]'>
						{cart.length}
					</span>
				</div>
				{/* Nav Icon */}
			</div>
		</nav>
	);
}
