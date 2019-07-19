import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	
		if(isSignedIn){
			return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Sign Out</p>
				</nav>
			</article>
			)
		}
		else{
			return(
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
						<p onClick={() => onRouteChange('signedIn')} className='f3 link dim white underline pa3 pointer'>Sign In</p>
						<p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p>
					</nav>
				</article>
			)
		}
}

export default Navigation;