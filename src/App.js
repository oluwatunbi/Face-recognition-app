import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import Imageform from './components/Imageform/imageform';
import Signin from './components/Signin/signin';
import Register from './components/Register/register';
import Rank from './components/Rank/rank';
import Facerecognition from './components/Facerecognition/facerecognition';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
 apiKey: '4ef62a61848e4352bc828c7653704730'
});


const particleoption = {

       		particles: {
       			number :{
       				value:100,
       				density: {
       					enable:true,
       					value_area:800
       				}

     			}

     		}
       	}
            
 


class App extends Component {

	constructor() {

		super();
		this.state = {
			input: '',
			imageUrl: '',
      box: {},
      route:'',
      Issignedin: false,
		}
	}

  Calculatefacelocation = (data) =>{
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

     const image = document.getElementById('inputimage');
     const width = Number(image.width);
     const height = Number(image.height);
     
     return{

       leftcol: clarifaiFace.left_col * width,
       toprow:  clarifaiFace.top_row * height,
       rightcol: width - (clarifaiFace.right_col * width),
       bottomrow: height - (clarifaiFace.bottom_row * height)
     }

  }

  displayFacebox = (box) => {
    this.setState({box: box});

  }

 Onroutechange = (route) => {
   if(route === 'Home' ) {
     this.setState({Issignedin: true})
   } else {
     this.setState({Issignedin:false})
     
   }
   this.setState({route: route})
 }

	onInputChange = (event) => {
		this.setState ({input: event.target.value});
	}

	on_Submit = () =>{

		this.setState ({ imageUrl: this.state.input });
    console.log(this.state.imageUrl)
		app.models.predict(
		    Clarifai.FACE_DETECT_MODEL, 
			this.state.input)
		.then(response => this.displayFacebox(this.Calculatefacelocation(response)))
    .catch(err => console.log(err));

	};

	render() { 
  return (
    <div className="App">
               <Particles className ='particles'
                params={particleoption} 
                />


      <Navigation 
      Issignedin ={this.state.Issignedin}
      Onroutechange = {this.Onroutechange} />
      { this.state.route === 'Home'

       ?<div>
          <Logo /> 
          <Rank/>
          <Imageform  onInputChange = {this.onInputChange} 
                      on_Submit = {this.on_Submit}
                      />
        
        
           <Facerecognition box = {this.state.box} imageURL = {this.state.imageUrl} />
        </div>

        :(
          this.state.route === 'signin'
          ?<Signin Onroutechange = {this.Onroutechange} />
          :<Register Onroutechange = {this.Onroutechange} />

          )
    }

  
    </div>
  );
}};

// "https://samples.clarifai.com/face-det.jpg"
export default App;



