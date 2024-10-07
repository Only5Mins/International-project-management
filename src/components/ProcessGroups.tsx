import React, { useState } from 'react'

const processGroups = [
  {
    name: 'Initiating',
    description: 'Define a new project or a new phase of an existing project by obtaining authorization to start the project or phase.',
    key_processes: ['Develop Project Charter', 'Identify Stakeholders']
  },
  {
    name: 'Planning',
    description: 'Establish the scope of the project, refine the objectives, and define the course of action required to attain the objectives.',
    key_processes: ['Develop Project Management Plan', 'Define Scope', 'Create WBS', 'Develop Schedule', 'Determine Budget']
  },
  {
    name: 'Executing',
    description: 'Complete the work defined in the project management plan to satisfy the project specifications.',
    key_processes: ['Direct and Manage Project Work', 'Manage Project Knowledge', 'Manage Quality', 'Acquire Resources', 'Manage Communications']
  },
  {
    name: 'Monitoring and Controlling',
    description: 'Track, review, and regulate the progress and performance of the project; identify areas in which changes to the plan are required.',
    key_processes: ['Monitor and Control Project Work', 'Perform Integrated Change Control', 'Control Scope', 'Control Schedule', 'Control Costs']
  },
  {
    name: 'Closing',
    description: 'Formally complete or close the project, phase, or contract.',
    key_processes: ['Close Project or Phase', 'Close Procurements']
  }
]

const ProcessGroups = () => {
  const [activeGroup, setActiveGroup] = useState(processGroups[0])

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Project Management Process Groups</h1>
      <p className="text-xl">
        The PMBOK Guide identifies five Project Management Process Groups. These groups are not project phases; they are a set of processes that are performed throughout the project lifecycle.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3">
          <ul className="bg-white rounded-lg shadow-md">
            {processGroups.map((group) => (
              <li key={group.name} className="border-b last:border-b-0">
                <button
                  className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${activeGroup.name === group.name ? 'bg-blue-100 font-semibold' : ''}`}
                  onClick={() => setActiveGroup(group)}
                >
                  {group.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{activeGroup.name}</h2>
          <p className="mb-4">{activeGroup.description}</p>
          <h3 className="text-xl font-semibold mb-2">Key Processes:</h3>
          <ul className="list-disc list-inside">
            {activeGroup.key_processes.map((process) => (
              <li key={process}>{process}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProcessGroups