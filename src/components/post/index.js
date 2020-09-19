import React, {Component} from 'react';
import NewPost from "components/post/newPost";
import Post from "components/post/post";
import {connect} from "react-redux";

class Index extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row my-5 justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <NewPost/>
                            {
                                this.props.infoListPost.map(item=><Post item={item}/>)
                            }


                        </div>
                    </div>

                </div>

            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (store) => {
    return ({
        infoListPost: store.infoListPost

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
