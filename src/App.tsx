import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { BookOpen, Briefcase, Globe, Wrench, Home as HomeIcon } from 'lucide-react'
import Home from './components/Home'
import ProcessGroups from './components/ProcessGroups'
import KnowledgeAreas from './components/KnowledgeAreas'
import GlobalProjects from './components/GlobalProjects'
import Tools from './components/Tools'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Global PM Insights</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-200"><HomeIcon size={20} /></Link></li>
                <li><Link to="/process-groups" className="hover:text-blue-200"><BookOpen size={20} /></Link></li>
                <li><Link to="/knowledge-areas" className="hover:text-blue-200"><Briefcase size={20} /></Link></li>
                <li><Link to="/global-projects" className="hover:text-blue-200"><Globe size={20} /></Link></li>
                <li><Link to="/tools" className="hover:text-blue-200"><Wrench size={20} /></Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process-groups" element={<ProcessGroups />} />
            <Route path="/knowledge-areas" element={<KnowledgeAreas />} />
            <Route path="/global-projects" element={<GlobalProjects />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>

        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            &copy; {new Date().getFullYear()} Global PM Insights. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App