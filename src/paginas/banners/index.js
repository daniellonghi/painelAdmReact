import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSyncAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../list-itens.css';
import DataBanners from '../../data/banners.json';
import BannerOverlay from './bannerOverlay';

export default class Banners extends Component{
    state = {
        banners: [],
        bannersInfo:[],
        page: 1,
        loading: false,
        showAddEdit: false
    }

    componentDidMount(){
        this.loadBanners();
    }

    loadBanners = async (page = 1) => {
        // CODE FOR AXIOS GET

        // Getting banners variable and rest of the content;
        const {banners: data, ...bannersRest} = DataBanners;
        this.setState({banners:data, bannersInfo: bannersRest});
    }

    updateBanner(){
        alert("asd");
    }

    deleteBanner(key){
        this.loadingWait(true);

        const {banners} = this.state;
        const updatedBanners = banners.filter(item => item.idbanner != key);
        setTimeout(() => {
            this.setState({banners:updatedBanners});
            this.loadingWait(false);
        },1000);
    }

    loadingWait(enableDisable){
        this.setState({loading: enableDisable});
    }

    prevPage = () => {
        this.loadingWait(true);

        let {page} = this.state;
        page = page - 1;
        setTimeout(() => {
            this.setState({page});
            // here we should page inner Banners state variable, but there's no real banners array for page.
            // this.loadBanners(page);
            this.loadingWait(false);
        },1000);
    }

    nextPage = () => {
        this.loadingWait(true);

        let {page} = this.state;
        page = page + 1;
        setTimeout(() => {
            this.setState({page});
            // here we should page inner Banners state variable, but there's no real banners array for page.
            // this.loadBanners(page);
            this.loadingWait(false);
        }, 1000);
    }

    addNew = () => {
        setTimeout(() => {
            let showAddEdit = !this.state.showAddEdit;
            this.setState({showAddEdit});
        }, 50);
    }

    render(){
        const {showAddEdit, loading, banners, page, bannersInfo} = this.state;
        return (
            <div className="bem-vindo">
                {/* CALL FOR NEW COMPONENT TO ADD AS OVERLAY */}
                {showAddEdit === true &&
                    <BannerOverlay closeBannerOverlay={this.addNew.bind(this)}/>
                }
                <a href="#" onClick={this.addNew} className="add-new">
                    Add New
                    <FontAwesomeIcon icon={faPlusCircle} />
                </a>

                {/* LOADING CONTENT AREA */}
                {loading === true ? <span id="loading-item"><FontAwesomeIcon className="fa fa-spin" icon={faSyncAlt} /></span> : ""}

                {/* IF HAS INFORMATION */}
                <ul className="list">
                    { banners.length > 0 &&                   
                        banners.map(item => (
                            <li key={item.idbanner} className="each">
                                <div className="each-img">
                                    <img src={item.image_path} alt={item.title}/>
                                </div>
                                <div className="each-info">
                                    <div className="titulo"><i>Title</i>: {item.title}</div>
                                    <div className="desc"><i>Description</i>: {item.description.length >= 20 ? item.description.substring(0,17) + "..." : item.description}</div>
                                    <div className="link"><i>Link</i>: <a href={item.link} target="_blank">{item.link.length >= 23 ? item.link.substring(0,22) + "..." : item.link}</a></div>
                                    <div className="ativo"><i>Active</i>: {item.active == true ? "Enable" : "Disable"}</div>
                                </div>
                                <div className="button-controls">
                                    <a href="#" onClick={() => this.updateBanner(item.idbanner)} className="button-alter" alt="Alterar">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </a>
                                    <a href="#" onClick={() => this.deleteBanner(item.idbanner)} className="button-delete"alt="Deletar">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </a>
                                </div>
                            </li>
                        ))
                    }

                    {/* IF HAS NO INFORMATION */}
                    {banners.length == 0 &&
                        <h1>There's nothing to show.</h1>
                    }
                </ul>

                <div className="btn-action">
                    <div className="controllers-pagination">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <span>Page {page} of {bannersInfo.pages}</span>
                        <button disabled={page === bannersInfo.pages} onClick={this.nextPage}>Próxima</button>
                    </div>
                </div>
            </div>
        );
    }
};