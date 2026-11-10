
function UserCard({ name, city, age, email, phone }) {
    return (
        <div className="user-card">
            <h2>{name}</h2>

            <p><strong>City:</strong> {city}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
        </div>
    );
}

export default UserCard;
