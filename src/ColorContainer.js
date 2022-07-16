import React,{Component} from "react";
import Color from "./Color";
import  "./ColorContainer.css";
class ColorContainer extends Component {
   static defaultProps = {
     numBoxes: 18,
     allColors: ["purple", "magenta", "violet", "pink","green","yellow"],
     index:0
    };

  
  render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(
        () => (<Color key={this.props.index + 1} colors= {this.props.allColors} />
    ));

    return <div className='BoxContainer'>{boxes}</div>;
    
  }


}

export default ColorContainer;
