function ProjectsPage() {
    return (
        <div>
            {/* NAV BAR */}
            <nav className="main-nav">
                <div className="nav-brand">
                    {/* Link back to Homepage */}
                    <a href="../homepage/homepage.html">Apostolos Tsano</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#" style={{color: '#468691'}}>All Projects</a></li>
                    {/* Link to Contact Page */}
                    <li><a href="../contact_me/contact.html">Contact Me</a></li>
                </ul>
            </nav>

            <div className="container">
                <h1>All Projects</h1>
                <div className="project-card">
                    <h3>Project Name 1</h3>
                    <p>Languages Used:</p>
                    <p>Project coming soon.</p>
                    <p>CLICK TO VIEW CODE</p>
                </div>
                <div className="project-card">
                    <h3>Project Name 2</h3>
                    <p>Languages Used:</p>
                    <p>Project coming soon.</p>
                    <p>CLICK TO VIEW CODE</p>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectsPage />);
