import { GridList } from "components/gridList";

const p_languages_and_pic = [
    { title: "Python", imgSrc: "/images/Python.png" },
    { title: "Java", imgSrc: "/images/Java.png" },
    { title: "JavaScript", imgSrc: "/images/JavaScript.png" },
    { title: "R", imgSrc: "/images/R.png" },
    { title: "C++", imgSrc: "/images/C++.png" },
    { title: "C", imgSrc: "/images/C.png" },
    { title: "C#", imgSrc: "/images/CSharp.png" },
    { title: "HTML", imgSrc: "/images/HTML.png" },
    { title: "CSS", imgSrc: "/images/CSS.png" },
    { title: "SQL", imgSrc: "/images/SQL.png" },
    { title: "Rust", imgSrc: "/images/Rust.png" },
    { title: "Kotlin", imgSrc: "/images/Kotlin.png" },
]
const technologies_and_pic = [
    { title: "React/React Native", imgSrc: "/images/React.png" },
    { title: "Next.js", imgSrc: "/images/Nextjs.svg" },
    { title: "Angular", imgSrc: "/images/Angular.png" },
    { title: "Node.js", imgSrc: "/images/Node.png" },
    { title: "Express"},
    { title: "Docker", imgSrc: "/images/Docker.png" },
    { title: "Kubernetes", imgSrc: "/images/Kubernetes.png" },
    { title: "Github", imgSrc: "/images/github-mark-white.svg" },
    { title: "AWS", imgSrc: "/images/AWS.png" },
    { title: "Azure", imgSrc: "/images/Azure.png" },
    { title: "Oracle Cloud", imgSrc: "/images/OracleCloud.png" },
    { title: "Google Cloud", imgSrc: "/images/GoogleCloud.webp" },
]

const methodologies_and_pic = [
    { title: "Agile", imgSrc: "/images/Agile.jpg" },
    { title: "Scrum", imgSrc: "/images/Scrum.svg" },
    { title: "Kanban", imgSrc: "/images/Kanban.png" },
];

export default async function Page() {
    return (
        <div className="text-center">
            <h1 className="mb-8">Education</h1>
            {/* Studies */}
                <h2 className="text-[#D90429]">Studies</h2>
                <ul>
                    <li className="mt-2">Bachelor's Degree in Computer Science - Tecnologico de Monterrey (2025)</li>
                    <li>Exchange Program at University of Toronto (2024)</li>
                </ul>
            {/* Certifications */}
                <h2 className="mt-8 text-[#D90429]">Certifications</h2>
                <ul>
                    <li className="mt-2">Oracle Certified Foundations Associate - 2024 - 2026  </li>
                    <li>AWS Academy Cloud Foundations - 2025 </li>
                </ul>
            {/* Skills */}
                <h2 className="mt-8 text-[#D90429]">Skills</h2>
                    <h3 className="mt-2 mb-6">Programming Languages:</h3>
                        <GridList items={p_languages_and_pic.map(item => item.title)} imgSrc={p_languages_and_pic.map(item => item.imgSrc)} />
                        <div className="border-t border-[var(--color-primary-content)] border-3  my-4"></div>
                    <h3 className="mt-4 mb-6">Technologies:</h3>
                        <GridList items={technologies_and_pic.map(item => item.title)} imgSrc={technologies_and_pic.map(item => item.imgSrc)} />
                        <div className="border-t border-[var(--color-primary-content)] border-3  my-4"></div>
                    <h3 className="mt-4 mb-6">Methodologies:</h3>
                        <GridList items={methodologies_and_pic.map(item => item.title)} imgSrc={methodologies_and_pic.map(item => item.imgSrc)} />
                        <div className="border-t border-[var(--color-primary-content)] border-3  my-4"></div>
                    <h3 className="mt-4 mb-6">Languages:</h3>
                        <p>
                            Spanish (Native), English (Fluent), French (Fluent), German (Basic), Japanese (Basic)
                        </p>
                        <div className="border-t border-[var(--color-primary-content)] border-3  my-4"></div>
                    <h3 className="mt-4 mb-6">Activities:</h3>
                        <p>
                            Staff Member in several productions, member of school orchestra
                        </p>
        </div>
    );
}