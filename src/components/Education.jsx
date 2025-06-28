import React from "react";

const educationData = [
  {
    degree: "Diploma in Computer Science & Technology",
    university: "University of California, Berkeley",
    location: "Berkeley, CA",
    date: "Sept 2019 – May 2023",
    gpa: "3.9 / 4.0",
    coursework: "Data Structures, Machine Learning, Algorithms",
    certificateLink: "#",
  },
  {
    degree: "Diploma in Full-Stack Web Development",
    university: "Coursera – Online Program",
    location: "Remote",
    date: "Jan 2023 – June 2023",
    gpa: "5.0 / 5.0",
    coursework: "React, Node.js, MongoDB, Firebase",
    certificateLink: "#",
  },
];

const EducationCard = ({ item }) => (
  <div className="flex-1  bg-white border border-[#003934]/30 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition duration-300 text-black">
    <h3 className="text-lg font-semibold">{item.degree}</h3>
    <p className="text-sm text-gray-700 mb-1">
      {item.university} — {item.location}
    </p>
    <p className="text-sm text-gray-800">
      {item.date} | <span className="font-semibold">GPA:</span> {item.gpa}
    </p>
    <p className="text-sm mt-2 italic">
      <span className="font-semibold not-italic">Relevant Coursework:</span>{" "}
      {item.coursework}
    </p>
    <a
      href={item.certificateLink}
      className="block text-xs text-[#003934] mt-3 hover:underline font-medium"
    >
      View Certificate &rarr;
    </a>
  </div>
);

const EducationSection = () => {
  return (
    <section id="education" className="relative scroll-mt-12 py-16 px-4  text-black">
     
      <div className="max-w-[1600px] w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#003934] mb-2">
          🎓 Education
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          My academic background in computer science and development
          technologies has built a strong foundation in both theory and
          practical web application development.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {educationData.map((item, idx) => (
            <EducationCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
