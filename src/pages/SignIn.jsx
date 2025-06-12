import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import Logo from "@/components/shared/LogoWithName";
import SocialMediaLinks from "@/components/shared/SocialMediaLinks";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (authError) {
      setAuthError("");
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Check credentials
      if (
        formData.email === "test@gmail.com" &&
        formData.password === "Admin123"
      ) {
        localStorage.setItem("IsSignIn", "true");
        setAuthError("");
        navigate("/");
      } else {
        setAuthError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 flex flex-col">
        <Card className="rounded-2xl shadow-lg border-2 border-blue-200">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="tracking-tight">
              {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learn Test Automation සිංහලෙන්
              </h1> */}
              <Logo name="Learn Test Automation සිංහලෙන්" className="mb-6" />
            </CardTitle>
            <CardDescription className="text-gray-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    name="email"
                    autoComplete="email"
                    className={`pl-10 ${
                      errors.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    className={`pl-10 pr-10 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Authentication Error */}
              {authError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {authError}
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
         <SocialMediaLinks  className="mt-6" />
        <p className="text-center text-gray-500 text-sm mt-3">
          By signing in, you agree to our{" "}
          <a
            href="https://example.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
