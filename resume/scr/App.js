import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import Footer from './components/Footer';

const projects = [
  {
    title: "OYO Hotel Booking Analysis",
    period: "July 2023 - August 2023",
    description: "Performed EDA on hotel booking data to derive actionable insights and improved booking prediction accuracy.",
    skills: "EDA, Python, data cleaning, data transformation, data visualization",
  },
  {
    title: "Tableau Dashboard Hotel Booking",
    period: "Jan 2024 - Feb 2024",
    description: "Developed interactive Tableau dashboards with key metrics to improve decision-making.",
    skills: "Tableau, EDA, KPIs, data visualization",
  },
  {
    title: "COVID-19 Insights Dashboard",
    period: "Oct 2024",
    description: "Analyzed COVID-19 data with Excel, creating a comprehensive dashboard with visual insights.",
    skills: "Excel, Data Cleaning, Dashboard Creation",
  },
  {
    title: "Coffee Shop EDA with SQL",
    period: "Oct 2024",
    description: "Conducted SQL analysis on sales data to derive actionable insights and created visualizations.",
    skills: "SQL Workbench, Sales Analysis, EDA",
  },
];

const experiences = [
  {
    title: "Teaching Assistant - Data Science",
    company: "AlmaBetter Edutech Pvt. Ltd.",
    period: "Mar 2024 - Present",
    responsibilities: [
      "Aided students with coding and project work.",
      "Simplified complex topics and provided technical support.",
      "Developed data analysis workflows and best practices.",
    ],
  },
  {
    title: "Data Analyst Trainee",
    company: "AlmaBetter Edutech Pvt. Ltd.",
    period: "April 2023 - May 2024",
    responsibilities: [
      "Data Integrity, Data Transformation, Data Stories.",
      "KPI Development, Data Reporting, Data Visualization.",
    ],
  },
];

const education = [
  { degree: "B.Tech Electrical", institution: "AMGOI", period: "2021 - Present" },
  { degree: "Diploma in Electrical", institution: "Sharad Institute Of Technology", period: "2016 - 2020" },
];

const skills = {
  languages: ["Python (4.2/5)", "SQL (4.0/5)", "PostgreSQL (4.0/5)", "MySQL Workbench (4.0/5)", "Excel (4.2/5)"],
  libraries: ["Pandas (4.1/5)", "NumPy (4.1/5)", "Matplotlib (4.0/5)", "Seaborn (4.0/5)", "Scikit-learn (4.0/5)"],
  softSkills: ["Analytical Thinking", "Problem Solving", "Attention to Detail", "Communication Skills", "Collaboration"],
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700">
            Data Analyst with 1.5+ years of experience in transforming complex data into actionable insights.
            Skilled in Python, SQL, and machine learning, with a strong track record of optimizing data workflows and
            driving business decisions. Adept at data visualization, EDA, and feature engineering.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-4">Languages & Tools</h3>
              <ul className="space-y-2">{skills.languages.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-4">Libraries</h3>
              <ul className="space-y-2">{skills.libraries.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-4">Soft Skills</h3>
              <ul className="space-y-2">{skills.softSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution} | {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
