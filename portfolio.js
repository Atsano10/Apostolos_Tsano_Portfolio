const { useState } = React;

// --- SKILL DATA ---
// Replace filenames (e.g., 'python.png') with your actual file names
const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", img: "../images/logos/python.png", color: "#306998", level: 55 },
            { name: "HTML", img: "../images/logos/html.png", color: "#E34F26", level: 90 },
            { name: "CSS", img: "../images/logos/css.png", color: "#1572B6", level: 80 },
            { name: "JS", img: "../images/logos/js.png", color: "#F7DF1E", level: 65 },
            { name: "C++", img: "../images/logos/cpp.png", color: "#00599C", level: 40 }
        ]
    },
    {
        title: "Hardware & Engineering",
        skills: [
            { name: "Verilog", img: "../images/logos/verilog.png", color: "#B83280", level: 20 },
            { name: "MATLAB", img: "../images/logos/matlab.png", color: "#D65A28", level: 20 }
        ]
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "React", img: "../images/logos/react.png", color: "#61DAFB", level: 20 },
            { name: "Git", img: "../images/logos/git.png", color: "#F05032", level: 20 }
        ]
    }
];

function SkillCircle({ skill }) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <div 
            className="skill-item" 
            style={{ '--target-offset': offset }} 
        >
            <div className="skill-circle-container">
                <svg className="circle-svg">
                    <circle className="circle-bg" cx="50" cy="50" r={radius} />
                    <circle 
                        className="circle-progress" 
                        cx="50" cy="50" r={radius}
                        style={{ stroke: skill.color }}
                    />
                </svg>
                
                <div className="skill-center-content">
                    {/* Render Image Logo */}
                    <img 
                        src={skill.img} 
                        alt={skill.name} 
                        className="skill-logo"
                    />
                    {/* Render Percentage Number (hidden until hover) */}
                    <span className="skill-number">{skill.level}%</span>
                </div>
            </div>
            <p className="skill-name">{skill.name}</p>
        </div>
    );
}

function HomePage() {
    return (
        <div>
            <nav className="main-nav">
                <div className="nav-brand">Apostolos Tsano</div>
                <ul className="nav-links">
                    <li><a href="../all_projects/projects.html">All Projects</a></li>
                    <li><a href="../contact_me/contact.html">Contact Me</a></li>
                </ul>
            </nav>
            
            <section className="hero-section">
                <div className="profile-pic-circle">
                    <img src="../images/image_1.png" alt="Apostolos Tsano" />
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-header">About Me</h2>
                <p className="about-text">
                    I am currently a soccer coach who is working toward a career in the tech industry. Coaching has helped me develop strong skills in leadership, communication, and problem solving, which I now apply to my work in technology. I am actively improving my Python skills and focusing on building and refining my portfolio through hands on projects. I enjoy learning through real world experience and continuously pushing myself to grow as a developer. My goal is to create technology that makes people’s lives easier. I am motivated by the idea of building practical, user focused solutions that have a real impact. Outside of tech, I enjoy playing sports, video games, and spending time outdoors.
                </p>
            </section>

            <section className="skills-section">
                {skillCategories.map(cat => (
                    <div key={cat.title}>
                        <h3 className="category-title">{cat.title}</h3>
                        <div className="skills-container">
                            {cat.skills.map(s => (
                                <SkillCircle key={s.name} skill={s} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <footer className="simple-footer">
                <p>© 2025 Apostolos Tsano | Engineering Portfolio</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);