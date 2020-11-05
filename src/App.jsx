import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Icon} from "semantic-ui-react";
import AOS from "aos";
import "aos/dist/aos.css";

import './styles/main.scss';
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/main/Home"
import Navbar from "./components/navigation/Navbar";
import {AuthProvider} from "./context/authContext";
import AuthenticatedRoute from "./util/AuthenticatedRoute";
import PostPage from "./components/posts/PostPage";
import MyPosts from "./components/posts/MyPosts";
import PrivateRoute from "./util/PrivateRoute"
import NotFound from "./util/NotFound";

const App = () => {
  AOS.init();
  return (
    <AuthProvider>
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>
    <Switch>
    <Route exact path="/" component={Home}/>
    <AuthenticatedRoute exact path="/login" component={Login}/>
    <AuthenticatedRoute exact path="/register" component={Register}/>
    <Route exact path="/posts/:postId" component={PostPage}/>
    <PrivateRoute exact path="/myPosts" component={MyPosts}/>
    <Route path="*" component={NotFound}/>
    </Switch>
    <footer>
      <div className="socialIconsWrapper">
                <a className="socialIcons" href="https://github.com/Aslanchik/weathr" rel="noreferrer" target="_blank"><Icon name="github"/></a>
                <a className="socialIcons" href="https://www.linkedin.com/in/aslan-badalov" rel="noreferrer" target="_blank"><Icon name="linkedin"/></a>
                </div>
    </footer>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
