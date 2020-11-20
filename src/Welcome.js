import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Welcome page</h1>
                <h1>Hello world</h1>
                <Link to="/">home!</Link>
                <Link to="/Store">store!</Link>
                <Link to="/Blog">blog!</Link>
            </div>
        )
    }
}

export default Welcome