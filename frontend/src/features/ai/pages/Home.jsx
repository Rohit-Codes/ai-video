import React from "react";
import { useAuthContext } from "../../auth/hooks/useAuth";
import DashboardNavbar from "../../../components/DashboardNavbar";

const Home = () => {
  const { user } = useAuthContext();

  // console.log(user);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <DashboardNavbar />
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl text-white font-display">
          Welcome, {user?.username || "User"}
        </h1>
        {/* Main Content Here */}
      </main>
    </div>
  );
};

export default Home;
