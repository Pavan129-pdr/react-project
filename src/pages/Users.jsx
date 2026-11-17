
import { useState } from "react";
import "./Users.css";


const initialEmployees = [
  {
    id: 1,
    name: "Rahul",
    role: "Student",
    email: "rahul@example.com",
    department: "Product",
    status: "Available",
    hours: "9am - 5pm IST",
    city: "Hyderabad",
    age: 24,
    phone: "9000000001",
    avatar: "RA",
    color: "peach"
  },
  {
    id: 2,
    name: "Priya",
    role: "Student",
    email: "priya@example.com",
    department: "Marketing",
    status: "Meeting",
    hours: "9am - 5pm IST",
    city: "Chennai",
    age: 22,
    phone: "9000000002",
    avatar: "PR",
    color: "pink"
  },
  {
    id: 3,
    name: "Arjun",
    role: "Student",
    email: "arjun@example.com",
    department: "Engineering",
    status: "Focus Time",
    hours: "10am - 6pm IST",
    city: "Bengaluru",
    age: 25,
    phone: "9000000003",
    avatar: "AR",
    color: "blue"
  },
  {
    id: 4,
    name: "Sneha",
    role: "Student",
    email: "sneha@example.com",
    department: "Operations",
    status: "Available",
    hours: "9am - 5pm IST",
    city: "Mumbai",
    age: 23,
    phone: "9000000004",
    avatar: "SN",
    color: "peach"
  },
  {
    id: 5,
    name: "Kiran",
    role: "Student",
    email: "kiran@example.com",
    department: "Data",
    status: "Away",
    hours: "9am - 5pm IST",
    city: "Vijayawada",
    age: 26,
    phone: "9000000005",
    avatar: "KI",
    color: "yellow"
  }
];


function Users() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    email: "",
    department: "Engineering",
  });

  const filteredEmployees = employees.filter((employee) => {
    const departmentMatch =
      department === "All" || employee.department === department;

    const statusMatch =
      status === "All" || employee.status === status;

    return departmentMatch && statusMatch;
  });

  const clearFilters = () => {
    setDepartment("All");
    setStatus("All");
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const employee = {
      ...newEmployee,
      id: Date.now(),
      avatar: newEmployee.name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      status: "Available",
      hours: "9am - 5pm IST",
      color: "blue",
    };

    setEmployees((previous) => [...previous, employee]);
    setNewEmployee({
      name: "",
      role: "",
      email: "",
      department: "Engineering",
    });
    setShowForm(false);
    clearFilters();
  };

  return (
    <div className="employee-page">

      <div className="employee-toolbar">

        <div className="filter-group">

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="Product">Product</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Operations">Operations</option>
            <option value="Data">Data</option>
            <option value="Sales">Sales</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Meeting">Meeting</option>
            <option value="Focus Time">Focus Time</option>
            <option value="Away">Away</option>
          </select>

          <button className="clear-filter" onClick={clearFilters}>
            Clear All
          </button>

        </div>

        <button
          className="add-employee"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Employee
        </button>

      </div>

      {showForm && (
        <form className="employee-form" onSubmit={handleAddEmployee}>
          <h2>Add New Employee</h2>

          <input
            required
            placeholder="Employee Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
          />

          <input
            required
            placeholder="Job Role"
            value={newEmployee.role}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, role: e.target.value })
            }
          />

          <input
            required
            type="email"
            placeholder="Email Address"
            value={newEmployee.email}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, email: e.target.value })
            }
          />

          <select
            value={newEmployee.department}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                department: e.target.value,
              })
            }
          >
            <option>Engineering</option>
            <option>Product</option>
            <option>Marketing</option>
            <option>HR</option>
            <option>Operations</option>
            <option>Data</option>
            <option>Sales</option>
          </select>

          <button type="submit" className="add-employee">
            Save Employee
          </button>
        </form>
      )}

      <div className="employee-heading">
        <h1>Our Team</h1>
        <p>Meet the people behind our success</p>
      </div>

      <div className="employee-grid">

        {filteredEmployees.map((employee) => (

          <div className="employee-card" key={employee.id}>

            <div className="employee-top">

              <div className={`employee-avatar ${employee.color}`}>
                {employee.avatar}
                <span className={`online-dot ${employee.status.toLowerCase().replace(" ", "-")}`}></span>
              </div>

              <div className="employee-icons">
                <a href={`mailto:${employee.email}`} title="Send email">
                  ✉
                </a>
                <button
                  type="button"
                  title="Copy email"
                  onClick={() => navigator.clipboard?.writeText(employee.email)}
                >
                  ▢
                </button>
              </div>

            </div>

            <h3>{employee.name}</h3>
            <p className="employee-role">{employee.role}</p>



<div className="employee-details">
  <p><strong>City:</strong> {employee.city}</p>
  <p><strong>Age:</strong> {employee.age}</p>
  <p><strong>Email:</strong> {employee.email}</p>
  <p><strong>Phone:</strong> {employee.phone}</p>
  <p>◷ &nbsp; {employee.hours}</p>

  <p className={`employee-status ${employee.status.toLowerCase().replace(" ", "-")}`}>
    ● &nbsp; {employee.status}
  </p>
</div>

<div className="employee-department">
  {employee.department}
</div>


            <div className="employee-details">
              <p>◷ &nbsp; {employee.hours}</p>

              <p className={`employee-status ${employee.status.toLowerCase().replace(" ", "-")}`}>
                ● &nbsp; {employee.status}
              </p>
            </div>

            <div className="employee-department">
              {employee.department}
            </div>

          </div>

        ))}

      </div>

      {filteredEmployees.length === 0 && (
        <div className="no-employees">
          No employees found. Try changing your filters.
        </div>
      )}

      <p className="employee-count">
        Showing {filteredEmployees.length} of {employees.length} employees
      </p>

    </div>
  );
}

export default Users;
