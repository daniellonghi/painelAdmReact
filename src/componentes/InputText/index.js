import React, {Component} from 'react';

export default class InputText extends Component{
    render(){
        return(
            <div className="div-inputs md-mid">
                <input type="text" name={this.props.nameInput} placeholder={this.props.placeholderInput}/>
            </div>
        );
    }
}