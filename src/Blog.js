import React from 'react'
import { Link } from 'react-router-dom'


class Blog extends React.Component{

    render(){
        return(
            <div>
                <h1>Blog</h1>
                <h1>Blah blah blah</h1>
                <Link to="/">home!</Link>
                <Link to="/Store">store!</Link>
                <Link to="/Blog">blog!</Link>
            </div>
        )
    }
}

export default Blog