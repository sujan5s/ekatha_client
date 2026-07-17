"use client";

import React, { useState, useEffect, useRef } from "react";

// Types for interactive simulator
interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  isSelf: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  status: "online" | "away" | "busy";
  avatar: string;
}

export default function Home() {
  // State for interactive features
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Aditya Sharma",
      avatar: "AS",
      content: "Welcome to Ekatha! We are setting up our main client application today.",
      time: "10:24 AM",
      isSelf: false,
    },
    {
      id: "2",
      sender: "Sarah Jenkins",
      avatar: "SJ",
      content: "The Next.js + Tailwind CSS v4 setup is working perfectly. The performance is incredible! ⚡",
      time: "10:25 AM",
      isSelf: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [synergyLevel, setSynergyLevel] = useState(85);
  const [activeTab, setActiveTab] = useState<"chat" | "tasks" | "members">("chat");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Initialize Next.js app in ekatha_client", completed: true },
    { id: 2, text: "Configure Tailwind CSS v4", completed: true },
    { id: 3, text: "Build premium interactive landing page", completed: true },
    { id: 4, text: "Deploy to Vercel/Staging", completed: false },
  ]);
  const [members, setMembers] = useState<TeamMember[]>([
    { name: "Aditya Sharma", role: "Product Architect", status: "online", avatar: "AS" },
    { name: "Sarah Jenkins", role: "Frontend Lead", status: "online", avatar: "SJ" },
    { name: "Sujan Roy", role: "Lead Engineer", status: "online", avatar: "SR" },
    { name: "Elena Rostova", role: "UI/UX Designer", status: "away", avatar: "ER" },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle task toggle
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    
    // Calculate new synergy level
    const completedCount = updatedTasks.filter((t) => t.completed).length;
    const newLevel = Math.round((completedCount / updatedTasks.length) * 100);
    setSynergyLevel(newLevel);
  };

  // Handle message sending
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "You (Sujan)",
      avatar: "YO",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Simulate mock teammate response after 1.5 seconds
    setTimeout(() => {
      const responses = [
        "That sounds like a solid plan. Let's make it happen!",
        "Agreed! Ekatha brings all our tools together so smoothly.",
        "Perfect. I will start reviewing the code changes immediately.",
        "Awesome! The layout looks absolutely stunning.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "Sarah Jenkins",
        avatar: "SJ",
        content: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSelf: false,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
      
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Glassmorphic Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/40 bg-zinc-950/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/20">
              <span className="text-xl font-black text-white tracking-wider">ए</span>
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              EKATHA
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-zinc-100 transition-colors">Features</a>
            <a href="#simulator" className="hover:text-zinc-100 transition-colors">Live Demo</a>
            <a href="#architecture" className="hover:text-zinc-100 transition-colors">Architecture</a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              v1.0.0 Stable
            </span>
            <a
              href="#simulator"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 px-4 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              Try Simulator
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-sm mb-6 hover:border-zinc-700 transition-colors">
            <span className="font-semibold text-indigo-400">Introducing Ekatha Client</span>
            <span className="h-4 w-px bg-zinc-800" />
            <span>Next.js & Tailwind CSS v4 Stack</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
            Where Team Oneness Meets{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Flawless Code Execution
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Ekatha brings developer synergy to life. Combining Next.js server-side performance, React 19 interactive reactivity, and Tailwind CSS v4 utility speed.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 font-medium text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Interactive Workspace
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 font-medium text-zinc-300 hover:bg-zinc-800/60 hover:text-white transition-all backdrop-blur-sm"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Simulator (The Wow Factor Component) */}
      <section id="simulator" className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Interactive Ekatha Hub</h2>
            <p className="text-zinc-400 mt-2">Test out our workspace simulation. Click tasks, send messages, and monitor team status live.</p>
          </div>

          {/* Glassmorphic Workspace Dashboard Wrapper */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-2xl backdrop-blur-xl overflow-hidden">
            
            {/* Dashboard Header Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-800/80 bg-zinc-950/40 px-6 py-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="h-4 w-px bg-zinc-800 ml-2" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Workspace:</span>
                  <span className="text-sm font-semibold text-indigo-400">Ekatha Core Suite</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex bg-zinc-950/80 p-1 rounded-lg border border-zinc-850">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeTab === "chat"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Synergy Chat
                </button>
                <button
                  onClick={() => setActiveTab("tasks")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeTab === "tasks"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Tasks ({tasks.filter(t => !t.completed).length})
                </button>
                <button
                  onClick={() => setActiveTab("members")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeTab === "members"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Team Status
                </button>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
              
              {/* Left sidebar: Synergy Meter & Project Info */}
              <div className="md:col-span-1 border-r border-zinc-800/80 bg-zinc-950/20 p-6 flex flex-col justify-between gap-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Workspace Synergy</h4>
                  <div className="relative flex items-center justify-center py-4">
                    
                    {/* Ring indicator */}
                    <div className="w-32 h-32 rounded-full border-4 border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent transition-all duration-500" 
                        style={{ height: `${synergyLevel}%` }}
                      />
                      <span className="text-3xl font-extrabold text-white tracking-tight relative z-10">{synergyLevel}%</span>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider relative z-10">Connected</span>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 text-center mt-2 leading-normal">
                    Complete tasks to boost workspace cohesion and team alignment.
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-950/50 p-4 border border-zinc-850">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    Stack Confirmed
                  </div>
                  <div className="mt-3 text-[11px] space-y-1.5 text-zinc-400">
                    <p><span className="font-semibold text-zinc-300">Framework:</span> Next.js v16.2</p>
                    <p><span className="font-semibold text-zinc-300">CSS engine:</span> Tailwind CSS v4</p>
                    <p><span className="font-semibold text-zinc-300">Language:</span> TypeScript</p>
                    <p><span className="font-semibold text-zinc-300">Location:</span> /ekatha_client</p>
                  </div>
                </div>
              </div>

              {/* Main Active Tab Content */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between min-h-[350px]">
                
                {/* 1. Synergy Chat Tab */}
                {activeTab === "chat" && (
                  <div className="flex flex-col flex-1 justify-between h-full">
                    {/* Messages list */}
                    <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex items-start gap-3 ${msg.isSelf ? "flex-row-reverse" : ""}`}
                        >
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                            msg.isSelf
                              ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                              : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                          }`}>
                            {msg.avatar}
                          </div>
                          <div className={`flex flex-col ${msg.isSelf ? "items-end" : ""}`}>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-semibold text-zinc-300">{msg.sender}</span>
                              <span className="text-[10px] text-zinc-500">{msg.time}</span>
                            </div>
                            <div className={`mt-1.5 rounded-xl px-4 py-2 text-sm leading-relaxed max-w-sm ${
                              msg.isSelf
                                ? "bg-indigo-600 text-white rounded-tr-none"
                                : "bg-zinc-800/80 text-zinc-200 border border-zinc-700/40 rounded-tl-none"
                            }`}>
                              {msg.content}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>

                    {/* Chat input form */}
                    <form onSubmit={handleSendMessage} className="mt-4 flex gap-2 pt-4 border-t border-zinc-800/60">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a synergy message (e.g. 'Setup complete')..."
                        className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                      <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl px-5 transition-colors shadow-md shadow-indigo-600/10 active:scale-95 duration-100"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                )}

                {/* 2. Tasks Tab */}
                {activeTab === "tasks" && (
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-zinc-200">Interactive Setup Checklist</h3>
                        <span className="text-xs text-zinc-500">Click checkboxes to toggle status</span>
                      </div>
                      <div className="space-y-2.5">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`flex items-center gap-3.5 p-3 rounded-xl border transition-all cursor-pointer ${
                              task.completed
                                ? "bg-indigo-500/5 border-indigo-500/20 text-zinc-400"
                                : "bg-zinc-950/30 border-zinc-800/80 text-zinc-200 hover:border-zinc-700"
                            }`}
                          >
                            <div className={`h-5.5 w-5.5 rounded-md border flex items-center justify-center transition-all ${
                              task.completed
                                ? "bg-indigo-600 border-indigo-600 text-white"
                                : "border-zinc-700 hover:border-zinc-500"
                            }`}>
                              {task.completed && (
                                <svg className="h-3.5 w-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm select-none ${task.completed ? "line-through" : ""}`}>
                              {task.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500 mt-4 leading-normal bg-zinc-950/40 p-3 rounded-lg border border-zinc-900">
                      💡 Changing task completion triggers calculations that adjust the synergy meter dynamically.
                    </div>
                  </div>
                )}

                {/* 3. Team Status Tab */}
                {activeTab === "members" && (
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-200 mb-4">Workspace Co-workers</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {members.map((member, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/80"
                          >
                            <div className="relative">
                              <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-zinc-700/60 rounded-xl flex items-center justify-center text-xs font-bold text-indigo-400">
                                {member.avatar}
                              </div>
                              <span className={`absolute bottom-[-2px] right-[-2px] h-3 w-3 rounded-full border-2 border-zinc-900 ${
                                member.status === "online"
                                  ? "bg-emerald-400"
                                  : member.status === "away"
                                  ? "bg-amber-400"
                                  : "bg-rose-400"
                              }`} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-zinc-200">{member.name}</p>
                              <p className="text-xs text-zinc-500">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500 mt-4 leading-normal bg-indigo-500/5 p-3.5 rounded-lg border border-indigo-500/10">
                      ✨ Statuses represent concurrent developer sessions actively working on the `team_ekatha` ecosystem.
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Features Grid */}
      <section id="features" className="py-20 border-t border-zinc-900 bg-zinc-950/40 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unified Stack Core Capabilities</h2>
            <p className="mt-4 text-base text-zinc-400">
              The project is set up using carefully balanced technologies designed for performance, modularity, and aesthetic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 hover:translate-y-[-2px]">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all">
                <svg className="h-6.5 w-6.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tailwind CSS v4 Engine</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Uses the CSS-first configuration pipeline. Native CSS variables enable smooth styling integrations and blazing compile-time speeds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 hover:translate-y-[-2px]">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all">
                <svg className="h-6.5 w-6.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Next.js App Router Structure</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Supports React Server Components (RSC) and React 19 Client components out of the box, optimized for modern data fetching and SEO optimization.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 hover:translate-y-[-2px]">
              <div className="h-10 w-10 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-6 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 group-hover:scale-105 transition-all">
                <svg className="h-6.5 w-6.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strict TypeScript Safety</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Strict type safety ensures predictable states, easier scaling, and tight API contracts between the client application and team microservices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>© 2026 Ekatha Client Portal. Built with Next.js, TypeScript and Tailwind CSS v4.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms</span>
            <span className="hover:text-zinc-300 cursor-pointer">License</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
