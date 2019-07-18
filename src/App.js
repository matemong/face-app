import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles:{
    number:{
      value: 100,
      density:{
        enable: true,
        value_area: 600
      }
    },
    color:{
      value: "#000000"
    },
    shape:{
      type: "circle"
    },
    size:{
      value: 1,
      random: true
    },
    line_linked:{
                       
      color: "#000448",
      width: 2,
      opacity: 0.4
    }
  }
}

class App extends Component{
 render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
