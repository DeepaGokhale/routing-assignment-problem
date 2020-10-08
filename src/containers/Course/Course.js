import React, { Component } from 'react';

class Course extends Component {

    componentDidMount () {
        console.log(this.props);
    }

    render () {
        // let course = (this.props.id) ? (
        //     <div>
        //         <h1>{this.props.title}</h1>
        //     <p>You selected the Course with ID: {this.props.id}</p>
        //     </div>
        // ) : (<div></div>)

        return (
            <div>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
                <h2>{this.props.match.params.title}</h2>
            </div>
        );
    }
}

export default Course;