import React from 'react'

const Contacts = () => {
	return (
		<>
			<main className='section'>
				<div className='container'>
					<h1 className='title-1'>Contacts</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Warsaw, Poland</p>
						</li>
						<li className='content-list__item'>
							<div className='title-2'>
								<a className='social' href='https://t.me/andrewharden'>
									Telegram
								</a>
								&nbsp;/&nbsp;
								<a className='social' href='https://wa.me/48532494984'>
									WhatsApp
								</a>
							</div>
							<p>
								<a href='tel:+48532494984'>+48 532 494 984</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='andreiverkienko1095@gmail.com'>
									andreiverkienko1095@gmail.com
								</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Contacts
