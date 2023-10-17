import React from 'react';
import Card from './Card';

function AllCards({ courses, category }) {
    function getCourses() {
        // let allCourses = [];
        // Object.values(courses).forEach((array) => {
        //     array.forEach((courseData) => {
        //         allCourses.push(courseData);
        //     });
        // });
        // return allCourses;
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else {
            return courses[category] || []; // Handle undefined category
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card course={course} key={course.id} />
            ))}
        </div>
    );
}

export default AllCards;
