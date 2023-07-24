import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './navbar.style.css'
import DarkButton from '../darkButton/DarkButton'

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	// Get the current location using the useLocation hook
	const location = useLocation()

	// Scroll to the top of the page when the location changes
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<>
			<nav className='nav'>
				<div className='container'>
					<div className='nav-row'>
						<NavLink to='/' className='logo'>
							<strong>Frontend</strong> portfolio
						</NavLink>
						<DarkButton/>
						<ul className='nav-list'>
							<li className='nav-list__item'>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Home
								</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink
									to='/projects'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Projects
								</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink
									to='/contacts'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Contacts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
