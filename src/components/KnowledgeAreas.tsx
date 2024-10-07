import React, { useState } from 'react'

const knowledgeAreas = [
  {
    name: 'Project Integration Management',
    description: 'Includes the processes and activities needed to identify, define, combine, unify, and coordinate the various processes and project management activities within the Project Management Process Groups.',
    key_processes: ['Develop Project Charter', 'Develop Project Management Plan', 'Direct and Manage Project Work', 'Manage Project Knowledge', 'Monitor and Control Project Work', 'Perform Integrated Change Control', 'Close Project or Phase']
  },
  {
    name: 'Project Scope Management',
    description: 'Includes the processes required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.',
    key_processes: ['Plan Scope Management', 'Collect Requirements', 'Define Scope', 'Create WBS', 'Validate Scope', 'Control Scope']
  },
  {
    name: 'Project Schedule Management',
    description: 'Includes the processes required to manage the timely completion of the project.',
    key_processes: ['Plan Schedule Management', 'Define Activities', 'Sequence Activities', 'Estimate Activity Durations', 'Develop Schedule', 'Control Schedule']
  },
  {
    name: 'Project Cost Management',
    description: 'Includes the processes involved in planning, estimating, budgeting, financing, funding, managing, and controlling costs so that the project can be completed within the approved budget.',
    key_processes: ['Plan Cost Management', 'Estimate Costs', 'Determine Budget', 'Control Costs']
  },
  {
    name: 'Project Quality Management',
    description: "Includes the processes for incorporating the organization's quality policy regarding planning, managing, and controlling project and product quality requirements in order to meet stakeholders' expectations.",
    key_processes: ['Plan Quality Management', 'Manage Quality', 'Control Quality']
  },
  {
    name: 'Project Resource Management',
    description: 'Includes the processes to identify, acquire, and manage the resources needed for the successful completion of the project.',
    key_processes: ['Plan Resource Management', 'Estimate Activity Resources', 'Acquire Resources', 'Develop Team', 'Manage Team', 'Control Resources']
  },
  {
    name: 'Project Communications Management',
    description: 'Includes the processes required to ensure timely and appropriate planning, collection, creation, distribution, storage, retrieval, management, control, monitoring, and ultimate disposition of project information.',
    key_processes: ['Plan Communications Management', 'Manage Communications', 'Monitor Communications']
  },
  {
    name: 'Project Risk Management',
    description: 'Includes the processes of conducting risk management planning, identification, analysis, response planning, response implementation, and monitoring risk on a project.',
    key_processes: ['Plan Risk Management', 'Identify Risks', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis', 'Plan Risk Responses', 'Implement Risk Responses', 'Monitor Risks']
  },
  {
    name: 'Project Procurement Management',
    description: 'Includes the processes necessary to purchase or acquire products, services, or results needed from outside the project team.',
    key_processes: ['Plan Procurement Management', 'Conduct Procurements', 'Control Procurements']
  },
  {
    name: 'Project Stakeholder Management',
    description: 'Includes the processes required to identify the people, groups, or organizations that could impact or be impacted by the project, analyze stakeholder expectations and their impact on the project, and develop appropriate management strategies for effectively engaging stakeholders in project decisions and execution.',
    key_processes: ['Identify Stakeholders', 'Plan Stakeholder Engagement', 'Manage Stakeholder Engagement', 'Monitor Stakeholder Engagement']
  }
]

const KnowledgeAreas = () => {
  const [activeArea, setActiveArea] = useState(knowledgeAreas[0])

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Project Management Knowledge Areas</h1>
      <p className="text-xl">
        The PMBOK Guide identifies ten Knowledge Areas in project management. These areas represent the key competencies that project managers must develop.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3">
          <ul className="bg-white rounded-lg shadow-md">
            {knowledgeAreas.map((area) => (
              <li key={area.name} className="border-b last:border-b-0">
                <button
                  className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${activeArea.name === area.name ? 'bg-blue-100 font-semibold' : ''}`}
                  onClick={() => setActiveArea(area)}
                >
                  {area.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{activeArea.name}</h2>
          <p className="mb-4">{activeArea.description}</p>
          <h3 className="text-xl font-semibold mb-2">Key Processes:</h3>
          <ul className="list-disc list-inside">
            {activeArea.key_processes.map((process) => (
              <li key={process}>{process}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeAreas