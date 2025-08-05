import dayjs from 'dayjs';
import React from 'react';

function Jobcard(props ) {
  // const skills = ['JavaScript', 'React', 'Node.js'];
  const date1 = dayjs(Date.now());
  const diff = date1.diff(props.postedOn, 'day');

  return (
    <div className="mx-40 my-6">
      <div className="flex justify-between items-center px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-xl font-bold text-gray-800">
            {props.title} - {props.company}
          </h1>
          <p className="text-sm text-gray-700">
            {props.type} • {props.experience} • {props.location}
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {props.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="text-sm text-gray-500">Posted {diff} days ago</p>
          <a href={props.job_link}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 shadow-md hover:scale-105">
                  Apply Now
              </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;
