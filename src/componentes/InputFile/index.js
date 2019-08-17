import React, {Component} from 'react';

import './styles.css';

export default class InputFile extends Component{
    state = {
        hasImage: false,
        nameImage: "",
        dropOver: false
    }

    constructor(props){
        super(props);
    }

    handleFileSelect = (e) => {
        this.changeDropOver(false);

        var files = e;

        for (var i = 0, f; f = files[i]; i++) {
            let nameImage = escape(f.name);
            if(f.type.indexOf("image") !== -1){
                var reader = new FileReader();
                reader.onload = function() {
                    document.getElementById("preview-image").src = reader.result;
                }
                this.changeImageState(true);
                this.setState({nameImage});
                reader.readAsDataURL(f);
            }else{
                alert("It's not an image.");
            }
        }
    }
    
    handleOver = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
        this.changeDropOver(true);
    }

    handleLeave = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        this.changeDropOver(false);
    }

    clearImageState = (e) => {
        e.preventDefault();
        this.changeImageState(false);
        document.getElementById("image_path").value = null;
    }

    changeImageState(hasImage = false){
        this.setState({hasImage});
    }

    changeDropOver(change = false){
        this.setState({dropOver: change});
    }

    render(){
        const {dropOver, hasImage, nameImage} = this.state;
        return(
            <div className="md-inter div-inputs input-item-file">
                <div className="drag-and-drop-outter">
                    {hasImage === true &&
                    <div className="inner-banner-close">
                        <a href="#" onClick={this.clearImageState.bind(this)} className="remove-img">
                            Remove
                        </a>
                        <img id="preview-image" alt={nameImage}/>
                    </div>
                    }

                    {hasImage === false &&
                    <div id="drag-and-drop-zone">
                        {dropOver === true ? "Release the file." : `Drop a ${this.props.nameText} here`}
                    </div>
                    }
                    <input type="file" 
                        onDragLeave={this.handleLeave}
                        onDragOver={this.handleOver} 
                        onDrop={(e) => this.handleFileSelect(e.target.files)}
                        onChange={(e) => this.handleFileSelect(e.target.files)}
                        required id={this.props.nameInput} name={this.props.nameInput}></input>
                </div>
            </div>
        );
    }
}