import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      {/* Controlled form */}
      <RegistrationForm />

      <hr style={{ margin: "40px 0" }} />

      {/* Formik form */}
      <FormikForm />
    </div>
  );
}

export default App;
