import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Briefcase, Globe, Wrench } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Global PM Insights</h1>
      <p className="text-xl">
        Discover international project management best practices and strategies aligned with PMBOK 6th Edition.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/process-groups" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
          <BookOpen className="mr-4 text-blue-600" size={24} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Process Groups</h2>
            <p>Explore the five process groups that form the project management lifecycle.</p>
          </div>
        </Link>
        <Link to="/knowledge-areas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
          <Briefcase className="mr-4 text-blue-600" size={24} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Knowledge Areas</h2>
            <p>Learn about the ten knowledge areas that encompass project management expertise.</p>
          </div>
        </Link>
        <Link to="/global-projects" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
          <Globe className="mr-4 text-blue-600" size={24} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Global Projects</h2>
            <p>Understand the unique challenges and strategies for managing international projects.</p>
          </div>
        </Link>
        <Link to="/tools" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
          <Wrench className="mr-4 text-blue-600" size={24} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tools & Techniques</h2>
            <p>Discover essential tools and techniques for effective project management.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home