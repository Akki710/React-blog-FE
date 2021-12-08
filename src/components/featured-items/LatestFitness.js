import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { withRouter } from 'react-router';

//importing Actions
import { blogContentAction } from '../../redux/actions/blogContentAction';
import { suggestAction } from '../../redux/actions/suggestAction';


//importing styles
import "../../styles/latestFitness.scss";




const LatestFitness = ({history}) => {
    const pageData=useSelector(state=>state.fitnessLeft.pageLeftData);
    const dispatch=useDispatch();
    return (
        <div className="latest-fitness">
            <h2>Latest Fitness</h2>
            <hr className="head-hr" />
            <hr className="row-hr" />
            <div className="fitness-items">
                {
                    pageData
                    .filter(data => data.item < 4)
                    .map((data, index) => (
                        <div
                         key={index} 
                         className="fitness-item"
                         onClick={() => {
                            dispatch(suggestAction(pageData));
                            dispatch(blogContentAction(data));
                            history.push(`/fitness/${data.title}`);
                         }}
                        >
                            <div>
                            <h2 className="title">{data.title}</h2>
                            <p className="para">{data.paraOne}</p>
                            <p className="category">{data.category} <span className="date">{data.date}</span></p>
                            </div>
                            {
                                data.item < 3 ?
                                <hr className="vertical-hr" /> : null
                            }
                        </div>
                    ))
                }
            </div>
            <hr className="row-hr2" />
            <p
                    onClick={() => history.push("/fitness")}
                    style={{
                         marginTop: "35px", 
                         cursor: "pointer",
                         color: "#868686",
                         width: "130px"
                        }}
                    >VIEW MORE <i
                     className="fas fa-arrow-right"
                     style={{
                         marginRight: "10px", 
                         color: "#d44c4c", 
                         fontSize: "20px"
                        }}
                ></i></p>
        </div>
    );
};



export default withRouter(LatestFitness);