import React, {Component} from 'react';

import './styles.css';

export default class InputFile extends Component{
    state = {
        hasImage: false,
        nameImage: "",
        dropOver: false
    }

    handleFileSelect = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        this.changeDropOver(false);

        var files = evt.dataTransfer.files;

        for (var i = 0, f; f = files[i]; i++) {
            let nameImage = escape(f.name);
            if(f.type.indexOf("image") != -1){
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

    clearImageState = () => {
        this.changeImageState(false);
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
                        <a href="#" onClick={this.clearImageState} className="remove-img">
                            Remove
                        </a>
                        <img id="preview-image" alt={nameImage}/>
                    </div>
                    }

                    {hasImage === false &&
                    <div id="drag-and-drop-zone" 
                        onDrop={this.handleFileSelect} 
                        onDragLeave={this.handleLeave} 
                        onDragOver={this.handleOver}>
                        {dropOver === true ? "Release the file." : `Drop a ${this.props.nameText} here`}
                    </div>
                    }
                </div>
            </div>
        );
    }
}