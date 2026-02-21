import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "../App";

export const PrivateRoutes = () => {
  const navigate = useNavigate();

  async function handleClick() {
    const session = await supabase.auth.getSession();
    if (!session.data.session?.access_token) {
      await supabase.auth.signOut();
      toast.error("Please login first");
      navigate("/");
    }
  }

  useEffect(() => {
    handleClick();
  }, [navigate]);

  return <Outlet />;
};
