import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { withRouter } from 'react-router';

//importing Actions
import { blogContentAction } from '../../redux/actions/blogContentAction';
import { suggestAction } from '../../redux/actions/suggestAction';


//importing styles
import "../../styles/latestHollywood.scss";





const LatestHollywood = ({history}) => {
    const pageData = useSelector(state => state.hollywoodLeft.pageLeftData);
    const dispatch = useDispatch();
    return (
        <div className="latest-hollywood">
            <h2 className="latest-head">Latest Hollywood</h2>
            <hr className="latest-head-hr" />
            <div className="content">
                <div className="content-cards">
                    {
                        pageData
                        .filter(data => data.item<4)
                        .map((data, index) => (
                            <div key={index}>
                            <hr className="content-hr" />
                            <div 
                             onClick={() => {
                                dispatch(suggestAction(pageData));
                                dispatch(blogContentAction(data));
                                history.push(`${data.category}/${data.title}`)
                             }}
                             className="content-card"
                            >
                                <img
                                 className="content-img"
                                 src={data.imageUrl}
                                 alt="latest"
                                />
                                <div className="content-card-text">
                                    <h3>{data.title}</h3>
                                    <p className="latest-para">{data.shortPara}</p>
                                    <p className="date-cate">{data.category}<span className="latest-date"> {data.date}</span></p>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <div className="content-ads">
                    <p>Advertisement</p>
                </div>
            </div>
            <p
                    onClick={() => history.push("/hollywood")}
                    style={{
                         marginTop: "35px", 
                         cursor: "pointer",
                         color: "#868686",
                         width: "120px"
                        }}
                    ><i
                     className="fas fa-long-arrow-alt-down"
                     style={{
                         marginRight: "10px", 
                         color: "#d44c4c", 
                         fontSize: "20px"
                        }}
                ></i>LOAD MORE</p>
        </div>
    );
};


export default withRouter(LatestHollywood);