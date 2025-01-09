import React from 'react';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section - Full width green background */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-b-[2rem] overflow-hidden">
        {/* Navigation */}
        <nav className="p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-white text-2xl font-bold">convai</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <NavLink>Features</NavLink>
              <NavLink>Use Cases</NavLink>
              <NavLink>Gallery</NavLink>
              <NavLink>Docs</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Plugins</NavLink>
              <NavLink>Videos</NavLink>
            </div>

            <Button className="bg-green-500 hover:bg-green-400 text-white px-6">
              Sign In
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="relative">
            {/* Floating Tags */}
            <FloatingTag className="top-[-2rem] left-16">Open Ended Dialogue</FloatingTag>
            <FloatingTag className="top-[-4rem] right-64">Digital Humans</FloatingTag>
            <FloatingTag className="top-8 left-24">AI Assistants</FloatingTag>
            <FloatingTag className="top-[-1rem] right-32">Ask Anything</FloatingTag>
            <FloatingTag className="top-16 right-48">Virtual Characters</FloatingTag>
            <FloatingTag className="top-24 right-16">Intelligent NPC</FloatingTag>
            <FloatingTag className="top-32 right-64">Voice Based Characters</FloatingTag>
            <FloatingTag className="top-20 left-48">Expert Characters</FloatingTag>

            {/* Main Hero Content */}
            <div className="flex justify-between items-center gap-12">
              <div className="max-w-xl">
                <h1 className="text-6xl font-bold text-white leading-tight mb-4">
                  Embodied AI Characters
                </h1>
                <h2 className="text-5xl font-bold text-green-400 mb-6">
                  For Virtual Worlds
                </h2>
                <p className="text-white/90 text-xl">
                  Enable your character with human-like conversation capabilities in games and virtual world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500"></div>
            <span className="text-sm font-medium text-green-500 uppercase tracking-wider">
              HOW IT WORKS
            </span>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold max-w-4xl leading-tight">
              Easy-to-use interface to create your characters' intelligence, and plugins
              <span className="text-gray-400"> to connect them to your character assets and worlds.</span>
            </h2>
            <div className="absolute w-3 h-3 bg-green-500 rounded-full -top-8 left-0"></div>
          </div>
        </div>

        {/* Interface Preview */}
        <div className="flex gap-12 items-start">
          <div className="w-1/3">
            <div className="text-6xl font-bold text-gray-900 mb-6">1</div>
            <h3 className="text-2xl">
              <span className="text-green-500 font-bold">Create</span> your character with the right <span className="font-bold">backstory, voice and expertise</span>, and <span className="font-bold">test</span> it on the playground.
            </h3>
          </div>
          
          <div className="w-2/3">
            <div className="bg-gray-50 rounded-xl shadow-lg p-4">
              <img 
                src="/api/placeholder/800/500" 
                alt="Character Creation Interface"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

    {/* Step 2 - Game Engine Integration */}
    <div className="mt-32 relative">
      {/* Green connecting line */}
      <div className="absolute left-16 -top-32 w-1 h-32 bg-green-500"></div>
      
      <div className="flex gap-12 items-start">
        <div className="w-1/3">
          <div className="text-6xl font-bold text-gray-900 mb-6">2</div>
          <h3 className="text-2xl">
            <span className="text-green-500 font-bold">Connect</span> with your NPC assets inside <span className="font-bold">game engines</span> using our <span className="text-green-500 font-bold">integrations</span>
          </h3>
        </div>
        
        <div className="w-2/3">
          <div className="bg-white p-12 rounded-xl">
            <div className="grid grid-cols-2 gap-12 items-center justify-items-center">
              {/* Unity */}
              <div className="w-32 h-32 flex items-center justify-center">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Unity Logo"
                  className="w-full"
                />
                <div className="mt-4 text-center font-medium">unity</div>
              </div>
              
              {/* Unreal */}
              <div className="w-32 h-32 flex items-center justify-center">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Unreal Engine Logo"
                  className="w-full"
                />
                <div className="mt-4 text-center font-medium">UNREAL ENGINE</div>
              </div>
              
              {/* JavaScript */}
              <div className="w-32 h-32 flex items-center justify-center">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="JavaScript Logo"
                  className="w-full"
                />
                <div className="mt-4 text-center font-medium">JavaScript</div>
              </div>
              
              {/* Placeholder for future integration */}
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Step 3 - Virtual World Interaction */}
    <div className="mt-32 relative">
      {/* Green connecting line from Step 2 */}
      <div className="absolute left-16 -top-32 w-1 h-32 bg-green-500"></div>
      
      <div className="flex gap-12 items-start relative">
        {/* Green connecting line to the right */}
        <div className="absolute right-0 top-48 w-32 h-1 bg-green-500"></div>
        {/* Green dot at the end */}
        <div className="absolute right-32 top-48 w-2 h-2 bg-green-500"></div>
        
        <div className="w-1/3">
          <div className="text-6xl font-bold text-gray-900 mb-6">3</div>
          <h3 className="text-2xl leading-relaxed">
            Your character inside the virtual world can have 
            <span className="font-bold"> open ended voice based </span>
            <span className="text-green-500 font-bold">conversations</span> and 
            <span className="font-bold"> carry out </span>
            <span className="text-green-500 font-bold">actions</span>.
          </h3>
        </div>
        
        <div className="w-2/3">
          <div className="relative">
            {/* Green dots for decoration */}
            <div className="absolute -top-8 -left-8 w-2 h-2 bg-green-500"></div>
            <div className="absolute -top-12 left-8 w-2 h-2 bg-green-500"></div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/800/450" 
                alt="Virtual World Interaction"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                <p className="text-white text-center text-lg">
                  I am here to offer a relic of ancient spirits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Step 4 - Youtube */}
    <div className="mt-32 relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-green-500/30 blur-xl rounded-xl"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/QcEAPOGLVDM?start=326"
          title="MindCura Video"
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="mt-32 relative bg-black text-white py-16 px-8 lg:px-32">
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
    {/* Bagian Kiri - Text */}
    <div className="lg:w-1/2 space-y-8">
      <h3 className="text-green-500 uppercase tracking-wide font-semibold">Product Features</h3>
      <h1 className="text-4xl lg:text-5xl font-bold">
        Experience the cutting edge of Generative Conversational AI
      </h1>
      <ul className="space-y-4">
        <li>
          <span className="text-green-500 font-bold mr-2">[01]</span>
          <span className="text-xl">Conversational AI for Virtual Worlds</span>
        </li>
        <li>
          <span className="text-gray-400 font-bold mr-2">[02]</span>
          <span className="text-xl text-gray-400">Add unlimited knowledge to make your character an expert</span>
        </li>
        <li>
          <span className="text-gray-400 font-bold mr-2">[03]</span>
          <span className="text-xl text-gray-400">Scene perception and actions</span>
        </li>
      </ul>
    </div>

    {/* Bagian Kanan - Gambar */}
    <div className="relative mt-16 lg:mt-0 lg:w-1/2">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-green-500/30 blur-lg rounded-xl"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400" // Ganti dengan URL gambar Anda
          alt="AI Features"
          className="w-full h-full object-cover"
        />
        {/* Label di atas gambar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-black font-bold">🔊</span>
            </div>
            <p className="text-lg text-green-500 font-semibold">Speech-to-text</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-black font-bold">🧠</span>
            </div>
            <p className="text-lg text-green-500 font-semibold">Language understanding & generation</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-black font-bold">🗣️</span>
            </div>
            <p className="text-lg text-green-500 font-semibold">Text-to-speech</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div className="mt-32 relative">
  
    <div class="text-center">
      <h2 class="text-green-600 text-sm font-semibold">PRODUCT FEATURES</h2>
      <h1 class="text-4xl font-bold mt-4">How it all works.</h1>
    </div>

    <div class="mt-12 grid grid-cols-4 gap-8 items-center">
      <div class="text-center">
        <img 
            src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
            alt="Gaming character"
            className="w-full h-full object-cover"
          />
        <h3 class="text-lg font-bold mt-4">Craft Character's Mind</h3>
      </div>
      <div class="flex justify-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
      </div>

      <div class="text-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
        <h3 class="text-lg font-bold mt-4">Add Voices</h3>
        <p class="text-sm mt-2">Voice Input (STT) → Voice Output (TTS)</p>
      </div>
      <div class="flex justify-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
      </div>

      <div class="text-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
        <h3 class="text-lg font-bold mt-4">Avatar Embodiment</h3>
      </div>
      <div class="flex justify-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
      </div>

      <div class="text-center">
      <img 
          src="https://www.youtube.com/watch?v=QcEAPOGLVDM&t=326s&pp=ygUIbWluZGN1cmE%3D"
          alt="Gaming character"
          className="w-full h-full object-cover"
        />
        <h3 class="text-lg font-bold mt-4">Perception and Actions</h3>
        <p class="text-sm mt-2">Object Awareness, Dynamic Actions, Environment Awareness</p>
      </div>
    </div>
  </div>

  </div>
</div>

  );
};

// Navigation Link Component
const NavLink = ({ children }) => (
  <a href="#" className="text-white/80 hover:text-white transition-colors">
    {children}
  </a>
);

// Floating Tag Component
const FloatingTag = ({ children, className }) => (
  <div className={`absolute bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white/90 animate-float ${className}`}>
    {children}
  </div>
);

export default LandingPage;
