import React, {Component} from 'react';
import sendAnythingPost from '../../services/post';
import showMessages from '../../services/messages';
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

    constructor(props){
        super(props);
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

        // UPLOAD TEXT AND FILE FOR BANNERS
        const dataForm = new FormData(e.target);
        const dataSend = new FormData();

        for (let entry of dataForm.entries()) {
            dataSend.append(entry[0], entry[1]);
        }

        // SEND TO ANOTHER CONTENT TO EXECUTE THE POST
        const puttinInfo = new sendAnythingPost();
        const resPromise = puttinInfo.sendingData(dataSend,'/admin/post/banner');

        resPromise
            .then((res)=>{
                // RESET FORM
                document.querySelector("form").reset();
                document.querySelector(".remove-img").click()

                this.submitingFormLoading();
                const showMessage = new showMessages("success", "Successfully Saved.");
                showMessage.showMessage();
            }).catch((err)=>{
                alert("Aconteceu algum erro.");
                this.submitingFormLoading();
                const showMessage = new showMessages("error", "Error! Try again.");
                showMessage.showMessage();
            });
    }
    
    disableOverlay = (e) => {
        e.preventDefault();
        let overlay = !this.state.loadingOverlay;
        this.setState({loadingOverlay: overlay});

        // CLOSE PROPS
        this.closeOverlayByPropsParent(this);
    }

    closeOverlayByPropsParent(e){
        e.props.callForOverlayAddNewRemove(this);
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
                            <a href="#" onClick={this.disableOverlay.bind(this)}>
                                <FontAwesomeIcon icon={faWindowClose} />    
                            </a>
                        </div>
                        <div className="inner-rest-content">
                            <form onSubmit={this.submitForm} action="#" method="POST" encType="multipart/form-data">
                                <InputFile resetInput={this.disableSubmit} nameText="banner" nameInput="image_path"/>
                                <InputText placeholderInput="Title" nameInput="title"/>
                                <InputText placeholderInput="Brief Description" nameInput="description"/>
                                <InputText placeholderInput="Link" nameInput="link"/>
                                <InputCheckboxTrueFalse textInput="Active" nameInput="active"/>
                                <div className="md-inter div-inputs submit-loading">
                                    {disableSubmit === true ? <span id="loading-item"><FontAwesomeIcon className="fa fa-spin" icon={faSyncAlt} /></span> : ""}
                                    <input disabled={disableSubmit === true} type="submit" value={disableSubmit === true ? "Sending": "Send"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}