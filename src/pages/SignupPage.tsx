
import Layout from "@/components/layout/Layout";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-2">Create an Account</h1>
            <p className="text-gray-600 text-center mb-8">
              Join Healwise for better healthcare management
            </p>
            
            <SignupForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
