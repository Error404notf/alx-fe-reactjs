import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log("Submitted:", values);

          // simulate API request
          setTimeout(() => {
            alert("User registered successfully!");
            actions.resetForm();
          }, 800);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username */}
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />

            {/* Email */}
            <label style={{ marginTop: "10px", display: "block" }}>
              Email:
            </label>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />

            {/* Password */}
            <label style={{ marginTop: "10px", display: "block" }}>
              Password:
            </label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "purple",
                color: "white",
              }}
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
