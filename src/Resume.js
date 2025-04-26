import React, { useState } from "react";
import profileImage from "./assets/profile.jpg";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6 border-t-4 border-blue-500 transform transition-transform duration-300 hover:scale-105">
    {title && (
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    )}
    <div className="mt-4 text-gray-700 text-base leading-relaxed">
      {children}
    </div>
  </div>
);

const sections = {
  summary: (
    <Card title="Professional Summary">
      <p>
        Accomplished Software Engineer with 4+ years of experience designing and delivering scalable,
        high-performance software solutions. Specialized in .NET Core, ASP.NET Core Web API, Angular 19,
        Azure SQL, and PostgreSQL. Skilled in optimizing systems, building modular architectures, and
        collaborating within Agile environments. Passionate about innovation, continuous learning, and
        driving customer success.
      </p>
    </Card>
  ),
  experience: (
    <Card title="Professional Experience">
      {/* GitaIT Experience */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">GitaIT Pvt. Ltd., Hyderabad | May 2025 – Present</p>
        <strong className="block mt-2 text-gray-700">Project: Campaign Connect</strong>
        <ul className="list-disc list-inside mt-1">
          <li>Developed full-stack backend architecture and database design from scratch.</li>
          <li>Implemented scalable module designs, collaborated in Agile sprints, development deployments.</li>
        </ul>
        <strong className="block mt-2 text-gray-700">Project: Amplify (Wealth Management)</strong>
        <ul className="list-disc list-inside mt-1">
          <li>Developed task management, client onboarding, cloud file storage modules.</li>
          <li>Increased productivity by 30% with real-time search and filter optimizations.</li>
          <li>Integrated Azure Blob Storage for secure document management.</li>
        </ul>
        <p className="mt-2 font-semibold">Technologies:</p>
        <p>.NET Core, C#, Angular 19, Azure SQL, REST API, Git, Bitbucket, Agile</p>
      </div>

      {/* BitApps Experience */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">BitApps India Pvt. Ltd., Hyderabad | June 2021 – May 2024</p>
        <strong className="block mt-2 text-gray-700">Project: Supply Chain Management System</strong>
        <ul className="list-disc list-inside mt-1">
          <li>Designed modules for procurement, vendor management, and logistics automation.</li>
          <li>Upgraded project from AngularJS to Angular 12, ASP.NET to Core version.</li>
          <li>Implemented KPI dashboards, inventory control systems reducing shortages.</li>
        </ul>
        <strong className="block mt-2 text-gray-700">Project: Hospital Management System (HMS)</strong>
        <ul className="list-disc list-inside mt-1">
          <li>Built patient, billing, dental, and pharmacy modules on Angular 12 and .NET Core.</li>
          <li>Optimized SQL performance, reducing query execution time by 20%.</li>
          <li>Reduced manual data entry errors by 15% through smart validations.</li>
        </ul>
        <p className="mt-2 font-semibold">Technologies:</p>
        <p>C#, LINQ, SQL Server, PostgreSQL, Angular 12, REST API, Entity Framework Core, ADO.NET</p>
      </div>

      {/* Internship */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Intern Developer</h3>
        <p className="text-gray-600">BitApps India Pvt. Ltd., Hyderabad | Mar 2021 – Jun 2021</p>
        <ul className="list-disc list-inside mt-1">
          <li>Worked on ASP.NET Core Web APIs, database optimizations, and backend logic development.</li>
          <li>Performed debugging, unit testing and API enhancements for better stability.</li>
        </ul>
        <p className="mt-2 font-semibold">Technologies:</p>
        <p>ASP.NET Core, Angular 12, SQL Server, Postman, GitHub</p>
      </div>
    </Card>
  ),
  education: (
    <Card title="Education">
      <div className="mt-4">
        <h3 className="font-bold">Master of Computer Applications (MCA)</h3>
        <p>Vignan's Foundation for Science, Technology & Research, Guntur | 2021 | 83%</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Bachelor of Computer Applications (BCA)</h3>
        <p>PNC & KR Degree College, Narasaraopet (Acharya Nagarjuna University) | 2019 | 70%</p>
      </div>
    </Card>
  ),
  personal: (
    <Card title="Personal Information">
      <p>Full Name: Polineni Ramakrishna</p>
      <p>Date of Birth: 16-May-1996</p>
      <p>Gender: Male</p>
      <p>Marital Status: Unmarried</p>
      <p>Location: Hyderabad, TS, India</p>
    </Card>
  )
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <div className="max-w-screen-xl mx-auto p-6 font-sans">
      <header className="flex justify-between items-center py-6 border-b">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Polineni Ramakrishna</h1>
          <p className="text-gray-600">Hyderabad, TS, India</p>
          <p className="text-gray-600">+91 9494926274</p>
          <p className="text-gray-600">rampolineni@outlook.com</p>
        </div>
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
          <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
        </div>
      </header>

      <nav className="mt-6 flex justify-center space-x-4 border-b pb-3">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 rounded ${
              activeSection === key ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </nav>

      <main className="mt-8">{sections[activeSection]}</main>

      <footer className="mt-12 text-center text-gray-500">
        <p>All rights reserved © Polineni Ramakrishna 2025</p>
      </footer>
    </div>
  );
};

export default Resume;
