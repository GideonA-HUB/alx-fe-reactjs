import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    alert("Formik form submitted successfully!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Formik Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="block mb-2 font-medium">Username:</label>
          <Field
            type="text"
            name="username"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-600 text-sm mb-2"
          />

          <label className="block mb-2 font-medium">Email:</label>
          <Field
            type="email"
            name="email"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-600 text-sm mb-2"
          />

          <label className="block mb-2 font-medium">Password:</label>
          <Field
            type="password"
            name="password"
            className="w-full p-2 mb-2 border rounded"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-600 text-sm mb-2"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
