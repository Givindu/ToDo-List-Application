import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Postdetails from './components/Postdetails'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/add' exact component={CreatePost}></Route>
          <Route path='/edit/:id' exact component={EditPost}></Route>
          <Route path='post/:id' exact component={Postdetails}></Route>

        </div>
      </BrowserRouter>

    )
  }
}