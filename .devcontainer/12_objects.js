const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Jyotish"
}
// course.courseInstructor
const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Jyotish",
//     "coursename": "JS",
//     "price": "free"
// }