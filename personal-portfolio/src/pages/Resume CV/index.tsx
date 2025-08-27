import React from 'react';
import './index.css';
import ResumeViewer from '../../components/ResumeViewer';

function ResumeCV() {
    // Sample content - replace with your actual resume and cover letter content
    const resumeContent = `ANISH KUMAR
Software Engineer & Full Stack Developer

CONTACT INFORMATION
Email: anish.kumar@example.com
Phone: (555) 123-4567
LinkedIn: linkedin.com/in/anishkumar
GitHub: github.com/anishkumar

EDUCATION
Georgia Institute of Technology
Bachelor of Science in Computer Science
Expected Graduation: May 2025
GPA: 3.8/4.0

TECHNICAL SKILLS
Programming Languages: JavaScript, TypeScript, Python, Java, C++
Frontend: React, HTML5, CSS3, Bootstrap, Material-UI
Backend: Node.js, Express.js, Python Flask, Django
Databases: MongoDB, PostgreSQL, MySQL, Redis
Tools & Technologies: Git, Docker, AWS, Azure, Jenkins

EXPERIENCE
Software Engineering Intern - Tech Company Inc.
May 2024 - August 2024
• Developed full-stack web applications using React and Node.js
• Implemented RESTful APIs and database schemas
• Collaborated with cross-functional teams in an agile environment

PROJECTS
Personal Portfolio Website
• Built a responsive portfolio using React and TypeScript
• Implemented dynamic theming and interactive components
• Deployed using modern CI/CD practices

Data Structures Implementation
• Created efficient implementations of common data structures
• Optimized algorithms for performance and memory usage
• Written in Python with comprehensive testing

ACHIEVEMENTS
• Dean's List: Fall 2023, Spring 2024
• Hackathon Winner: Georgia Tech Hackathon 2024
• Research Assistant: Computer Vision Lab`;

    const coverLetterContent = `ANISH KUMAR
123 Main Street
Atlanta, GA 30332
anish.kumar@example.com
(555) 123-4567

[Date]

[Company Name]
[Company Address]
[City, State ZIP]

Dear Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at [Company Name]. As a Computer Science student at Georgia Institute of Technology with a passion for full-stack development, I am excited about the opportunity to contribute to your innovative team.

My technical background includes proficiency in modern web technologies such as React, TypeScript, and Node.js, along with experience in Python and Java. I have successfully completed internships where I developed full-stack applications and collaborated with cross-functional teams in agile environments.

What excites me most about [Company Name] is your commitment to [specific company value/mission]. I believe my skills in building scalable web applications and my experience with cloud technologies align perfectly with your team's needs.

During my time at Georgia Tech, I've maintained a 3.8 GPA while working on projects that demonstrate my ability to solve complex problems. My portfolio website showcases my full-stack capabilities, and my data structures project demonstrates my understanding of algorithmic efficiency.

I am particularly drawn to [Company Name] because of [specific reason - company culture, technology stack, etc.]. I am confident that my technical skills, collaborative approach, and passion for innovation would make me a valuable addition to your team.

I would welcome the opportunity to discuss how my background, skills, and enthusiasm would benefit [Company Name]. Thank you for considering my application. I look forward to hearing from you.

Sincerely,
Anish Kumar`;

    return (
        <div className="resume-cv-container">
            <div className="page-header">
                <h1>Resume & Cover Letter</h1>
                <p>Download or view my professional documents</p>
            </div>
            
            <div className="documents-section">
                <ResumeViewer
                    type="resume"
                    title="Professional Resume"
                    content={resumeContent}
                    downloadUrl="/documents/resume.pdf"
                    fileName="/documents/resume.pdf#zoom=75%"
                />
                <ResumeViewer
                    type="coverLetter"
                    title="Cover Letter"
                    content={resumeContent}
                    downloadUrl="/documents/resume.pdf"
                    fileName="/documents/resume.pdf#zoom=75%"
                />
            </div>            
        </div>
    );
}

export default ResumeCV;