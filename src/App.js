import React from 'react';
import './styles/header.css';
import Home from './components/Home/Home.js';
import Bollywood from './components/Bollywood/Bollywood.js';
import Technology from './components/Technology/Technology.js';
import Hollywood from './components/Hollywood/Hollywood.js';
import Fitness from './components/Fitness/Fitness.js';
import Article from './components/Article/Article.js';
import Pagenotfound from './components/Pagenotfound/Pagenotfound.js';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Food from './components/Food/Food.js';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/bollywood" component={Bollywood} />
    <Route exact path="/bollywood/:blogTopic" component={Article} />
    <Route exact path="/technology" component={Technology} />
    <Route exact path="/technology/:blogTopic" component={Article} />
    <Route exact path="/hollywood" component={Hollywood} />
    <Route exact path="/hollywood/:blogTopic" component={Article} />
    <Route exact path="/fitness" component={Fitness} />
    <Route exact path="/fitness/:blogTopic" component={Article} />
    <Route exact path="/food" component={Food} />
    <Route exact path="/food/:blogTopic" component={Article} />
    <Route exact path="/" component={Home} />
    <Route exact component={Pagenotfound}/>
    </Switch>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;