
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-center mb-8">
              Sign in to access your healthcare account
            </p>
            
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
