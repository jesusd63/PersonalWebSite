import { Project } from "components/project";

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
                technologies={["Azure", "Modal", "HuggingFace", "Python", "Unsloth", "Flask"]}
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
                technologies={["Oracle Cloud Infrastructure", "Java", "Spring", "React", "Docker", "Kubernetes"]}
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
                technologies={["Google Firebase", "React Native", "React"]}
                img="/images/BAMXTeam.jpg"
                alt="Team presenting the Mexican Food Bank App"
            />
        </div>
    );
}