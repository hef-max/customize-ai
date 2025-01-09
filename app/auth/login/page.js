import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-green-600">convai</span>
            <span className="ml-2 text-sm text-gray-600">Conversational AI for Metaverse</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600">Playground</a>
            <a href="#" className="text-gray-600">Videos</a>
            <a href="#" className="text-gray-600">Docs</a>
            <a href="#" className="text-gray-600">Pricing</a>
            <a href="#" className="text-gray-600">Contact</a>
            <Button className="bg-green-700 hover:bg-green-800">Register</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-green-800">Sign in</h1>
              <p className="text-gray-500">Fill in the fields below to sign into your account.</p>
            </div>

            <div className="space-y-4">
              <div>
                <Input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="relative">
                <Input 
                  type="password" 
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Eye className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div>
                <a href="#" className="text-green-700 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800">
                Sign in
              </Button>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center">
                  <span className="text-gray-500">Don't have an account yet?</span>
                  <a href="#" className="ml-1 text-green-700 hover:underline">
                    Sign up here
                  </a>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border flex items-center justify-center space-x-2"
                  >
                    <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    <span>Sign in with Google</span>
                  </Button>

                  <Button 
                    variant="outline"
                    className="w-full bg-black text-white border-black flex items-center justify-center space-x-2"
                  >
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                    <span>Sign in with Github</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;