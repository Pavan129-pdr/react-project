
function Student({ name, college, department, skills }) {
    return (
        <div className="card">
            <h2>Student Profile</h2>

            <p><strong>Name:</strong> {name}</p>
            <p><strong>College:</strong> {college}</p>
            <p><strong>Department:</strong> {department}</p>
            <p><strong>Skills:</strong> {skills}</p>
        </div>
    );
}

export default Student;
