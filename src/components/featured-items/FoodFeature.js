import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { withRouter } from 'react-router';


//importing Actions
import { blogContentAction } from '../../redux/actions/blogContentAction';
import { suggestAction } from '../../redux/actions/suggestAction';


//importing styles
import "../../styles/foodFeature.scss";



const FoodFeature = ({history}) => {
    const pageData = useSelector(state => state.foodLeft.pageLeftData);
    const dispatch = useDispatch();
    return (
        <div className="food-feature">
        {
            pageData.filter(data => data.item<2).map((data, index) => (
                <div
                key={index}
                className="food-image"
                style={{
                    backgroundImage: `url(${data.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    WebkitBackgroundSize: "cover"
                }}
                onClick={() => {
                    dispatch(suggestAction(pageData));
                    dispatch(blogContentAction(data));
                    history.push(`/food/${data.title}`)
                }}
                >
                <h2 className="bg-text">{data.title}</h2>
                <p className="bg-text">{data.category}{ data.date}</p>
            </div>
            ))
        }
            <div className="delicious-food">
                <h2>Delicious Food</h2>
                <hr className="delicious-food-hr" />
                <div className="delicious-contents">
                    {
                        pageData
                        .filter(data => data.item>1 && data.item < 5)
                        .map((data, index) => (
                            <div
                             key={index}
                             onClick={() => {
                                dispatch(suggestAction(pageData));
                                dispatch(blogContentAction(data));
                                history.push(`/food/${data.title}`)
                             }}
                            >
                            <div className={"delicious-content " + (data.item === 2 ? "top-down": "sideways")}>
                                {
                                    data.item === 2 ?
                                    <img
                                     src={data.imageUrl}
                                     alt="delicious"
                                     style={{width: "350px", height: "220px"}}
                                    /> :
                                    <img
                                     src={data.imageUrl}
                                     alt="delicious"
                                     style={{width: "150px", height: "150px"}}
                                    />
                                }
                                <div className="delicous-text">
                                    <div className="text">
                                        <h2 className="text-head">{data.title}</h2>
                                        <p className="text-para">{data.category}<span className="date"> {data.date}</span></p>
                                    </div>
                                    <p className="number">{data.item-1}</p>
                                </div>
                            </div>
                            {
                                data.item !== 5 ?
                                <hr className="food-hr" /> : null 
                            }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

    
   


export default withRouter(FoodFeature);