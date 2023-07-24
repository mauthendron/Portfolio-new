import React from 'react';
import facebook from '../../img/icons/facebook.svg'
import instagram from '../../img/icons/instagram.svg'
import twitter from '../../img/icons/twitter.svg'
import gitHub from '../../img/icons/gitHub.svg'
import linkedIn from '../../img/icons/linkedIn.svg'
import './footer.style.css'

const Footer = () => {
	return (
		<div>
			<footer className='footer'>
				<div className='container'>
					<div className='footer__wrapper'>
						<ul className='social'>
							<li className='social__item'>
								<a href='https://www.facebook.com/andrey.verkienko/'>
									<img
										src={facebook}
										alt='Link'
									></img>
								</a>
							</li>
							<li className='social__item'>
								<a href='https://www.instagram.com/andrewverkienko/'>
									<img
										src={instagram}
										alt='Link'
									></img>
								</a>
							</li>
							<li className='social__item'>
								<a href='https://twitter.com/hypermauth'>
									<img
										src={twitter}
										alt='Link'
									></img>
								</a>
							</li>
							<li className='social__item'>
								<a href='https://github.com/mauthendron'>
									<img
										src={gitHub}
										alt='Link'
									></img>
								</a>
							</li>
							<li className='social__item'>
								<a href='https://www.linkedin.com/in/andrii-verkiienko-200477178/'>
									<img
										src={linkedIn}
										alt='Link'
									></img>
								</a>
							</li>
						</ul>
						<div className='copyright'>
							<p>© 2023 frontend-dev.com</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
