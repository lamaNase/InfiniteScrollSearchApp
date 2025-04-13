import { useEffect, useState } from "react";
import Classes from "./login.module.css";

function Login() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <button className={Classes.login}>{isMobile ? "دخول" : "تسجيل الدخول"}</button>;
}

export default Login;