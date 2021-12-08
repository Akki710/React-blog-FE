//imports
import React,{useEffect} from 'react';
import {useDispatch } from 'react-redux';
import axios from 'axios';



//Importing components
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import GalleryCarousel from '../Gallery/GalleryCarousel';
import HomeTech from '../featured-items/HomeTech';
import LatestHollywood from '../featured-items/LatestHollywood';
import FoodFeature from '../featured-items/FoodFeature';
import LatestFitness from '../featured-items/LatestFitness';


//import APi calls
import {apiCallAction } from '../../redux/actions/apiCallAction';
import {techApiCallAction} from '../../redux/actions/techApiCallAction';
import {hollywoodApiCallAction} from '../../redux/actions/hollywoodApiCallAction';
import {fitnessApiCallAction} from '../../redux/actions/fitnessApiCallAction';
import {foodApiCallAction} from '../../redux/actions/foodApiCallAction';




const Home = () => {
    const dispatch= useDispatch();

    useEffect(()=>{
        //Bollywood api Call
        axios.get("https://sirenblog-backend.herokuapp.com/api/bollywood")
        .then(resp=>{
            dispatch(apiCallAction(resp.data));
        })
        .catch(err=>console.log(err))
        
        //Technology api Call
        axios.get("https://sirenblog-backend.herokuapp.com/api/technology")
        .then(resp=>{
            dispatch(techApiCallAction(resp.data));
        })
        .catch(err=>console.log(err))

        //Hollywood api Call
        axios.get("https://sirenblog-backend.herokuapp.com/api/hollywood")
        .then(resp=>{
            dispatch(hollywoodApiCallAction(resp.data));
        })
        .catch(err=>console.log(err))

        //Fitness api Call
        axios.get("https://sirenblog-backend.herokuapp.com/api/fitness")
        .then(resp=>{
            dispatch(fitnessApiCallAction(resp.data));
        })
        .catch(err=>console.log(err))

        //Food api Call
        axios.get("https://sirenblog-backend.herokuapp.com/api/food")
        .then(resp=>{
            dispatch(foodApiCallAction(resp.data));
        })
        .catch(err=>console.log(err))

    },[])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
           <Header />
           <Gallery />
           <GalleryCarousel />
           <HomeTech />
           <LatestHollywood />
           <FoodFeature />
           <LatestFitness />
        </div>
    )
}

export default Home;