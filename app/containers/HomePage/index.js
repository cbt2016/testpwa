/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React,{Component} from 'react';

import '../../styles/home/home.css';

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function

   
    render() {
        return (
            <div className="full">
               <img src={require('../../img/Page1.jpg')} style={{width:2048 , height:1036}}/>
            </div>
        );
    }
}
