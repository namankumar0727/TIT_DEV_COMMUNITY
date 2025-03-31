import React, { useState } from "react";
import bg3 from "../../assets/bg3.png";

const FAQsSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "How can I join the TIT Developer Community?", answer: "You can join through our annual Coding Quest competition or hackathon recruitments." },
        { question: "Are there any prerequisites for joining?", answer: "No prerequisites! We welcome students from all technical backgrounds and experience levels." },
        { question: "What events do you organize?", answer: "We host workshops, hackathons, mentorship programs, and coding competitions throughout the year." },
        { question: "How can I participate in mentorship programs?", answer: "Our mentorship programs are open to all registered members. You can apply for mentorship through our portal." },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div 
            className="mx-0 md:-mx-3 relative min-h-screen flex items-center justify-center px-6 py-20 md:w-screen w-[780px]"
            style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm"></div>

            <div className="relative w-[780px] md:w-screen text-black">
                <h2 className="text-7xl font-extrabold text-center bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text font-orbitron">
                    FAQs
                </h2>
                <p className="text-lg text-gray-700 text-center mt-6 max-w-3xl mx-auto font-Montserrat">
                    Find answers to the most commonly asked questions about our community and events.
                </p>

                <div className="max-w-3xl mx-auto mt-12 space-y-6 md:px-0 px-10">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className= "bg-gradient-to-r from-gray-400 to-gray-100 p-6 rounded-2xl shadow-2xl text-black cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-900 to-blue-600 text-transparent bg-clip-text font-archivo flex justify-between items-center">
                                {faq.question}
                                <span className="text-2xl transition-transform duration-300" style={{ transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
                                    ▼
                                </span>
                            </h3>
                            <div 
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"}`}
                            >
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQsSection;
