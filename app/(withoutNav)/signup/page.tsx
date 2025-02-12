import SignupForm from "@/components/signupCard";

export default function SignupPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-default-100">
        <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <SignupForm />
        </div>
      </div>
    );
  }
  