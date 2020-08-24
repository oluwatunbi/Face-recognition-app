import React from 'react';



const Navigation = ({Onroutechange, Issignedin}) => {

		if (Issignedin){
			return(
		<nav  style = {{display:'flex' , justifycontent: 'flex-end'}}>
		  <p onClick ={ () => Onroutechange('signin') } className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>)
		} else {
			return (
			    <nav  style = {{display:'flex' , justifycontent: 'flex-end'}}>
		            <p onClick ={ () => Onroutechange('signin') } className = 'f3 link dim black underline pa3 pointer'>Sign in</p>
		            <p onClick ={ () => Onroutechange('Register') } className = 'f3 link dim black underline pa3 pointer'>Register</p>
		        </nav>

				)
		}



	

}


export default Navigation;
 