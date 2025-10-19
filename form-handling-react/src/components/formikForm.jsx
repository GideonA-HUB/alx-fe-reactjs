import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

function FormikForm() {
  const handleSubmit = (values) => {
    console.log("Formik Form Submitted:", values);
    alert("Formik Registration successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">User Registration (Formik)</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="block mb-2 font-medium">Username:</label>
          <Field
            name="username"
            type="text"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage name="username" component="div" className="text-red-600 text-sm mb-4" />

          <label className="block mb-2 font-medium">Email:</label>
          <Field
            name="email"
            type="email"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-600 text-sm mb-4" />

          <label className="block mb-2 font-medium">Password:</label>
          <Field
            name="password"
            type="password"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage name="password" component="div" className="text-red-600 text-sm mb-4" />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
