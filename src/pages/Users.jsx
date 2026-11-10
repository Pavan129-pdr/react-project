
import UserCard from "../components/UserCard";

function Users() {

    const users = [
        {
            id: 1,
            name: "Rahul",
            city: "Hyderabad",
            age: 24,
            email: "rahul@example.com",
            phone: "9000000001"
        },
        {
            id: 2,
            name: "Priya",
            city: "Chennai",
            age: 22,
            email: "priya@example.com",
            phone: "9000000002"
        },
        {
            id: 3,
            name: "Arjun",
            city: "Bengaluru",
            age: 25,
            email: "arjun@example.com",
            phone: "9000000003"
        },
        {
            id: 4,
            name: "Sneha",
            city: "Mumbai",
            age: 23,
            email: "sneha@example.com",
            phone: "9000000004"
        },
        {
            id: 5,
            name: "Kiran",
            city: "Vijayawada",
            age: 26,
            email: "kiran@example.com",
            phone: "9000000005"
        }
    ];

    return (
        <div className="page-container">

            <h1>User Directory</h1>

            <p className="subtitle">
                React Props - Parent to Child Communication
            </p>

            <div className="user-container">

                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        city={user.city}
                        age={user.age}
                        email={user.email}
                        phone={user.phone}
                    />
                ))}

            </div>

        </div>
    );
}

export default Users;
