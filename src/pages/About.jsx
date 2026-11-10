
function About() {
    return (
        <div className="page-container">

            <h1>About My Project</h1>

            <div className="about-card">
                <h2>React Learning Application</h2>

                <p><strong>Developer:</strong> Pavan</p>
                <p><strong>Technology:</strong> React JS</p>
                <p><strong>Build Tool:</strong> Vite</p>

                <h3>Topics Covered</h3>

                <ul>
                    <li>React Components</li>
                    <li>Props</li>
                    <li>Parent to Child Communication</li>
                    <li>Component Reusability</li>
                    <li>React Router</li>
                </ul>
            </div>

        </div>
    );
}

export default About;
