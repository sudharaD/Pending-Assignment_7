import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import coverPhoto from './coverPhoto.png';
import photo from './photo.jpg';


/*
const App = () => {
    return (
        <div>

            <p className="name">game</p>
        </div>
    );
}
*/
class App extends React.Component {
    render() {
      return (
        <div>
            <div className="navBar">
                <ul>
                    <div className="rightAlign">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#pages">Pages</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="contact">Contact Us</a></li>
                    </div>
                </ul>
            </div>

            <div className="check2">
            <div className="check1">
            <div className="coverPhoto">
                <img src={coverPhoto} alt="cover photo" width="100%"></img>
            </div>
            <div className="new1"></div>
            </div>
            <div className="new2">My Portfolio</div>
            <div className="new3"><div  class="button"><a>Explore More</a></div></div>
            </div>

            <div className="reduceOpasity"></div>
            <div className= "left">
                <div className="square1">
                <div className="photo1"><img src={photo} alt="photo"></img></div>
                </div>
                
            </div>
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));