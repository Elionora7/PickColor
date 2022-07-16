import React,{Component} from "react";
import Color from "./Color";
import  "./ColorContainer.css";
import { choice } from "./helpers";

class ColorContainer extends Component {
   static defaultProps = {
     numBoxes: 18,
     colors: ["purple", "magenta", "violet", "pink","green","yellow"]
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: Array.from({length: this.props.numBoxes}, 
                () => choice(this.props.colors)) 
        }
        this.changeColor = this.changeColor.bind(this);
    }
 
    changeColor(currentColor, key) {
        let newColor;
        do {
            newColor = choice(this.props.colors);
 
        } while (currentColor === newColor)
 
        let newBoxes = [...this.state.boxes];
        newBoxes[key] = newColor;
 
        this.setState({ boxes: newBoxes});
    }
 
    render() {
        return (
            <div className='BoxContainer'>
                {
                    this.state.boxes.map((color, index) => {
                        return <Color color={color} key={index} value={index}
                                          changeColor={this.changeColor}/>
                    })
                }
            </div>
        )
    }
  


}

export default ColorContainer;
