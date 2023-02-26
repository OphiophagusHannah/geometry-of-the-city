import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

class Main extends Component {
    render() {
        return (
            <div className="site-wrapper">
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

        );
    }
}

export default Main;
