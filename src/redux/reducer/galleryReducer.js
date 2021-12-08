const initState={
    imageBig:"https://images.saymedia-content.com/.image/t_share/MTgyNTU3NTMwNDI0MDkyMDA5/ranking-the-conjuring-universe-1-7.jpg",
    imageDuo:[
        {
            imageUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--D8ScgYZE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jxx4zedqe3hkoysugr5j.jpg",
            id:"123456",
            title:"Learn about technologies",
            category:"Technology",
            date:"/ August 21 2021"
        },
        {
            imageUrl:"https://travelforfoodhub.com/wp-content/uploads/2018/10/Rajasthani-restaurants-in-Udaipur.jpg",
            id:"654321",
            title:"Explore healthy and Delicious Food",
            category:"Food",
            date:"/ August 25 2021"
        }
    ]
}

const  galleryReducer=(state=initState,action)=>{
    return state;
}

export default galleryReducer;