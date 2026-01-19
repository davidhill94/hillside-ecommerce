export const dynamic = "force-dynamic";
import { getCurrentUser } from "../../actions/getCurrentUser";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./registerForm";

const Register = async() => {

  const currentUser: any = await getCurrentUser();

  return (
    <div className="bg-primaryColor py-sectionV">
      <FormWrap>
        <RegisterForm currentUser={currentUser}/>
      </FormWrap>
    </div>
  );
};

export default Register;
