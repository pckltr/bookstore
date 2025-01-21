import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Profile updated successfully!");
  };

  const getInitials = () => {
    const { firstName, lastName } = form;
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
          {getInitials()}
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="block text-gray-700 font-medium">
            Date of Birth (Optional)
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
