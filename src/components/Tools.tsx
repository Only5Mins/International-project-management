import React, { useState } from 'react'

const tools = [
  {
    name: 'Work Breakdown Structure (WBS)',
    description: 'A hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables.',
    usage: 'Used in the Scope Management knowledge area to define and organize the project scope.'
  },
  {
    name: 'Gantt Chart',
    description: 'A bar chart that shows the tasks of a project, when each must take place, and how long each will take.',
    usage: 'Used in the Schedule Management knowledge area to visualize the project schedule and track progress.'
  },
  {
    name: 'Critical Path Method (CPM)',
    description: 'A method used to estimate the minimum project duration and determine the amount of scheduling flexibility on the logical network paths within the schedule model.',
    usage: 'Used in the Schedule Management knowledge area to identify the sequence of activities that represent the longest path through a project.'
  },
  {
    name: 'Earned Value Management (EVM)',
    description: 'A project management technique for measuring project performance and progress in an objective manner.',
    usage: 'Used in the Cost Management and Schedule Management knowledge areas to integrate scope, schedule, and cost management.'
  },
  {
    name: 'RACI Matrix',
    description: 'A responsibility assignment chart that maps out every task, milestone or key decision involved in completing a project and assigns which roles are Responsible, Accountable, Consulted, and Informed for each.',
    usage: 'Used in the Resource Management knowledge area to clarify roles and responsibilities in cross-functional projects.'
  },
  {
    name: 'Risk Register',
    description: 'A document used to identify, assess, and manage risks throughout the life of a project.',
    usage: 'Used in the Risk Management knowledge area to record details of all risks identified that may affect the project.'
  }
]

const Tools = () => {
  const [activeTool, setActiveTool] = useState(tools[0])

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Project Management Tools & Techniques</h1>
      <p className="text-xl">
        Effective project management relies on various tools and techniques. Here are some essential ones aligned with PMBOK 6th Edition.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3">
          <ul className="bg-white rounded-lg shadow-md">
            {tools.map((tool) => (
              <li key={tool.name} className="border-b last:border-b-0">
                <button
                  className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${activeTool.name === tool.name ? 'bg-blue-100 font-semibold' : ''}`}
                  onClick={() => setActiveTool(tool)}
                >
                  {tool.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{activeTool.name}</h2>
          <p className="mb-4">{activeTool.description}</p>
          <h3 className="text-xl font-semibold mb-2">Usage:</h3>
          <p>{activeTool.usage}</p>
        </div>
      </div>
    </div>
  )
}

export default Tools