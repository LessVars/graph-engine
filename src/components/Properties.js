import React from 'react'

const propertiesStyle = {
    position: 'fixed', /* Sit on top of the page content */
    //display: none; /* Hidden by default */
    width: '20%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', /* Black background with opacity */
    zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer', /* Add a pointer on hover */
    color: 'white'
}

export default class Properties extends React.Component {
    render(){
        return(
            <div style={ propertiesStyle }>
                Title: <input type="text"/>
            </div>)
    }
}