import React,{Component} from "react";
import  "./Color.css";

class Color extends Component {
    constructor(props) {
        super(props);
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }
 
    handleChangeColor() {
        this.props.changeColor(this.props.color, this.props.value);
    }
 
    render() {
        return (
            <div className='color' style={{backgroundColor: this.props.color}}
            onClick={this.handleChangeColor}></div>);
        
    }
}
export default Color;
