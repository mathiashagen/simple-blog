import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NewBlog from "./pages/New Blog/NewBlog";
import { useDispatch } from 'react-redux';
import { setBlogPosts } from './components/Actions/dataActions';
import { blogPostList } from './blogPostList';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBlogPosts(blogPostList));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/details/:id" component={Detail} />
        <Route path="/new-blog" component={NewBlog} />
      </Switch>

    </div>
  );
}
