import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

// IMPORT CONTENT OF BANNER
import InputFile from '../../componentes/InputFile';
import InputText from '../../componentes/InputText';
import InputCheckboxTrueFalse from '../../componentes/InputCheckboxTrueFalse';

export default class BannerOverlay extends Component{
    state = {
        loadingOverlay: false,
        disableSubmit: false
    }
    
    componentDidMount(){
        setTimeout(() => {
            let overlay = !this.state.loadingOverlay;
            this.setState({loadingOverlay: overlay});
        },50);
    }

    submitingFormLoading(){
        let TrueFalse = !this.state.disableSubmit;
        this.setState({disableSubmit: TrueFalse});
    }

    submitForm = (e) => {
        e.preventDefault();
        this.submitingFormLoading();

        // setTimeout(() => {
        //     this.submitingFormLoading();
        // },1000);
    }
    
    disableOverlay = () => {
        let overlay = !this.state.loadingOverlay;
        this.setState({loadingOverlay: overlay});
    }

    render(){
        const { loadingOverlay, disableSubmit } = this.state;
        return(
            <div className={`bannerOverlay${loadingOverlay ? " showWindow" : " offWindow"}`}>
                <div className="bg-overlay"></div>
                <div className="bem-vindo algin-center">
                    <div className="centering-div">
                        <div className="header-adding">
                            <h1>Adding New Banner</h1>
                            <a href="#" onClick={this.props.closeBannerOverlay}>
                                <FontAwesomeIcon icon={faWindowClose} />    
                            </a>
                        </div>
                        <div className="inner-rest-content">
                            <form action="#" mathod="POST" encType="multipart/form-data">
                                <InputFile nameText="banner" nameInput="image_path"/>
                                <InputText placeholderInput="Title" nameInput="title"/>
                                <InputText placeholderInput="Brief Description" nameInput="description"/>
                                <InputText placeholderInput="Link" nameInput="link"/>
                                <InputCheckboxTrueFalse textInput="Active" nameInput="active"/>
                                <div className="md-inter div-inputs submit-loading">
                                    {disableSubmit === true ? <span id="loading-item"><FontAwesomeIcon className="fa fa-spin" icon={faSyncAlt} /></span> : ""}
                                    <input onClick={this.submitForm} disabled={disableSubmit === true} type="submit" value={disableSubmit === true ? "Sending": "Send"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}