import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import './navbar.style.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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
						<button className='dark-mode-btn'>
							<img
								src={sun}
								alt='Light mode'
								className='dark-mode-btn__icon'
							></img>
							<img
								src={moon}
								alt='Dark mode'
								className='dark-mode-btn__icon'
							></img>
						</button>
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
