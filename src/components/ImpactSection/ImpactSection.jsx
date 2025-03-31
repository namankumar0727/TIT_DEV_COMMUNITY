const ImpactSection = () => {
      const stats = [
    { title: "ATS-Friendly Resumes Crafted", value: "90%+", description: "Helping students stand out in job applications." },
    { title: "Versatile Tech Domains", value: "AI to Cybersecurity", description: "Mastering a wide range of technologies." },
    { title: "Students Empowered in ML", value: "15+", description: "Building AI-powered solutions." },
    { title: "Web Developers Guided", value: "15+", description: "Crafting sleek & responsive websites." },
    { title: "Cybersecurity Enthusiasts Mentored", value: "30+", description: "Strengthening digital defense skills." },
    { title: "Events Organized", value: "Workshops, Hackathons, Presentations", description: "Fostering learning and collaboration." },
  ];
  
  return (
    <div>
        <div className="mx-0 md:-mx-3 overflow-x-hidden bg-gradient-to-r from-white to-gray-400 text-black py-16 px-12 md:w-screen w-[780px]">
        <h2 className="text-7xl font-extrabold text-center bg-gradient-to-r from-white to-black bg-clip-text font-orbitron">
         Wall of Impact
        </h2>
        <p className="text-lg text-black-400 text-center mt-6 max-w-2xl mx-auto font-Montserrat">
          Real numbers, real impact. See how we’re shaping the future of tech.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl md:mx-auto mx-4 mt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-2xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-900 to-blue-600 text-transparent bg-clip-text font-archivo">
                {stat.value}
              </h3>
              <p className="text-2xl font-semibold mt-3 font-archivo">{stat.title}</p>
              <p className="text-lg mt-2 text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ImpactSection