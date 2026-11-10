
function SelfIntroduction({ name, age, course, location }) {
    return (
        <div className="card">
            <h2>My Introduction</h2>

            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Course:</strong> {course}</p>
            <p><strong>Location:</strong> {location}</p>
        </div>
    );
}

export default SelfIntroduction;
