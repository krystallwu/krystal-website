import Header from '@/src/app/components/Header';

const Work = () => {
  return (
    <div className='mb-8 overflow-hidden p-4'>
      <Header />
      <h1 className='text-3xl font-bold text-center mb-2'>Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {/* Frontend Section */}
    <div>
      <h2 className="text-xl font-bold mb-2">FRONTEND</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Hypertext Markup Language (HTML)",
          "Cascading Style Sheets (CSS)",
          "JavaScript",
          "ReactJS",
          "Figma",
        ].map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-gray-200 text-sm rounded-full shadow-sm hover:bg-pink-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    {/* Backend Section */}
    <div>
      <h2 className="text-xl font-bold mb-2">BACKEND</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "C",
          "Python",
          "Java",
          "MySQL",
          "TypeScript",
          "Node.js",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 text-sm rounded-full shadow-sm hover:bg-pink-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {/* Tools Section */}
    <div>
      <h2 className="text-xl font-bold mb-2">TOOLS</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Github",
          "Android Studio",
          "Jira",
          "ROS",
          "MongoDB",
          "Docker",
          "XCode",
          "APIs"
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 text-sm rounded-full shadow-sm hover:bg-pink-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {/* Soft Skills Section */}
    <div>
      <h2 className="text-xl font-bold mb-2">SOFT SKILLS</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Leadership",
          "Time Management",
          "Communication",
          "Adaptability",
          "Self-motivation",
          "Collaboration",
          "Organization",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 text-sm rounded-full shadow-sm hover:bg-pink-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    </div>
      {/* Experience Section */}
      <h1 className='text-3xl font-bold text-center py-4 mb-2'>Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Junior Consultant</h2>
          <p className="text-sm text-gray-600">Undergraduate Consulting Club | August 2025 - Present</p>
          <p className="mt-2">Worked with Jeeves(YC20) to create an efficient customer feedback system <br />
          Built interactive dashboards that consolidated complex data, streamlining feedback to Jeeves </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Mobile Development Intern</h2>
          <p className="text-sm text-gray-600">Naos Blockchain Inc. | June - August 2025</p>
          <p className="mt-2">Developed Android and iOS app using React Native and Expo <br />
          Created unit tests that improved UI-rendering performance by 25% <br />
          Deployed app and distributed for internal testing</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Teaching Assistant </h2>
          <p className="text-sm text-gray-600">Georgia Tech | April - August 2025</p>
          <p className="mt-2">Led weekly recitation for over 300 Georgia Tech students learning data structures and algorithms <br />
          Debug students code, hold office hours, grade exams and assignments</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Undergraduate Research Assistant</h2>
          <p className="text-sm text-gray-600">Georgia Tech Research Institute, Automotive LiDAR | January 2025 - Present</p>
          <p className="mt-2">Used Python and LiDAR to program robot navigation algorithms <br />
          Leveraged Robot Operating Systems and Arduino to conduct robot movement <br />
          Improved obstacle detection accuracy by 20% in autonomous test runs </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Developer</h2>
          <p className="text-sm text-gray-600">Bits of Good | August - December 2025</p>
          <p className="mt-2">Used JavaScript, React, and MongoDB to create webapps for nonprofit organizations <br />
          Collaborated with a team of developers to design and implement new features <br />
          Conducted user research and testing to improve user experience </p>
        </div>
      </div>
      {/* Education Section */}
      <h1 className='text-3xl font-bold text-center py-4'>Education</h1>
      <div className="mb-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Bachelor of Science in Computer Science</h2>
            <p className="text-sm text-gray-600">Georgia Institute of Technology | Expected Graduation: May 2027</p>
            <p className="mt-2">GPA: 3.78 Overall, 3.85 Major <br />
            Minor: FinTech (Finance and Technology) <br />
            Threads: Information Internetworks and People <br />
            Relevant Coursework: Object Oriented Programming, Data Structures, Algorithms, Computer Organization, 
            Databases, Statistics, Project Management Methodology, Finance and Investments</p>
          </div>
        </div>
      </div>
  );
};

export default Work;
