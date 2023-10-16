import React from 'react';
import './CoursesList.css';
import CoursesCard from './CoursesCard';

const CoursesList = () => {
    // Define an array of course data objects
    const courses = [
        {
            "courseImageURL": "https://i.ytimg.com/vi/x60GHpQ8gJk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnYTGnTOLiRSLI08LWvg1sQTEuDQ",
            "courseTitle": "Soft Skills",
            "courseDescription": "Welcome to our 'Soft Skills' playlist! In today's fast-paced world, developing soft skills is essential for personal and professional success. This playlist offers a curated collection of engaging videos that cover a wide range of soft skills, including communication, leadership, teamwork, time management, and more. Whether you're a student, professional, or someone looking to enhance their interpersonal abilities, these videos provide valuable insights and practical tips to help you excel in any environment. Start building your soft skills today and unlock your full potential. Explore the playlist now!",
            "courseRating": 4.8
        } 
          ,
        { 
            "courseImageURL": "https://i.ytimg.com/vi/_ucD8sc30xY/mqdefault.jpg",
            "courseTitle": "Trade skills tutorials",
            "courseDescription": "Welcome to our 'Trade Skills Tutorials' playlist! Are you interested in learning practical and hands-on trade skills that can open doors to rewarding careers? Look no further. This playlist offers a comprehensive collection of instructional videos covering a variety of trade skills, including carpentry, welding, electrical work, plumbing, and more. Whether you're a beginner looking to acquire new skills or a seasoned tradesperson seeking to expand your expertise, these tutorials provide step-by-step guidance and expert tips. Start your journey to mastering trade skills today and build a promising future in the world of craftsmanship. Explore the playlist now and embark on your skills-building adventure!",
            "courseRating": 4.8
        }
           ,
        {
            "courseImageURL": "https://i.ytimg.com/vi/X3Fz_Gu5WUE/mqdefault.jpg",
            "courseTitle": "Transform Your English Communication Skills",
            "courseDescription": "Unlock the power of effective communication with our 'Transform Your English Communication Skills' course! Whether you're a non-native English speaker looking to improve your language proficiency or a native speaker aiming to refine your communication abilities, this comprehensive course is your pathway to success. Dive into a series of engaging lessons that cover everything from pronunciation and vocabulary enhancement to mastering the art of public speaking. With expert guidance and practical exercises, you'll gain the confidence and skills needed to excel in both personal and professional communication. Elevate your English communication skills and open doors to new opportunities. Join us on this transformative journey today!",
            "courseRating": 4.8
        }
    ];

    return (
        <>
            <section className='CoursesList'>
                <div className="CoursesList_container">
                    <div className='CoursesList_content'>
                        <p className="CoursesList_title">Available Courses</p>
                        <h1 className="Courses_short_description">
                            Welcome to our e-learning platform for prisoners. Explore and enhance your skills.
                        </h1>
                        <p className="Courses_description">
                            Discover a variety of courses to support your growth and learning during your time in prison.
                        </p>
                    </div>
                    <div className="CoursesList_card_container">
                        {/* Map through the courses array and render CoursesCard components */}
                        {courses.map((course, index) => (
                            <CoursesCard
                                key={index} // Use a unique key for each CoursesCard component
                                courseImageURL={course.courseImageURL}
                                courseTitle={course.courseTitle}
                                courseDescription={course.courseDescription}
                                courseRating={course.courseRating}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoursesList;