import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data:", values);
    alert("Form submitted successfully!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Formik Registration Form
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-1">
                Username
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
