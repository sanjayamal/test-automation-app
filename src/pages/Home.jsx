import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isSignIn = !!localStorage.getItem("IsSignIn");

  useEffect(() => {
    if (!isSignIn) {
      navigate("/login");
    }
  }, [isSignIn]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learn Test Automation
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a> */}
              </div>
            </nav>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                {isSignIn && (
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </Button>
                )}
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => {
                    navigate("/login");
                    isSignIn && localStorage.removeItem("IsSignIn");
                  }}
                >
                  {isSignIn ? "Logout" : "Login"}
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {/* <a
                  href="#features"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Contact
                </a> */}
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-3 space-x-3">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="mb-4 sm:mb-6">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm"
                >
                  🚀 New Features Available
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Build Amazing
                <span className="block text-blue-600">Digital Experiences</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Transform your ideas into powerful applications with our
                cutting-edge platform. Join thousands of developers who trust
                TechFlow for their next big project.
              </p>
              <div className="mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3"
                  >
                    Watch Demo
                  </Button>
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                  No credit card required • 14-day free trial
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    src="/placeholder.svg?height=400&width=600"
                    alt="Dashboard Preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you
              need to build, deploy, and scale your applications with
              confidence.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription>
                  Built for speed with optimized performance and instant loading
                  times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Secure by Default</CardTitle>
                <CardDescription>
                  Enterprise-grade security with end-to-end encryption and
                  compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Global Scale</CardTitle>
                <CardDescription>
                  Deploy worldwide with our global CDN and edge computing
                  infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
                <CardDescription>
                  Work together seamlessly with real-time collaboration tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Easy Integration</CardTitle>
                <CardDescription>
                  Connect with your favorite tools and services with one-click
                  integrations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
                <CardDescription>
                  Get help when you need it with our dedicated support team.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Trusted by developers worldwide
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                TechFlow has been the go-to platform for developers who want to
                build exceptional digital experiences. Our mission is to make
                development faster, easier, and more enjoyable.
              </p>
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    99.9% uptime guarantee
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    SOC 2 Type II compliant
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    GDPR ready
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    24/7 monitoring
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team collaboration"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it - hear from some of our satisfied
              customers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "TechFlow has completely transformed how we build and deploy
                  our applications. The developer experience is unmatched."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sarah Johnson"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-500">CTO, StartupCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The performance improvements we've seen since switching to
                  TechFlow have been incredible. Our users love the faster load
                  times."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/placeholder.svg?height=48&width=48"
                    alt="Michael Chen"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-500">
                      Lead Developer, TechCorp
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The support team is amazing. They helped us migrate our
                  entire infrastructure seamlessly. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/placeholder.svg?height=48&width=48"
                    alt="Emily Rodriguez"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Emily Rodriguez
                    </div>
                    <div className="text-sm text-gray-500">
                      DevOps Engineer, ScaleCo
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of developers who are already building amazing
              things with TechFlow. Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex w-full max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none bg-white"
                />
                <Button className="rounded-l-none bg-blue-800 hover:bg-blue-900">
                  Get Started
                </Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Learn Test Automation
              </h3>
              <p className="mt-4 text-gray-400 max-w-md">
                Building the future of web development, one application at a
                time. Join our community of developers and creators.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Learn Test Automation Sinhalen.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
