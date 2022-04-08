import React, { Component } from 'react';
import profil from "./profil.jpg"
import avatar from "./avatar.png"
import Lifecycle from './lifecycle';
class Profil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Tarek Touati",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            profession: "Web developer",
            btn: "Click me",
            imageUrl: profil
        }
    }
    Buttonchange = () => {
        this.setState({
    
            imageUrl: avatar
        })
    }
    state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
    render() {
        const isActive = this.state.isActive;
        return (
            <div  className='content-profil'>
                <Lifecycle/>
                <img onClick={this.Buttonchange} src={this.state.imageUrl} alt=''/>
                <div className={isActive ? "hide" : null} >
                <h1>{this.state.message}</h1>
                <h2>{this.state.profession}</h2>
                <p>{this.state.bio}</p>
                </div>
                <button onClick={this.handleToggle}>{this.state.btn}</button>
            </div>
        );
    }
}

export default Profil;
