import React,{Component} from "react";
import  "./Color.css";
import { choice } from "./helpers";

class Color extends Component {
   constructor(props){
    super(props);
    this.state = {color: choice(this.props.colors)  };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(){
     this.pickColor();
  }

  pickColor(){
    let newColor ;
    do {
        newColor = choice(this.props.colors)
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  render(){
    return (<div className='color' style={{backgroundColor: this.state.color}}
    onClick={this.onHandleClick}></div>);
  }
  

}

export default Color;