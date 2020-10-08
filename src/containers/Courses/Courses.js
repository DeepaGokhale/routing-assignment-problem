import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedId : null
    }

    courseClicked = (id) => {
        this.setState({selectedId: id });
    }

    render () {
        let courses = this.state.courses.map(myCourse => {
                return (<Link to={`/${myCourse.id}/${myCourse.title}`} key={myCourse.id}> 
                    {myCourse.title}                     
                </Link>);
        } );

        let course = (course = <div>                        
                    <p>You selected the Course with ID: {this.props.match.params.id}</p>
                    <h2>{this.props.match.params.title}</h2>
                    </div>);
        

        if(this.props.match.params !== {}) {
            course = <div>
                <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {courses}
                    </section>
            </div>;
        }

        return (
                <div>                    
     
                    {course}
                    {/* To display Course on same page */}
                    {/* <Route path={this.props.match.url + '/:id/:title'} exact component={Course} /> */}
                </div>                 
        );
    }
}

export default withRouter(Courses);