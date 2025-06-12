import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SocialMediaLinks from "@/components/shared/SocialMediaLinks";
import Logo from "../components/shared/Logo";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    interests: [],
    gender: "male",
    hobbies: [],
    file: null,
  });

  const [showAlert, setShowAlert] = useState(false);

  const interests = [
    { id: "cbkCSharp", name: "C#" },
    { id: "cbkSeleniumGrid", name: "Selenium Grid" },
    { id: "cbkDevelopment", name: "Development" },
    { id: "cbkTesting", name: "Testing" },
    { id: "cbkAWS", name: "AWS" },
    { id: "cbkPlaywright", name: "Playwright" },
    { id: "cbkAppuTestCategory", name: "Appu Test Category" },
    { id: "cbkTechnology", name: "Technology" },
    { id: "cbkCourseNewAppu", name: "Course New Appu" },
  ];

  const hobbies = [
    "Reading",
    "Gaming",
    "Cooking",
    "Sports",
    "Music",
    "Travel",
    "Photography",
    "Art",
  ];

  const handleInterestChange = (interest, checked) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }));
  };

  const handleHobbyChange = (selectedHobbies) => {
    setFormData((prev) => ({ ...prev, hobbies: selectedHobbies }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}

        {/* Success Alert */}
        {showAlert && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">
              Sign up successful! Welcome to our platform.
            </AlertDescription>
          </Alert>
        )}

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6">
          <div className="flex flex-col py-6 gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sign Up
            </h1>
            <Logo height={24} />
          </div>

          <div className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="txtName"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="rounded-lg border-gray-300"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="txtEmail"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="rounded-lg border-gray-300"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="txtPassword"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="rounded-lg border-gray-300"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>
              <div className="relative">
                <Input
                  id="txtFile"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="rounded-lg border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Interests</Label>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest) => (
                  <div
                    key={interest.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={interest.id}
                      checked={formData.interests.includes(interest.name)}
                      onCheckedChange={(checked) =>
                        handleInterestChange(interest.name, checked)
                      }
                    />
                    <Label htmlFor={interest.name} className="text-sm">
                      {interest.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="rdMale" name="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="rdFemale" name="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Hobbies */}
            <div className="space-y-2">
              <Label>Hobbies</Label>
              <Select
                onValueChange={(value) =>
                  handleHobbyChange([...formData.hobbies, value])
                }
              >
                <SelectTrigger className="rounded-lg border-gray-300">
                  <SelectValue
                    placeholder={`${formData.hobbies.length} selected`}
                  />
                </SelectTrigger>
                <SelectContent>
                  {hobbies.map((hobby, idx) => (
                    <SelectItem key={hobby} value={hobby} index={idx}>
                      {hobby}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium mt-6"
              id="btnSignUp"
              name="signUp"
            >
              Sign up
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already a user?{" "}
            <a
              // href="#"
              className="text-blue-600 hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <SocialMediaLinks className="mt-6" />
      </div>
    </div>
  );
}

export default Register;
