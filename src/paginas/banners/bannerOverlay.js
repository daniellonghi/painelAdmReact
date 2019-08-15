import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default class BannerOverlay extends Component{
    state = {
        loadingOverlay: false
    }
    
    componentDidMount(){
        setTimeout(() => {
            let overlay = !this.state.loadingOverlay;
            this.setState({loadingOverlay: overlay});
        },50);
    }
    
    disableOverlay = () => {
        let overlay = !this.state.loadingOverlay;
        this.setState({loadingOverlay: overlay});
    }

    render(){
        const { loadingOverlay } = this.state;
        return(
            <div className={`bannerOverlay${loadingOverlay ? " showWindow" : " offWindow"}`}>
                <div className="bg-overlay"></div>
                <div className="bem-vindo">
                    <div className="header-adding">
                        <h1>Adding New Banner</h1>
                        <a href="#" onClick={this.props.closeBannerOverlay}>
                            <FontAwesomeIcon icon={faWindowClose} />    
                        </a>
                    </div>
                    <div className="rest-content">

                    </div>
                </div>
            </div>
        );
    }
}