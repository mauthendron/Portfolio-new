import { useState, useEffect, useRef } from 'react'
import sun from './sun.svg'
import moon from './moon.svg'
import './darkButton.style.css'
import { detectDarkMode } from '../../utils/detectDarkMode'

const DarkButton = () => {
	const [darkMode, setDarkMode] = useState(detectDarkMode)
	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
			btnRef.current && btnRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			btnRef.current && btnRef.current.classList.remove('dark-mode-btn--active')
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	return (
		<>
			<button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
				<img src={sun} alt='Light mode' className='dark-mode-btn__icon'></img>
				<img src={moon} alt='Dark mode' className='dark-mode-btn__icon'></img>
			</button>
		</>
	)
}

export default DarkButton
