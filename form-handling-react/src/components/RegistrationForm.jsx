import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("User Registered:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Username:</label>
        <input
          type="text"
          name="username"
          className="w-full p-2 mb-4 border rounded"
          value={formData.username}
          onChange={handleChange}
        />

        <label className="block mb-2 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="block mb-2 font-medium">Password:</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 mb-4 border rounded"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
