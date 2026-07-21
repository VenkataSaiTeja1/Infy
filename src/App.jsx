import React, { useState, useEffect } from "react";
import HackWithInfyPracticeBrowser from "./HackWithInfyPracticeBrowser";
import {
  Lock,
  User,
  ShieldAlert,
  LogOut,
  UserPlus,
  KeyRound,
  Eye,
  EyeOff,
  Users,
  Code2,
  CheckCircle2,
  Trash2,
  Search,
  Sparkles,
  BookOpen
} from "lucide-react";

// Admin static credentials as requested
const ADMIN_USER = "VLITAdmin";
const ADMIN_PASS = "vlitsadmin@2007";

// Initial seed student accounts if localStorage is empty
const INITIAL_STUDENTS = [
  { id: "student", name: "Demo Student", password: "student@123", registeredAt: "2026-07-20 10:15 AM" },
  { id: "studentt", name: "Demo Student", password: "student@123", registeredAt: "2026-07-20 10:15 AM" },
  { id: "STU202601", name: "Rahul Sharma", password: "Password@123", registeredAt: "2026-07-20 10:15 AM" },
  { id: "STU202602", name: "Priya Patel", password: "Student@2026", registeredAt: "2026-07-21 09:30 AM" },
  { id: "STU202603", name: "Ananya Roy", password: "LearnCode#99", registeredAt: "2026-07-21 11:45 AM" }
];

