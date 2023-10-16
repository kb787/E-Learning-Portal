import React from 'react';
import './CoursesCard.css';

const CoursesCard = (props) => {
    return (
        <>
            <div className="CoursesList_card">
                <div className="Courses_card_img">
                    <img src={props.courseImageURL} alt={props.courseTitle} />
                </div>
                <div className="Courses_card_content">
                    <div className="Courses_card_title">{props.courseTitle}</div>
                    <div className="Courses_card_description">
                        {props.courseDescription}
                    </div>
                    <div className='Courses_card_rating'>{props.courseRating}</div>
                </div>
            </div>
        </>
    );
}

export default CoursesCard;