import React, {Component} from 'react';

export default class InputCheckboxTrueFalse extends Component{
    render(){
        return(
            <div className="div-inputs md-mid padding-30">
                <label htmlFor={this.props.nameInput}><i>{this.props.textInput}</i>: </label>
                <div className="inner-div-radiobutton">
                    <div className="radio-button">
                        <input type="radio" name={this.props.nameInput} required value="true"/>
                        <label htmlFor={this.props.nameInput}>Yes</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" name={this.props.nameInput} required value="false"/>
                        <label htmlFor={this.props.nameInput}>No</label>
                    </div>
                </div>
            </div>
        );
    }
}