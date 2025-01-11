"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Copy, RefreshCw, MoreVertical, Volume2, Eye, Globe, Settings } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const CharacterDescription = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [characterName, setCharacterName] = useState('Dr. Maya Rahman');
  const [characterVoice, setCharacterVoice] = useState('Calm Japanese Female');
  const [backstory, setBackstory] = useState(`Dr. Maya Rahman was born and raised in a small village in Bangladesh. She is the second child out of four siblings. Her father was a simple farmer who worked hard to provide for the family, while her mother was a teacher at the village school.

Since childhood, Maya has shown a strong interest in science and healthcare. She always wanted to help others and dreamed of becoming a doctor to heal the sick in her village.`);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-blue-400 text-white transform z-50 transition-transform duration-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex mt-5 md:shadow-none md:bg-transparent`}>
        <div className="p-4 space-y-4">
          <div className="bg-blue-200 shadow-xl p-3 rounded-lg flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
              👤
            </div>
            <span className="text-l text-green-800">Character Description</span>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <Link href="/dashboard/knowledge" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <span>💡</span>
              <span>Knowledge Bank</span>
            </Link>
            <div className="flex items-center space-x-2 p-2">
              <span>🕒</span>
              <span>Memory</span>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <span>⚠️</span>
              <span>Core AI Settings</span>
            </div>
          </div>
        </div>
      </aside>
      {/* Tombol Burger */}
      {!isSidebarOpen && (
        <button
          className="fixed top-1 left-1 z-50 p-2 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Icon icon="stash:burger-classic" width="30" height="30" />
        </button>
      )}
      {/* Tombol Times */}
      {isSidebarOpen && (
        <button
          className="absolute top-2 right-2 z-50 p-2 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <Icon icon="stash:times-duotone" width="35" height="35" />
        </button>
      )}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-xs z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row gap-3 p-3">
          {/* Main Content */}
            <div className="w-full md:flex-1 mb-6 mt-6">
              <Card className="w-full h-full shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-[#397AEA]">Character Description</h2>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <RefreshCw className="w-5 h-5 text-gray-500" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Character's ID */}
                    <div>
                      <label className="block text-sm font-medium text-[#397AEA] mb-1">
                        Character's ID
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value="8d843920-c7f5-f1ee-90a6-42010a40000f"
                          readOnly
                          className="flex-1 p-2 border rounded-full bg-gray-50 text-gray-500"
                        />
                        <button className="ml-2 p-2 hover:bg-gray-100 rounded-lg">
                          <Copy className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    </div>

                    {/* Grid Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#397AEA] mb-1">
                          Character's Name
                        </label>
                        <input
                          type="text"
                          value={characterName}
                          onChange={(e) => setCharacterName(e.target.value)}
                          className="w-full p-2 border rounded-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#397AEA] mb-1">
                          Character's Voice
                        </label>
                        <select
                          value={characterVoice}
                          onChange={(e) => setCharacterVoice(e.target.value)}
                          className="w-full p-3 border rounded-full"
                        >
                          <option>Calm Japanese Female</option>
                          <option>Other Voice Options...</option>
                        </select>
                      </div>
                    </div>

                    {/* Backstory */}
                    <div>
                      <label className="block text-sm font-medium text-[#397AEA] mb-1">
                        Character's Backstory
                      </label>
                      <textarea
                        value={backstory}
                        onChange={(e) => setBackstory(e.target.value)}
                        rows={10}
                        className="w-full p-2 border rounded-lg resize-none"
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        274/1000 words
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="w-full md:w-72 mt-6 mb-6">
              <Card className="w-full shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="m-1 bg-black rounded-lg p-4 h-96 flex flex-col justify-center text-gray-500">
                    <p className="m-auto text-lg font-medium">Loading Avatar...</p>
                    <div className="flex flex-wrap gap-2 items-center justify-end">
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition">
                        <Volume2 className="w-4 h-4 text-[#397AEA]" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition">
                        <Eye className="w-4 h-4 text-[#397AEA]" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition">
                        <Globe className="w-4 h-4 text-[#397AEA]" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition">
                        <Settings className="w-4 h-4 text-[#397AEA]" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-2 mb-4">
                      <div className="inline-block bg-blue-300 text-black px-4 py-2 rounded-full text-xs">
                        Hi Dr. Rahman!
                      </div>
                      <div className="bg-blue-300 text-black px-4 py-2 rounded-full text-xs">
                        What motivated you now?
                      </div>
                      <div className="bg-blue-300 text-black px-4 py-2 rounded-full text-xs">
                        OK thanks
                      </div>
                    </div>

                    <div className="flex items-center bg-gray-200 rounded-full pl-3 pr-3">
                      <input
                        type="text"
                        placeholder="Start a conversation"
                        className="flex-1 border-none bg-gray-200 focus:outline-none"
                      />
                      <button className="p-2 text-[#397AEA]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>  
    </div>
  );
};

export default CharacterDescription;