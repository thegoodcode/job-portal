export type Job = {
	id: string
	title: string
	company: string
	logo: string
	location: string
	experience: string
	type: string
	description: string
	status: 'active' | 'saved' | 'applied' | 'closed' | 'discarded'
	postedAt: string
	salary?: string
	remote: boolean
}

export const jobs: Job[] = [
	// Active Jobs
	{
		id: '1',
		title: 'Senior Frontend Developer',
		company: 'Microsoft',
		logo: '/microsoft.svg',
		type: 'Full-time',
		experience: 'Senior',
		location: 'San Francisco, CA',
		salary: '$120K - $180K',
		description: `About Microsoft:
Microsoft is a global technology leader empowering digital transformation in the cloud-first, AI-first world. Our mission is to empower every person and organization on the planet to achieve more.

Role Overview:
As a Senior Frontend Developer in our Cloud + AI division, you'll lead a team of 6 engineers building next-generation web experiences for Microsoft's cloud services platform. Your work will directly impact millions of developers worldwide.

Key Responsibilities:
• Architect and implement complex frontend solutions using React and TypeScript
• Lead technical design discussions and code reviews
• Mentor junior developers and promote best practices
• Collaborate with UX designers and product managers
• Drive performance optimization initiatives
• Contribute to our design system and component library
• Lead accessibility improvements across our platform

Required Technical Skills:
• 5+ years of experience with modern JavaScript/TypeScript
• Expert knowledge of React, Redux, and modern frontend tooling
• Strong understanding of web performance optimization
• Experience with GraphQL and REST APIs
• Proficiency in CSS-in-JS solutions and modern CSS features
• Knowledge of frontend testing frameworks (Jest, React Testing Library)
• Experience with CI/CD pipelines

Required Soft Skills:
• Strong leadership and mentoring abilities
• Excellent communication and documentation skills
• Problem-solving mindset
• Ability to work effectively in cross-functional teams
• Experience in agile development practices

Benefits:
• Competitive base salary with annual bonuses
• Microsoft stock (RSU) grants
• Comprehensive health and dental coverage
• 401(k) with 50% company match
• Flexible work arrangements
• Annual learning and development budget
• 20 days paid vacation + 10 holidays
• Parental leave (20 weeks paid)
• On-site gym and wellness center

Our Tech Stack:
• Frontend: React, TypeScript, Redux Toolkit
• Testing: Jest, Cypress, React Testing Library
• Build Tools: Webpack, Vite
• CI/CD: Azure DevOps, GitHub Actions
• Monitoring: Application Insights
• Design: Figma, Microsoft Fluent UI

Growth Opportunities:
• Path to Principal Engineer or Engineering Manager
• Opportunities to speak at tech conferences
• Contribute to open-source projects
• Lead cross-team technical initiatives
• Mentor and grow other developers

Work Environment:
• Hybrid work model (2-3 days in office)
• Modern office with collaboration spaces
• Regular hackathons and innovation events
• Strong emphasis on work-life balance
• Inclusive and diverse team culture`,
		status: 'active',
		postedAt: '2024-01-20',
		remote: true
	},
	{
		id: '2',
		title: 'Machine Learning Engineer',
		company: 'Google',
		logo: '/google.svg',
		type: 'Full-time',
		experience: 'Mid-Senior',
		location: 'Mountain View, CA',
		salary: '$130K - $200K',
		description: `About Google:
Google's AI/ML division is at the forefront of artificial intelligence research and development. Our team develops cutting-edge solutions that impact billions of users across Google's product suite.

Role Overview:
As a Machine Learning Engineer, you'll join our 15-person Search Quality team, developing and deploying ML models that enhance Google Search's understanding and ranking capabilities.

Key Responsibilities:
• Design and implement ML models for search quality improvement
• Develop data pipelines and feature engineering systems
• Conduct A/B tests and analyze model performance
• Collaborate with research teams to implement latest ML techniques
• Optimize model inference for production environments
• Lead technical discussions and mentor junior team members
• Write technical documentation and research papers

Required Technical Skills:
• MS/PhD in Computer Science or related field
• 3+ years experience in ML/DL model development
• Strong Python programming skills
• Experience with TensorFlow or PyTorch
• Expertise in NLP and large language models
• Strong background in statistics and mathematics
• Experience with distributed computing systems

Required Soft Skills:
• Strong analytical and problem-solving abilities
• Excellent communication and presentation skills
• Ability to work in cross-functional teams
• Research-oriented mindset
• Attention to detail and experimental rigor

Benefits:
• Industry-leading compensation package
• Google Stock Units (GSUs)
• Comprehensive health coverage
• 401(k) plan with matching
• Free meals and snacks
• On-site fitness centers
• 20 weeks paid parental leave
• Education reimbursement
• Annual bonus potential
• Wellness programs and fitness subsidies

Our Tech Stack:
• ML Frameworks: TensorFlow, JAX
• Languages: Python, C++
• Infrastructure: Google Cloud, Kubernetes
• Data Processing: Apache Beam, BigQuery
• Monitoring: Stackdriver, TensorBoard
• Version Control: Git, Code Review
• Experimentation: Vizier, TensorBoard

Growth Opportunities:
• Advancement to Senior ML Engineer or Research Scientist
• Publication opportunities at top conferences
• Patent development programs
• Technical leadership roles
• Research collaboration opportunities
• Internal mobility across Google teams

Work Environment:
• Flexible hybrid work model
• State-of-the-art research facilities
• Regular tech talks and workshops
• Collaboration with world-class researchers
• Focus on innovation and experimentation
• Strong emphasis on personal growth`,
		status: 'active',
		postedAt: '2024-01-21',
		remote: false
	},
	{
		id: '3',
		title: 'Senior DevOps Engineer',
		company: 'Amazon',
		logo: '/amazon.svg',
		type: 'Full-time',
		experience: 'Senior',
		location: 'Seattle, WA',
		salary: '$140K - $210K',
		description: `About Amazon:
Join Amazon's Infrastructure team, supporting systems that handle millions of requests per second. We're responsible for the reliability and scalability of Amazon's global e-commerce platform.

Role Overview:
As a Senior DevOps Engineer, you'll lead our Platform Infrastructure team, designing and implementing scalable solutions that power Amazon's worldwide operations.

Key Responsibilities:
• Architect and maintain large-scale AWS infrastructure
• Design and implement CI/CD pipelines for microservices
• Lead incident response and system reliability improvements
• Mentor junior engineers in DevOps practices
• Collaborate with security teams on infrastructure hardening
• Drive automation initiatives across the platform
• Implement monitoring and alerting solutions

Required Technical Skills:
• 5+ years of experience in DevOps/SRE roles
• Expert knowledge of AWS services (EC2, ECS, Lambda)
• Strong experience with Infrastructure as Code (Terraform)
• Proficiency in Python, Bash, and Go
• Experience with monitoring tools (Prometheus, Grafana)
• Container orchestration expertise (Kubernetes, ECS)
• Strong background in system design and architecture

Required Soft Skills:
• Strong problem-solving abilities
• Excellent communication skills
• Experience in mentoring junior engineers
• Ability to work in high-pressure situations
• Strong documentation practices
• Leadership and project management skills

Benefits:
• Competitive base salary with RSU grants
• Comprehensive health and life insurance
• 401(k) with company match
• Flexible PTO policy
• Annual AWS certification bonus
• Relocation assistance
• Employee discount on Amazon.com
• Health savings account
• Life and disability insurance
• Employee assistance program

Our Tech Stack:
• Cloud: AWS (extensive use of 20+ services)
• IaC: Terraform, CloudFormation
• CI/CD: Jenkins, GitHub Actions
• Containers: Docker, Kubernetes
• Monitoring: Prometheus, Grafana, CloudWatch
• Languages: Python, Go, Bash
• Version Control: Git, GitHub Enterprise

Growth Opportunities:
• Clear path to Principal Engineer or Technical Program Manager
• Regular opportunities to lead major infrastructure initiatives
• AWS certification programs
• Internal mobility across Amazon teams
• Technical mentorship programs
• Conference speaking opportunities

Work Environment:
• Hybrid work model (3 days in office)
• Regular on-call rotation (1 week every 8 weeks)
• Collaborative team environment
• Focus on continuous learning and improvement
• Modern office facilities
• Global team collaboration`,
		status: 'active',
		postedAt: '2024-01-22',
		remote: true
	},
	{
		id: '4',
		title: 'UI/UX Designer',
		company: 'Apple',
		logo: '/apple.svg',
		location: 'Cupertino, CA',
		experience: '2+ years',
		type: 'Full-time',
		salary: '$110K - $170K',
		description: 'Design beautiful and intuitive interfaces for Apple products. Strong portfolio and experience with Figma required.',
		status: 'active',
		postedAt: '2024-01-23',
		remote: false
	},
	{
		id: '5',
		title: 'Mobile Developer',
		company: 'Meta',
		logo: '/meta.svg',
		location: 'Remote',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$125K - $190K',
		description: 'Build the next generation of mobile experiences for Meta platforms. Experience with React Native required.',
		status: 'active',
		postedAt: '2024-01-24',
		remote: true
	},

	// Saved Jobs
	{
		id: '6',
		title: 'Product Manager',
		company: 'Netflix',
		logo: '/netflix.svg',
		location: 'Los Gatos, CA',
		experience: '5+ years',
		type: 'Full-time',
		salary: '$150K - $220K',
		description: 'Lead product strategy and execution for Netflix\'s streaming platform. Strong technical background preferred.',
		status: 'saved',
		postedAt: '2024-01-20',
		remote: false
	},
	{
		id: '7',
		title: 'Data Scientist',
		company: 'Twitter',
		logo: '/twitter.svg',
		location: 'Remote',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$130K - $200K',
		description: 'Apply machine learning to solve complex problems in social media. Experience with Python and ML frameworks required.',
		status: 'saved',
		postedAt: '2024-01-21',
		remote: true
	},
	{
		id: '8',
		title: 'Security Engineer',
		company: 'Salesforce',
		logo: '/salesforce.svg',
		location: 'San Francisco, CA',
		experience: '4+ years',
		type: 'Full-time',
		salary: '$140K - $210K',
		description: 'Protect Salesforce\'s infrastructure and applications. Experience with cloud security and penetration testing required.',
		status: 'saved',
		postedAt: '2024-01-22',
		remote: false
	},
	{
		id: '9',
		title: 'Backend Engineer',
		company: 'LinkedIn',
		logo: '/linkedin.svg',
		location: 'Sunnyvale, CA',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$135K - $205K',
		description: 'Build scalable backend services for LinkedIn. Experience with Java and distributed systems required.',
		status: 'saved',
		postedAt: '2024-01-23',
		remote: false
	},
	{
		id: '10',
		title: 'Cloud Architect',
		company: 'Oracle',
		logo: '/oracle.svg',
		location: 'Remote',
		experience: '6+ years',
		type: 'Full-time',
		salary: '$160K - $240K',
		description: 'Design and implement cloud solutions for enterprise customers. Deep knowledge of cloud platforms required.',
		status: 'saved',
		postedAt: '2024-01-24',
		remote: true
	},

	// Applied Jobs
	{
		id: '11',
		title: 'Technical Lead',
		company: 'Adobe',
		logo: '/adobe.svg',
		location: 'San Jose, CA',
		experience: '7+ years',
		type: 'Full-time',
		salary: '$170K - $250K',
		description: 'Lead a team of developers building creative tools. Experience with C++ and graphics programming preferred.',
		status: 'applied',
		postedAt: '2024-01-20',
		remote: false
	},
	{
		id: '12',
		title: 'ML Engineer',
		company: 'NVIDIA',
		logo: '/nvidia.svg',
		location: 'Santa Clara, CA',
		experience: '4+ years',
		type: 'Full-time',
		salary: '$145K - $215K',
		description: 'Develop machine learning solutions for graphics applications. Experience with CUDA and deep learning required.',
		status: 'applied',
		postedAt: '2024-01-21',
		remote: false
	},
	{
		id: '13',
		title: 'Frontend Architect',
		company: 'Airbnb',
		logo: '/airbnb.svg',
		location: 'Remote',
		experience: '6+ years',
		type: 'Full-time',
		salary: '$155K - $230K',
		description: 'Lead frontend architecture for Airbnb\'s web platform. Experience with React and performance optimization required.',
		status: 'applied',
		postedAt: '2024-01-22',
		remote: true
	},
	{
		id: '14',
		title: 'Site Reliability Engineer',
		company: 'Uber',
		logo: '/uber.svg',
		location: 'San Francisco, CA',
		experience: '5+ years',
		type: 'Full-time',
		salary: '$150K - $220K',
		description: 'Ensure reliability and performance of Uber\'s infrastructure. Experience with Kubernetes and monitoring tools required.',
		status: 'applied',
		postedAt: '2024-01-23',
		remote: false
	},
	{
		id: '15',
		title: 'Blockchain Developer',
		company: 'Coinbase',
		logo: '/coinbase.svg',
		location: 'Remote',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$140K - $210K',
		description: 'Build the future of cryptocurrency trading. Experience with blockchain technologies and smart contracts required.',
		status: 'applied',
		postedAt: '2024-01-24',
		remote: true
	},

	// Closed Jobs
	{
		id: '16',
		title: 'Engineering Manager',
		company: 'Slack',
		logo: '/slack.svg',
		location: 'San Francisco, CA',
		experience: '8+ years',
		type: 'Full-time',
		salary: '$180K - $270K',
		description: 'Lead and grow a team of engineers at Slack. Strong technical background and management experience required.',
		status: 'closed',
		postedAt: '2024-01-20',
		remote: false
	},
	{
		id: '17',
		title: 'Systems Engineer',
		company: 'VMware',
		logo: '/vmware.svg',
		location: 'Palo Alto, CA',
		experience: '5+ years',
		type: 'Full-time',
		salary: '$145K - $215K',
		description: 'Build and maintain virtualization systems. Experience with VMware products and Linux required.',
		status: 'closed',
		postedAt: '2024-01-21',
		remote: false
	},
	{
		id: '18',
		title: 'Quality Engineer',
		company: 'Intel',
		logo: '/intel.svg',
		location: 'Santa Clara, CA',
		experience: '4+ years',
		type: 'Full-time',
		salary: '$130K - $190K',
		description: 'Ensure quality of Intel\'s software products. Experience with testing frameworks and automation required.',
		status: 'closed',
		postedAt: '2024-01-22',
		remote: false
	},
	{
		id: '19',
		title: 'AR/VR Developer',
		company: 'Magic Leap',
		logo: '/magicleap.svg',
		location: 'Remote',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$135K - $200K',
		description: 'Create immersive AR/VR experiences. Experience with Unity or Unreal Engine required.',
		status: 'closed',
		postedAt: '2024-01-23',
		remote: true
	},
	{
		id: '20',
		title: 'Database Engineer',
		company: 'MongoDB',
		logo: '/mongodb.svg',
		location: 'New York, NY',
		experience: '5+ years',
		type: 'Full-time',
		salary: '$150K - $220K',
		description: 'Build and optimize database systems. Experience with NoSQL databases and distributed systems required.',
		status: 'closed',
		postedAt: '2024-01-24',
		remote: false
	},

	// Discarded Jobs
	{
		id: '21',
		title: 'Game Developer',
		company: 'Electronic Arts',
		logo: '/ea.svg',
		location: 'Redwood City, CA',
		experience: '4+ years',
		type: 'Full-time',
		salary: '$130K - $190K',
		description: 'Create amazing gaming experiences. Experience with game engines and C++ required.',
		status: 'discarded',
		postedAt: '2024-01-20',
		remote: false
	},
	{
		id: '22',
		title: 'Quantum Computing Researcher',
		company: 'IBM',
		logo: '/ibm.svg',
		location: 'Remote',
		experience: '5+ years',
		type: 'Full-time',
		salary: '$160K - $240K',
		description: 'Research quantum computing applications. PhD in Physics or Computer Science preferred.',
		status: 'discarded',
		postedAt: '2024-01-21',
		remote: true
	},
	{
		id: '23',
		title: 'IoT Developer',
		company: 'Samsung',
		logo: '/samsung.svg',
		location: 'San Jose, CA',
		experience: '3+ years',
		type: 'Full-time',
		salary: '$125K - $185K',
		description: 'Develop IoT solutions for smart devices. Experience with embedded systems required.',
		status: 'discarded',
		postedAt: '2024-01-22',
		remote: false
	},
	{
		id: '24',
		title: 'Robotics Engineer',
		company: 'Boston Dynamics',
		logo: '/bostondynamics.svg',
		location: 'Waltham, MA',
		experience: '6+ years',
		type: 'Full-time',
		salary: '$170K - $250K',
		description: 'Build the next generation of robots. Experience with ROS and control systems required.',
		status: 'discarded',
		postedAt: '2024-01-23',
		remote: false
	},
	{
		id: '25',
		title: '3D Graphics Engineer',
		company: 'Unity',
		logo: '/unity.svg',
		location: 'Remote',
		experience: '4+ years',
		type: 'Full-time',
		salary: '$140K - $210K',
		description: 'Develop 3D graphics solutions. Experience with OpenGL or DirectX required.',
		status: 'discarded',
		postedAt: '2024-01-24',
		remote: true
	}
]
