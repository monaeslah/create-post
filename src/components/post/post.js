import React, {Component} from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlineLike} from "react-icons/ai";
import {
    FaSmile,
    FaImages,
    FaRegCommentAlt,
    FaRegSmile,
    FaRegSmileBeam,
    FaRegSmileWink,
    FaRegSadCry,
    FaRegAngry
} from "react-icons/fa";
import {BsForward} from "react-icons/bs";
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import fifa from 'images/download.png';
import {Collapse} from "reactstrap";

class Post extends Component {
    state = {
        dropdownOpen: false,
        list:[],

    }


    render() {
        const {item} = this.props;
        return (
            <>
                <div className="box-new-post p-3 text-right mt-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ">
                            <span className="name">FIFA</span>
                            <span className="d-flex flex-column pr-2">
                               <div className="font-weight-bold">FIFA</div>
                               <div className="text-secondary font-size-09"> 26 شهریور ساعت 16:04 </div>
                           </span>
                        </div>
                        <button>
                            <BsThreeDotsVertical/>
                        </button>
                    </div>
                    <p className="my-2 text-post">
                        {item?.title}
                    </p>
                    {
                        item?.img ?
                            <div className="image-post" style={{backgroundImage: `url("${(item?.img)}")`}}/>
                            :
                            ''
                    }

                    <div className="bgColorGray py-2 px-2">
                        <p className="text-gray font-size-09  text-left">fifa.com</p>
                        <p className="font-weight-bold">
                            {item?.title}
                            </p>

                    </div>
                    {this.state.list.length>0 &&
                        <div className="d-flex py-2">
                        <div>
                            {
                                this.state.list.map((item)=><button className="text-orange">{item.component}</button>)
                            }
                        </div>
                        <span>{this.state.list.length}</span>
                    </div>}
                    <div className="suggestion d-flex justify-content-between px-4">

                        <Dropdown isOpen={this.state.dropdownOpen}
                                  toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                            <DropdownToggle className="bg-transparent border-0 text-color">
                                <button >
                                    <span><AiOutlineLike/></span>
                                    <span>پسند</span>
                                </button>
                            </DropdownToggle>
                            <DropdownMenu>
                                <div>
                                    {
                                        list.map((item)=>
                                            <button className="text-orange" onClick={()=>{
                                                if(this.state.list.length>0){
                                                    if((
                                                        ! this.state.list.some(t=>t?.id == item?.id))){
                                                        this.setState({
                                                            list:[...this.state.list,
                                                                item]
                                                        })
                                                    }
                                                }else {
                                                    this.setState({
                                                        list:[...this.state.list,
                                                            item]
                                                    })
                                                }

                                              }}>{item.component}</button>)
                                    }

                                </div>
                            </DropdownMenu>
                        </Dropdown>
                        <button>
                            <span><FaRegCommentAlt/></span>
                            <span>نظر</span>
                        </button>
                        <button>
                            <span><BsForward/></span>
                            <span>اشتراک گذاری</span>
                        </button>
                    </div>

                </div>
            </>
        );
    }
}

export default Post;
let list=[
    {component:<FaRegSmileBeam/>,id:1},
    {component:<FaRegSmile/>,id:2},
    {component:<FaRegSmileWink/>,id:3},
    {component:<FaRegSadCry/>,id:4},
    {component:<FaRegAngry/>,id:5},
    {component:<AiOutlineLike/>,id:6},
]
