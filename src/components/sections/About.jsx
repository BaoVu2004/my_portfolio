import { RevealOnScroll } from "../RevealOnScroll";
import { LogoTicker } from "../LogoTicker";


export const About = () => {
    const frontendSkills = ["React", "TypeScript", "TailwindCSS", "HTML", "CSS"]
    const backendSkills = ["Node.js", "Python", "Java", "C", "JavaScript"]
    return (
        
        <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20 bg-[#c9d9f4]"
        >   
            <RevealOnScroll>
                <div className="flex justify-center mb-8 ">
                    <div className="w-[1000px] sm:w-[1400px] overflow-hidden">
                        <LogoTicker />
                    </div>
                </div>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
                    <p className="text-gray-900 text-lg mb-10">
                        Passionate developer with a strong ambition for fintech and AI.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 hap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skills) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {skills}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skills) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {skills}
                                    </span>
                                ))}
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                        <ul className="list-disc list-inside text-gray-900 space-y-2">
                            <li>
                                <strong>
                                    Studying Bachelor of Computing Science (Honours) - University of Technology Sydney
                                </strong>
                            </li>
                            <li>
                                Relevant Coursework: Data Structures and Algorithms, Web Development, Cloud Computing...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-900">
                            <div> 
                                <h4 className="font-semibold"> Pending Internship at ... </h4>
                                <p>
                                    Currently applying to alot of internships
                                </p>
                            </div>
                            <div> 
                                <h4 className="font-semibold"> Pending Internship at ... </h4>
                                <p>
                                    Currently applying to alot of internships
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all md:col-span-2">
                        <h3 className="text-xl font-bold mb-4 text-center"> 🏋️‍♂️ Hobbies </h3>
                            <ul className="list-disc list-inside text-gray-900 space-y-2">
                                <li>Going to the gym</li>
                                <li>Playing weekend Basketball with friends</li>
                                <li>Going on random hikes and runs</li>
                                <li>Building interesting side projects</li>
                                <li>Watching anime during my free time</li>
                                <li>Trying new coffee and matcha places</li>
                            </ul>
                    </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}