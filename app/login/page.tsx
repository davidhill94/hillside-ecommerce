export const dynamic = "force-dynamic";
import { getCurrentUser } from "../../actions/getCurrentUser";
import FormWrap from "../components/FormWrap";
import LoginForm from "./loginForm";

const Login = async () => {
  const currentUser: any = await getCurrentUser();
  return (
    <div className="bg-primaryColor py-sectionV">
      <FormWrap>
        <LoginForm currentUser={currentUser}/>
      </FormWrap>
    </div>
  );
};

export default Login;
