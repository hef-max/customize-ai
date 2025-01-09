"use client"
import React, { useState } from 'react';
import { MoreVertical, Volume2, Eye, Globe, Settings, Upload, Info } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const KnowledgeBank = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <div className="space-y-4">
        <Link href="/dashboard" className="flex p-3 rounded-lg flex items-center space-x-2">
            <span>👤</span>
            <span>Character Description</span>
        </Link>
          
          <div className="p-3 rounded-lg flex items-center space-x-2">
            <div className="w-6 h-6 text-gray-600">💭</div>
            <span className="text-gray-600">Language And Speech</span>
          </div>

          <div className="bg-green-100 p-3 rounded-lg flex items-center space-x-2">
            <div className="w-6 h-6 text-green-600">💡</div>
            <span className="text-green-800">Knowledge Bank</span>
          </div>

          {/* Other menu items */}
          {['Personality & Style', 'State Of Mind', 'Memory', 'Core AI Settings'].map((item, index) => (
            <div key={index} className="p-3 rounded-lg flex items-center space-x-2">
              <div className="w-6 h-6 text-gray-600">
                {index === 0 && '🔄'}
                {index === 1 && '🧠'}
                {index === 2 && '🕒'}
                {index === 3 && '⚠️'}
              </div>
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-green-800">Knowledge Bank</h2>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="text-gray-500 mb-6 flex items-center">
              Learn more on how to use Knowledge Bank 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-green-800">
                Upload Knowledge
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-600">
                Add Knowledge
              </button>
            </div>

            <div 
              className={`border-2 border-dashed rounded-lg p-10 text-center ${dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrag}
            >
              <div className="flex justify-center mb-4">
                <Upload className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">Select a file or drag and drop here</p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
                Select File
              </button>
            </div>

            <div className="flex items-center mt-4 text-gray-500 text-sm">
              <Info className="w-4 h-4 mr-2" />
              Supported file: .txt format & total size of files shouldn't be more than 1 MB
            </div>

            <div className="mt-8">
              <h3 className="text-green-800 font-medium mb-4">Available files on your account</h3>
              <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
                No knowledge bank files uploaded on this account.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-100 to-blue-50 p-4">
        <div className="flex flex-col items-end space-y-2">
          <button className="p-2 bg-white rounded-full shadow-sm">
            <Volume2 className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm">
            <Globe className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-4 h-96 flex items-center justify-center">
          <img 
            src="/api/placeholder/400/320"
            alt="Avatar" 
            className="w-32 h-64 object-contain"
          />
        </div>

        <div className="mt-4">
          <div className="flex space-x-2 mb-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              Hi Dr. Rahman, your story is truly inspiring!
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              What motivated...
            </div>
          </div>

          <div className="flex items-center bg-white rounded-lg p-2">
            <input
              type="text"
              placeholder="Start a conversation"
              className="flex-1 border-none focus:outline-none"
            />
            <button className="p-2 text-green-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBank;