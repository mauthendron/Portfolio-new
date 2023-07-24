import React from 'react'
import './header.style.css'

const Header = () => {
	return (
		<div>
			<header className='header'>
				<div className='header__wrapper'>
					<h1 className='header__title'>
						<strong>
							Hi, my name is <em>Andrii</em>
						</strong>
						<br />a frontend developer
					</h1>
					<div className='header__text'>
						<p>with passion for learning and creating.</p>
					</div>
					<a
						href='https://www.dropbox.com/scl/fi/o57z6yhortjp2kw8kfodq/CV-2023-Andrii-Verkiienko.pdf?rlkey=p60dikhli47z31ylkbb78jilk&dl=0'
						className='btn'
						target='_blank'
						rel='noreferrer'
						download='Andrii Verkiienko.pdf'
					>
						Download CV
					</a>
				</div>
			</header>
		</div>
	)
}

export default Header
