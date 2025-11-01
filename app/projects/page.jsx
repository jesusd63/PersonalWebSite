import { Project } from "components/project";

const p1 = [
    { title: "Azure", imgSrc: "/images/Azure.png" },
    { title: "Modal", imgSrc: "/images/Modal.webp" },
    { title: "HuggingFace", imgSrc: "/images/HuggingFace.png" },
    { title: "Python", imgSrc: "/images/Python.png" },
    { title: "Unsloth", imgSrc: "/images/Unsloth.png" },
    { title: "Flask", imgSrc: "/images/Flask.png" },
]

const p2 = [
    { title: "Oracle Cloud Infrastructure", imgSrc: "/images/OracleCloud.png" },
    { title: "Java", imgSrc: "/images/Java.png" },
    { title: "Spring", imgSrc: "/images/Spring.png" },
    { title: "React", imgSrc: "/images/React.png" },
    { title: "Docker", imgSrc: "/images/Docker.png" },
    { title: "Kubernetes", imgSrc: "/images/Kubernetes.png" },
]

const p3 = [
    { title: "Google Firebase", imgSrc: "/images/Firebase.png" },
    { title: "React Native", imgSrc: "/images/React.png" },
    { title: "React", imgSrc: "/images/React.png" },
]

export default async function Page() {
    return (
        <div className="text-center">
            <h1 className="mb-8">Projects</h1>
            <Project
                title="C3 Agent to solve Github issues"
                description="Worked on adapting SWE-Agent so it would be able to solve OOP code problems. It uses
                a github repository link and issue link as input to produce a patch that can be applied directly to
                the branch. It's hosted on Azure and Modal."
                link="https://github.com/Talent-Pentagon/JesusEnriqueDiazBernalRobinsonBours"
                projectLink="https://link.springer.com/chapter/10.1007/978-3-032-09044-7_9"
                date="03/25 - 06/25"
                technologies={p1.map(item => item.title)}
                technologies_img={p1.map(item => item.imgSrc)}
                img ="/images/PentagonTeam.jpg"
                alt="The team at a project presentation"
            />
            <Project
                title="Oracle ChatBot in Telegram"
                description="Worked on a ChatBot with the purpose of increasing productivity 
                and visibility in developers’ teams at Oracle by letting them manage tasks 
                Created a Telegram Bot connected to Oracle Cloud Infrastructure Worked 
                with a team using scrum framework"
                link="https://github.com/juanjosalco/Oracle_Java_Bot"
                date="02/24 - 05/24"
                technologies={p2.map(item => item.title)}
                technologies_img={p2.map(item => item.imgSrc)}
                img="/images/Orabot_Pipeline.jpg"
                alt="Oracle ChatBot Pipeline Diagram"
            />
            <Project 
                title="Mexican FoodBank App (Web and Mobile)"
                description="Collaborated with the Mexican Food Bank to create solutions 
                for the distribution and management of their donations, making it faster and easier.
                Created a mobile app for donors, and a web app for administrators of the bank.
                Implemented secure 2FA Worked with an agile framework"
                link="https://github.com/orgs/BAMX-Food-Bank-Application/repositories"
                date="08/23 - 11/23"
                technologies={p3.map(item => item.title)}
                technologies_img={p3.map(item => item.imgSrc)}
                img="/images/BAMXTeam.jpg"
                alt="Team presenting the Mexican Food Bank App"
            />
        </div>
    );
}