import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Prototype from '../pages/Prototype';


class Main extends Component {
    render() {
        return (
            <div className="site-wrapper">
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/visual" element={<About />} />
                    <Route path="/proto" element={<Prototype />} />
                </Routes>
            </div>

        );
    }
}

export default Main;
