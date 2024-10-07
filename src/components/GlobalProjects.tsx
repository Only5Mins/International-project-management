import React from 'react'

const challenges = [
  { title: 'Cultural Differences', description: 'Understanding and navigating diverse cultural norms, communication styles, and work ethics.' },
  { title: 'Time Zone Management', description: 'Coordinating across multiple time zones for meetings, deadlines, and project milestones.' },
  { title: 'Language Barriers', description: 'Ensuring clear communication and understanding across team members speaking different languages.' },
  { title: 'Legal and Regulatory Compliance', description: 'Adhering to various international laws, regulations, and standards across different countries.' },
  { title: 'Resource Allocation', description: 'Managing and allocating resources effectively across geographically dispersed teams.' },
  { title: 'Technology and Infrastructure', description: 'Dealing with varying levels of technological infrastructure and compatibility issues.' }
]

const strategies = [
  { title: 'Cultural Intelligence Training', description: 'Provide training to team members on cultural awareness and cross-cultural communication.' },
  { title: 'Flexible Communication Tools', description: 'Utilize asynchronous communication tools and establish clear communication protocols.' },
  { title: 'Standardized Project Management Practices', description: 'Implement consistent PM methodologies and tools across all project locations.' },
  { title: 'Local Expertise', description: 'Engage local experts or consultants to navigate region-specific challenges and requirements.' },
  { title: 'Virtual Team Building', description: 'Organize regular virtual team-building activities to foster collaboration and trust.' },
  { title: 'Clear Documentation', description: 'Maintain comprehensive and clear documentation to minimize misunderstandings and ensure knowledge transfer.' }
]

const GlobalProjects = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Global Project Management</h1>
      <p className="text-xl">
        Managing international projects presents unique challenges and requires specific strategies for success. Here's an overview of key considerations for global project management.
      </p>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Challenges in Global Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Strategies for Success</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{strategy.title}</h3>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices for Global Project Management</h2>
        <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-lg shadow-md">
          <li>Develop a global mindset and encourage cultural sensitivity among team members</li>
          <li>Establish clear communication protocols and guidelines for virtual collaboration</li>
          <li>Implement robust project management software that supports global teams</li>
          <li>Create a centralized knowledge base for sharing information across locations</li>
          <li>Regularly assess and mitigate risks specific to international projects</li>
          <li>Foster a culture of trust and open communication within the global team</li>
        </ul>
      </section>
    </div>
  )
}

export default GlobalProjects