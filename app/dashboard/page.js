"use client"
import React, { useState } from 'react';
import { Copy, RefreshCw, MoreVertical, Volume2, Eye, Globe, Settings } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const CharacterDescription = () => {
  const [characterName, setCharacterName] = useState('Dr. Maya Rahman');
  const [characterVoice, setCharacterVoice] = useState('Calm Japanese Female');
  const [backstory, setBackstory] = useState(`Dr. Maya Rahman was born and raised in a small village in Bangladesh. She is the second child out of four siblings. Her father was a simple farmer who worked hard to provide for the family, while her mother was a teacher at the village school.

Since childhood, Maya has shown a strong interest in science and healthcare. She always wanted to help others and dreamed of becoming a doctor to heal the sick in her village.`);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <div className="space-y-4">
          <div className="bg-green-100 p-3 rounded-lg flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
              👤
            </div>
            <span className="text-green-800">Character Description</span>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-2 p-2">
              <span>💭</span>
              <span>Language And Speech</span>
            </div>
            <Link href="/dashboard/knowledge" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <span>💡</span>
              <span>Knowledge Bank</span>
            </Link>
            <div className="flex items-center space-x-2 p-2">
              <span>🔄</span>
              <span>Personality & Style</span>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <span>🧠</span>
              <span>State Of Mind</span>
            </div>
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
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-green-800">Character Description</h2>
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
              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">
                  Character's ID
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value="8d843920-c7f5-f1ee-90a6-42010a40000f"
                    readOnly
                    className="flex-1 p-2 border rounded-lg bg-gray-50 text-gray-500"
                  />
                  <button className="ml-2 p-2 hover:bg-gray-100 rounded-lg">
                    <Copy className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Character's Name
                  </label>
                  <input
                    type="text"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Character's Voice
                  </label>
                  <select
                    value={characterVoice}
                    onChange={(e) => setCharacterVoice(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option>Calm Japanese Female</option>
                    <option>Other Voice Options...</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">
                  Character's Backstory
                </label>
                <textarea
                  value={backstory}
                  onChange={(e) => setBackstory(e.target.value)}
                  rows={6}
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
        
        <div className="mt-8 bg-white rounded-lg p-4 h-96 flex items-center justify-center text-gray-500">
          Loading avatar...
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

export default CharacterDescription;