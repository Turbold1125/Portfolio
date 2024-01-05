import React from 'react'
import WorkItem from './WorkItem.jsx'

const data = [
        {
          "year": 2022,
          "title": "Introduction to Programming",
          "duration": "3 months",
          "details": "This course covers the fundamentals of programming, including languages like Python and Java."
        },
        {
          "year": 2023,
          "title": "Web Development Bootcamp",
          "duration": "6 weeks",
          "details": "A comprehensive bootcamp on web development, covering HTML, CSS, and JavaScript."
        },
        {
          "year": 2021,
          "title": "Data Science Masterclass",
          "duration": "4 months",
          "details": "In-depth training on data analysis, machine learning, and statistical modeling using Python and R."
        },
        {
          "year": 2024,
          "title": "Mobile App Development Workshop",
          "duration": "2 months",
          "details": "Hands-on experience in creating mobile apps for iOS and Android platforms using React Native."
        },
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=> (
            <WorkItem 
                key={idx} 
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}/>
        ))}
    </div>
  );
};

export default Work