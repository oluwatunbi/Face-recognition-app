import React from 'react';
import './imageform.css';



const Imageform = ({onInputChange, on_Submit} ) => {
	return(

		<div>
		  <p className = 'f3'>
		    {'This magic brain will detect faces on your pictures .Get to try it out'}
		  </p>

		  <div className ='center'>
		    <div className ='center form pa4 br3 shadow-5'>
		        <input className ='f4 pa2 w-70 centre' type = 'tex' onChange = {onInputChange} />
		        <button className ='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick ={on_Submit} > Detect</button>
		    </div>
		  	
		  </div>


		</div>

		);

}


export default Imageform;