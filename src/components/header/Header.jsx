import React from 'react';
import './header.style.css';

const Header = () => {
	return (
		<div>
			<header class='header'>
				<div class='header__wrapper'>
					<h1 class='header__title'>
						<strong>
							Hi, my name is <em>Andrii</em>
						</strong>
						<br />a frontend developer
					</h1>
					<div class='header__text'>
						<p>with passion for learning and creating.</p>
					</div>
					<a href='#!' class='btn'>
						Download CV
					</a>
				</div>
			</header>
		</div>
	);
};

export default Header;
