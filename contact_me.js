function ContactPage() {
    return (
        // Added className="page-wrapper" here to control the full page layout
        <div className="page-wrapper">
            {/* NAV BAR */}
            <nav className="main-nav">
                <div className="nav-brand">
                    {/* Link back to Homepage */}
                    <a href="../homepage/homepage.html">Apostolos Tsano</a>
                </div>
                <ul className="nav-links">
                    {/* Link to All Projects */}
                    <li><a href="../all_projects/projects.html">All Projects</a></li>
                    <li><a href="#" style={{color: '#468691'}}>Contact Me</a></li>
                </ul>
            </nav>

            <div className="contact-container">
                <h1>Get In Touch</h1>
                <p>Don't hesitate to reach out for any collaborations or questions!</p>
                
                <div className="contact-info">
                    <p>
                        <i className="fa-solid fa-envelope" style={{marginRight: '10px'}}></i> 
                        tolitsano18@gmail.com
                    </p>
                    
                    <p style={{marginTop: '20px'}}>
                        <a 
                            href="https://www.linkedin.com/in/apostolos-tsano-89818b2b8/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin" style={{marginRight: '10px'}}></i> 
                            LinkedIn Profile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactPage />);