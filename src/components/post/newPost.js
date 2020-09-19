import React, {Component} from 'react';
import {FaSmile, FaImages, FaRegSmile, FaRegSmileBeam, FaRegSmileWink, FaRegSadCry, FaRegAngry} from "react-icons/fa";
import {Collapse} from 'reactstrap';
import {connect} from 'react-redux';
import {listPost} from 'redux/pages/action.js'
import fifa from "../../images/download.png";

class NewPost extends Component {
    state = {
        modal: false,
        title:'',
        showFile:'',
        file:''
    };
    sendPic = (e) => {

        this.setState({
            file: e.target.files[0],
            showFile: URL.createObjectURL(e.target.files[0])
        });
    };
    render() {
        return (
            <>
                <div className="box-new-post p-3 text-right">
                    <p className="title p-2">
                        ایجاد پست
                    </p>
                    <div className="d-flex justify-content-between p-3">
                        <div className="icon-smile"><FaSmile/></div>
                        <div className="flex-grow-1 pt-2 pr-4">
                            <textarea className="input-style" name="" id="" cols="30" rows="10"
                                      value={this.state.title}
                                      onChange={(e)=>this.setState({title:e.target.value})}
                                      placeholder="در ذهنت چه می گذرد؟"/>
                            {
                                this.state.showFile ?
                                    <div className="image-post" style={{backgroundImage: `url("${this.state.showFile}")`}}/>
                                    :
                                    ""
                            }

                        </div>
                    </div>

                    <div className="border-top-gray pt-2 d-flex align-items-center justify-content-between">
                            <span className="position-relative">
                                    <input type="file"
                                           onChange={this.sendPic}
                                           accept="image/png, image/jpeg"
                                           className="input-file"/>
                                    <button className="input-file-layer btn-icon">
                                           <span className="ml-2 icon"><FaImages/></span>
                                <span>عکس / ویدئو</span>
                                    </button>

                            </span>

                        <button onClick={() => this.setState({modal: !this.state.modal})}
                                className="btn-icon mr-4">
                            <span className="ml-2 icon"><FaRegSmile/></span>
                            <span>برچسب گذاری...</span>
                        </button>
                        <button className="btn-submit px-3 py-2"
                                style={{cursor:this.state.title ? 'pointer' :'not-allowed'}}
                                disabled={!this.state.title}
                                onClick={() => {
                                    if(this.state.title){
                                        this.props.listPost({title:this.state.title,img:this.state.showFile});
                                        this.setState({showFile:'',title:''})
                                    }
                                }}>ارسال
                        </button>
                    </div>

                    <Collapse isOpen={this.state.modal}>
                        <button><FaRegSmileBeam/></button>
                        <button><FaRegSmile/></button>
                        <button><FaRegSmileWink/></button>
                        <button><FaRegSadCry/></button>
                        <button><FaRegAngry/></button>
                    </Collapse>
                </div>

            </>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        listPost: (...data) => dispatch(listPost(...data)),
    }
};

const mapStateToProps = (store) => {
    return ({
        infoListPost: store.infoListPost

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
