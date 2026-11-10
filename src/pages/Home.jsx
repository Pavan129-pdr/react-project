
import SelfIntroduction from "../components/SelfIntroduction";
import Student from "../components/Student";

function Home() {
    return (
        <div className="page-container">

            <h1>Welcome to My React Application</h1>

            <SelfIntroduction
                name="Pavan"
                age={23}
                course="React JS"
                location="Hyderabad"
            />

            <Student
                name="Pavan"
                college="SRM University"
                department="Computer Science"
                skills="HTML, CSS, JavaScript, React"
            />

        </div>
    );
}

export default Home;
