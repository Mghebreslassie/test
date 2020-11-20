import React from 'react'
import { Link } from 'react-router-dom'

class Store extends React.Component{

    render(){
        return(
            <div>
                <h1>Store</h1>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
                <Link to="/">home!</Link>
                <Link to="/Store">store!</Link>
                <Link to="/Blog">blog!</Link>
                <br/>
                <a href="/">This link will refresh page!!</a>
            </div>
        )
    }
}

export default Store