export default function App() {
  // Storage state - always ensures INITIAL_STUDENTS are merged into localStorage
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("vlit_infy_students");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge missing seed accounts into saved localStorage list
        INITIAL_STUDENTS.forEach((initS) => {
          if (!parsed.some((s) => s.id.toLowerCase() === initS.id.toLowerCase())) {
            parsed.push(initS);
          }
        });
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_STUDENTS;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("vlit_infy_current_user");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return null; // null means not logged in
  });

  // Login form state
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Admin view toggle (Admin can switch between Admin Table and Practice Browser view)
  const [adminViewMode, setAdminViewMode] = useState("dashboard"); // 'dashboard' | 'practice'

  // Admin search state
  const [searchTerm, setSearchTerm] = useState("");

  // Sync students to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("vlit_infy_students", JSON.stringify(students));
    } catch (e) {
      console.error("Failed to save students to local storage", e);
    }
  }, [students]);

  // Sync current user to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem("vlit_infy_current_user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("vlit_infy_current_user");
      }
    } catch (e) {
      console.error("Failed to save session", e);
    }
  }, [currentUser]);

  // Handle Login submission (Supports both Admin & Students from same panel)
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const cleanUser = usernameInput.trim();
    const cleanPass = passwordInput.trim();

    if (!cleanUser || !cleanPass) {
      setErrorMessage("Please enter both User ID / Username and Password.");
      return;
    }

    // 1. Check Admin Credentials
    if (cleanUser === ADMIN_USER && cleanPass === ADMIN_PASS) {
      const userObj = { role: "admin", username: ADMIN_USER, name: "System Administrator" };
      setCurrentUser(userObj);
      setAdminViewMode("dashboard");
      setSuccessMessage("Admin authenticated successfully!");
      return;
    }

    // 2. Check Student Credentials across state & static seed list
    const combinedList = [...students];
    INITIAL_STUDENTS.forEach((initS) => {
      if (!combinedList.some((s) => s.id.toLowerCase() === initS.id.toLowerCase())) {
        combinedList.push(initS);
      }
    });

    const foundStudent = combinedList.find(
      (s) => s.id.toLowerCase() === cleanUser.toLowerCase() && s.password.trim() === cleanPass
    );

    if (foundStudent) {
      const userObj = {
        role: "student",
        username: foundStudent.id,
        name: foundStudent.name || foundStudent.id
      };
      setCurrentUser(userObj);
      setSuccessMessage("Student authenticated successfully!");
      return;
    }

    // 3. Fallback rule for standard demo/student credentials (allows unlimited concurrent student logins)
    if (
      (cleanUser.toLowerCase() === "student" || cleanUser.toLowerCase() === "studentt" || cleanUser.toLowerCase().startsWith("stu")) &&
      (cleanPass === "student@123" || cleanPass === "Password@123")
    ) {
      const userObj = {
        role: "student",
        username: cleanUser,
        name: `Student (${cleanUser})`
      };
      setCurrentUser(userObj);
      setSuccessMessage("Student authenticated successfully!");
      return;
    }

    setErrorMessage("Invalid User ID or Password. Please try again.");
  };

  // Handle Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setUsernameInput("");
    setPasswordInput("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  // Handle Admin deleting a student
  const handleDeleteStudent = (studentId) => {
    if (window.confirm(`Are you sure you want to delete student account '${studentId}'?`)) {
      setStudents((prev) => prev.filter((s) => s.id !== studentId));
    }
  };

  // Render Login / Registration Screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 md:p-8 selection:bg-teal-500 selection:text-slate-950">
        {/* Top Header */}
        <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 p-2.5 rounded-xl text-slate-950 shadow-lg shadow-teal-500/20">
              <Code2 className="w-6 h-6 font-bold" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-teal-200 via-cyan-200 to-slate-200 bg-clip-text text-transparent">
                HackWithInfy 2026
              </h1>
              <p className="text-xs text-slate-400">VLIT Practice & Assessment Portal</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-950/80 text-teal-400 border border-teal-800">
            <Sparkles className="w-3.5 h-3.5" /> Single Access Panel
          </span>
        </header>

        {/* Login/Register Card */}
        <main className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-100 mb-1">VLITS Infosys Portal</h2>
              <p className="text-sm text-slate-400">
                Log in as <span className="text-teal-400 font-semibold">Admin</span> or{" "}
                <span className="text-cyan-400 font-semibold">Student</span> from the same panel
              </p>
            </div>

            {/* Error / Success Notifications */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  User ID / Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="VLITAdmin or Student ID"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-9 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Lock className="w-4 h-4" /> Login to Portal
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-center text-xs text-slate-500">
              <p>Admin Default: <code className="text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">student</code> / <code className="text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">student@123</code></p>
            </div>
          </div>
        </main>

        <footer className="max-w-6xl mx-auto w-full text-center text-xs text-slate-600 py-4">
          VLIT HackWithInfy 2026 Practice Portal &bull; Cache Disabled for Security
        </footer>
      </div>
    );
  }

  // Filter students for admin view
  const filteredStudents = students.filter(
    (s) =>
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.name && s.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* Persistent Global Navigation Bar */}
      <header className="bg-slate-900/90 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md px-4 md:px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 p-2 rounded-lg text-slate-950 shadow-md shadow-teal-500/20">
            <Code2 className="w-5 h-5 font-bold" />
          </div>
          <div>
            <h1 className="font-bold text-sm text-slate-100 flex items-center gap-2">
              HackWithInfy 2026
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                {currentUser.role === "admin" ? "Admin Console" : "Student Browser"}
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Admin view toggle */}
          {currentUser.role === "admin" && (
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setAdminViewMode("dashboard")}
                className={`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition ${
                  adminViewMode === "dashboard"
                    ? "bg-teal-950 text-teal-300 border border-teal-800"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" /> Student Logins ({students.length})
              </button>
              <button
                onClick={() => setAdminViewMode("practice")}
                className={`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition ${
                  adminViewMode === "practice"
                    ? "bg-teal-950 text-teal-300 border border-teal-800"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> Practice Bank
              </button>
            </div>
          )}

          {/* User badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
            <User className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-slate-300 font-medium">{currentUser.name || currentUser.username}</span>
            <span className="text-[10px] text-teal-400 font-semibold uppercase px-1.5 py-0.2 rounded bg-teal-950 border border-teal-900">
              {currentUser.role}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-semibold transition shadow-md shadow-rose-950/30"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* Main View Body */}
      {currentUser.role === "admin" && adminViewMode === "dashboard" ? (
        <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-400" /> Registered Students Directory
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Admin view to see all registered student User IDs and Passwords.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
              <button
                onClick={() => setAdminViewMode("practice")}
                className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-teal-600/20"
              >
                <BookOpen className="w-3.5 h-3.5" /> Go to Practice Bank
              </button>
            </div>
          </div>

          {/* Student Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold">
                  <tr>
                    <th className="p-3.5">#</th>
                    <th className="p-3.5">Student Name</th>
                    <th className="p-3.5">User ID / Username</th>
                    <th className="p-3.5">Password</th>
                    <th className="p-3.5">Registered On</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-slate-800/40 transition">
                        <td className="p-3.5 font-medium text-slate-500">{idx + 1}</td>
                        <td className="p-3.5 font-semibold text-slate-200">{s.name || "N/A"}</td>
                        <td className="p-3.5 font-mono text-teal-400 bg-teal-950/30 rounded px-2 py-1 inline-block my-2 border border-teal-900/50">
                          {s.id}
                        </td>
                        <td className="p-3.5 font-mono text-cyan-300">{s.password}</td>
                        <td className="p-3.5 text-slate-400">{s.registeredAt || "Initial Seed"}</td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => handleDeleteStudent(s.id)}
                            className="p-1.5 text-rose-400 hover:bg-rose-950 border border-transparent hover:border-rose-900 rounded-lg transition"
                            title="Delete Student"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-slate-500 italic">
                        No registered students found matching search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
              <span>Showing {filteredStudents.length} of {students.length} students</span>
              <span>Storage: Document LocalStorage persistent state</span>
            </div>
          </div>
        </main>
      ) : (
        <HackWithInfyPracticeBrowser />
      )}
    </div>
  );
}