
import { useState } from "react";
import "./Registration.css";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
};

function Registration() {
  // Store all form data
  const [formData, setFormData] = useState(initialFormData);

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Store success message
  const [success, setSuccess] = useState(false);

  // Show or hide password
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccess(false);
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s'-]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Enter a valid first name";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s'-]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Enter a valid last name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must contain 8 characters, a letter and a number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (formData.dob > new Date().toISOString().split("T")[0]) {
      newErrors.dob = "Date of birth cannot be in the future";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (formData.address.trim().length < 5) {
      newErrors.address = "Address must contain at least 5 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(formData.city.trim())) {
      newErrors.city = "Enter a valid city name";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      console.log("Registration Successful:", {
        ...formData,
        password: "[hidden]",
        confirmPassword: "[hidden]",
      });
    } else {
      setSuccess(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSuccess(false);
    setShowPassword(false);
  };

  // Reusable input field
  const renderInput = (label, name, type = "text", placeholder = "") => (
    <div className="registration-field">
      <label htmlFor={name}>{label} *</label>

      <input
        id={name}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        max={name === "dob" ? new Date().toISOString().split("T")[0] : undefined}
      />

      {errors[name] && (
        <span className="error-message">{errors[name]}</span>
      )}
    </div>
  );

  return (
    <main className="registration-page">
      <section className="registration-card">

        <div className="registration-heading">
          <div className="registration-icon">P</div>
          <h1>Create Your Account</h1>
          <p>Fill in your details to complete registration</p>
        </div>

        {success && (
          <div className="success-message">
            ✅ Registration completed successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          <div className="registration-grid">

            {renderInput("First Name", "firstName", "text", "Enter first name")}

            {renderInput("Last Name", "lastName", "text", "Enter last name")}

            {renderInput("Email Address", "email", "email", "example@gmail.com")}

            {renderInput("Mobile Number", "mobile", "tel", "10-digit mobile number")}

            <div className="registration-field">
              <label htmlFor="password">Password *</label>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />

              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="registration-field">
              <label htmlFor="confirmPassword">Confirm Password *</label>

              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
              />

              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <div className="registration-field">
              <label htmlFor="dob">Date of Birth *</label>

              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
              />

              {errors.dob && (
                <span className="error-message">{errors.dob}</span>
              )}
            </div>

            <div className="registration-field">
              <label htmlFor="gender">Gender *</label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {errors.gender && (
                <span className="error-message">{errors.gender}</span>
              )}
            </div>

            <div className="registration-field full-width">
              <label htmlFor="address">Address *</label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                rows="3"
              />

              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            {renderInput("City", "city", "text", "Enter your city")}

          </div>

          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={(event) => setShowPassword(event.target.checked)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <div className="registration-actions">
            <button type="submit" className="submit-button">
              Submit Registration
            </button>

            <button
              type="button"
              className="clear-button"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>

        </form>

        <p className="registration-footer">
          * All fields are mandatory
        </p>

      </section>
    </main>
  );
}

export default Registration;
