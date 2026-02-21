import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";
import { loginUser } from "./LoginApis";
import { supabase } from "../../../App";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    usernameOrEmail: "",
    password: "",
    usernameOrEmailError: "",
    passwordError: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const user = await supabase.auth.getSession();
    if (user.data.session?.access_token) {
      navigate("/dashboard/blogs");
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (data.usernameOrEmail === "") {
      setData((prevData) => ({
        ...prevData,
        usernameOrEmailError: "Please enter a username or email",
      }));
      isValid = false;
    }
    if (data.password === "") {
      setData((prevData) => ({
        ...prevData,
        passwordError: "Please enter a password",
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = async (formData: any) => {
    loginUser(formData).then(() => {
      navigate("/dashboard/blogs");
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      handleLogin(data);
    }
  };

  const goToHome = () => {
    navigate("/home"); // Navigate to the '/home' route
  };
  return (
    <div className={styles.RegistrationWrapper}>
      <div className={styles.headers}>
        <h2>Hello Again!</h2>
        <h3>
          Welcome back to Opengrad - Admin,<br></br> login to continue
        </h3>
      </div>
      {/* <img src={image} alt="" /> */}
      <div className={styles.InputContainerWrapper}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={data.usernameOrEmail}
            onChange={(e) =>
              setData({
                ...data,
                usernameOrEmail: e.target.value,
                usernameOrEmailError: "",
              })
            }
          />
          {data.usernameOrEmailError && <p>{data.usernameOrEmailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
                passwordError: "",
              })
            }
          />
          {data.passwordError && <p>{data.passwordError}</p>}
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={handleSubmit}>Log In</button>
          <button onClick={goToHome}>Home</button>
        </div>
      </div>
    </div>
  );
};
