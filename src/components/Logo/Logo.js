import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import nuclear from './Logo.png';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br4 shadow-2" options={{max:45}} style={{height: 250, width:250}}>
				<div className="Tilt-inner pa3" stlye={{paddingTop: '5px'}}>
					<img src={nuclear} alt="logo"/> 
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;