import React, { useState } from "react";
import profileImage from "./assets/profile.jpg";

// Reusable Card component with subtle hover transitions.
const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 border-t-4 border-blue-500 transform transition-transform duration-300 hover:scale-105">
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          {title}
        </h2>
      )}
      <div className="mt-4 text-gray-700 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const sections = {
  summary: (
    <Card title="Professional Summary">
      <p>
        Accomplished Software Engineer with 3.8+ years of experience in designing and
        implementing high-performance, scalable software solutions. Expertise in .NET Core,
        ASP.NET Core Web API, Angular, and Azure SQL. Proven track record of optimizing system
        performance, reducing operational costs, and enhancing user experience. Adept at driving
        projects from concept to completion, collaborating in Agile teams, and delivering robust
        solutions tailored to client needs. Passionate about continuous learning and contributing
        to technological innovation in fast-paced environments.
      </p>
    </Card>
  ),
  experience: (
    <Card title="Professional Experience">
      {/* GitaIT Experience */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Software Engineer</h3>
        <p className="text-base text-gray-600">GitaIT Pvt. Ltd., KPHB 5th Phase, Hyderabad, TS</p>
        <p className="text-base text-gray-600">May 2024 – Present</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-base text-gray-700">
          <li>
            Developed critical features for a Wealth Management Platform including task management, file storage, and client-centric modules.
          </li>
          <li>
            Implemented a task management module, increasing team productivity by 30% through enhanced collaboration.
          </li>
          <li>
            Built a cloud-based file storage solution using Azure, ensuring secure document management.
          </li>
          <li>
            Designed dynamic search and filtering features, enabling quick data access and improved client satisfaction.
          </li>
          <li>
            Collaborated in an Agile environment to consistently meet sprint deadlines and deliver high-quality software.
          </li>
        </ul>
        <p className="mt-2 font-semibold text-gray-800">Technologies:</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-base text-gray-700">
          <li>C#</li>
          <li>ASP.NET Core Web API</li>
          <li>Azure SQL Server</li>
          <li>Agile Methodologies</li>
          <li>LINQ</li>
          <li>Entity Framework Core</li>
          <li>Bitbucket</li>
          <li>REST API</li>
        </ul>
      </div>
      {/* BitApps Experience */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">Software Engineer</h3>
        <p className="text-base text-gray-600">BitApps India Pvt. Ltd., Madhapur, Hyderabad, TS</p>
        <p className="text-base text-gray-600">June 2021 – May 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-base text-gray-700">
          <li>
            Developed multiple modules for the Hospital Management System (HMS), enhancing patient data, billing, and pharmacy operations.
          </li>
          <li>
            Created interactive, user-friendly Angular 12 interfaces to streamline hospital management.
          </li>
          <li>
            Optimized SQL queries to boost database performance, reducing execution time by up to 20%.
          </li>
          <li>
            Delivered client-driven updates and improvements, achieving a 95% client satisfaction rate.
          </li>
          <li>
            Spearheaded Dental and Stores Modules, reducing manual errors by 15%.
          </li>
        </ul>
        <p className="mt-2 font-semibold text-gray-800">Technologies:</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-base text-gray-700">
          <li>C#</li>
          <li>LINQ</li>
          <li>SQL Server</li>
          <li>JavaScript</li>
          <li>Entity Framework</li>
          <li>ADO.Net</li>
          <li>AngularJS</li>
          <li>Postman</li>
          <li>ASP.NET Core Web API</li>
          <li>PostgreSQL</li>
          <li>Angular 12</li>
          <li>GitHub</li>
        </ul>
      </div>
      {/* Internship Experience */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">Internship</h3>
        <p className="text-base text-gray-600">BitApps India Pvt. Ltd., Madhapur, Hyderabad, TS</p>
        <p className="text-base text-gray-600">March 2021 – June 2021</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-base text-gray-700">
          <li>
            Contributed to development tasks across the ASP.NET Core Web API stack, gaining hands-on experience in C#, SQL, and Angular.
          </li>
          <li>
            Assisted in building backend logic and optimizing database queries for improved system performance.
          </li>
          <li>
            Participated in unit testing and debugging, enhancing deliverable quality and system stability.
          </li>
        </ul>
        <p className="mt-2 font-semibold text-gray-800">Technologies:</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-base text-gray-700">
          <li>C#</li>
          <li>LINQ</li>
          <li>JavaScript</li>
          <li>Entity Framework</li>
          <li>SQL Server</li>
          <li>Postman</li>
          <li>ASP.NET Core Web API</li>
          <li>Angular 12</li>
          <li>GitHub</li>
        </ul>
      </div>
    </Card>
  ),
  education: (
    <Card title="Education">
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Master of Computer Applications (MCA)</h3>
        <p className="text-base text-gray-700">
          Vignan's Foundation for Science, Technology & Research, Guntur, AP, 2021 | 83%
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Bachelor of Computer Applications (BCA)</h3>
        <p className="text-base text-gray-700">
          PNC & KR Degree College, Narasaraopet | Acharya Nagarjuna University, Guntur, AP, 2019 | 70%
        </p>
      </div>
    </Card>
  ),
  personal: (
    <Card title="Personal Information">
      <p className="text-base">Full Name: Polineni Ramakrishna</p>
      <p className="text-base">Date of Birth: 16-May-1996</p>
      <p className="text-base">Gender: Male</p>
      <p className="text-base">Marital Status: Unmarried</p>
      <p className="text-base">Location: Hyderabad, TS, India</p>
    </Card>
  )//,
  // declaration: (
  //   <Card title="Declaration">
  //     <p className="text-base">
  //       I hereby confirm that the information provided above is true to the best of my knowledge and belief.
  //     </p>
  //     <p className="text-base mt-2">(Polineni Ramakrishna)</p>
  //     <p className="text-base">Hyderabad</p>
  //   </Card>
  // ),
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <div className="max-w-screen-xl mx-auto p-6 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 border-b">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Polineni Ramakrishna</h1>
          <p className="text-gray-600">Hyderabad, TS, India</p>
          <p className="text-gray-600">+91 9494926274</p>
          <p className="text-gray-600">rampolineni@outlook.com</p>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
          <img
            alt="Profile"
            className="w-full h-full object-cover"
            src={profileImage}
          />
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="mt-6 flex justify-center space-x-4 border-b pb-3">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              activeSection === key ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <main className="mt-8">{sections[activeSection]}</main>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-center">
        <p>Let's connect</p>
        <p>All rights reserved Polineni Ramakrishna 2025</p>
      </footer>
    </div>
  );
};

export default Resume;
