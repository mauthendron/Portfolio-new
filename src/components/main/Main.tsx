import React from 'react';

const Main = () => {
	return (
		<div>
			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Redux, HTML,
								CSS, NPM, BootStrap, MaterialUI, Yarn,
								TailwindCSS, StyledComponents, Git
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Backend</h2>
							<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Main;
