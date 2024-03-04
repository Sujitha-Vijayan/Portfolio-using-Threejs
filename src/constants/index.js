import {  c,cpp,java,python,springboot,django,bootstrap,html, css,javascript, react,mui,
    nextjs,git,github,linkedin,
    car,summiz,threads,snapgram,pricewise,estate,
    arrow,
    contact,
    soundon,
    soundoff} from '../assets/icons';

import { profenaa,techunity,sk } from '../assets/images';
export  const skills= [
        {
            imageUrl:c, name:"C", type:"Programming Language"
        },
        {         imageUrl:cpp,name:"C++", type:"Programming Language"  },
        {
            imageUrl:java,
            name:"Java",
            type:"Programming Language"
        },
        {
            imageUrl:python,
            name:"Python",
            type:"Programming Language"
        },
        {
            imageUrl:springboot,
            name:"Springboot",
            type:"Java Framework"
        },
        {
            imageUrl:django,
            name:"Django",
            type:"Python Framework"
        },
        {
            imageUrl:bootstrap,
            name:"Bootstrap",
            type:"CSS Framework Language"
        },
        {
            imageUrl:html,
            name:"HTML",
            type:"Frontend"
        },
        {
            imageUrl:css,
            name:"CSS",
            type:"Frontend"
        }, 
        {
            imageUrl:javascript,
            name:"JS",
            type:"Frontend"
        },
        {
            imageUrl:react,
            name:"React",
            type:"Js Library"
        },
        {
            imageUrl:mui,
            name:"Material UI",
            type:" React UI Library"
        },
        {
            imageUrl:nextjs,
            name:"Next js",
            type:" React based Framework"
        },
        {
            imageUrl:git,
            name:"Git",
            type:"Version control tool"
        }
     
    ];
export const experiences=[
        {
            title:"Software Trainer",
            company_name:"Profenaa Technologies",icon:profenaa,
            iconBg:"#accbe1",date:"2022-Current",
            points:[
                "Conducted training sessions on a range of technologies including HTML, CSS, JavaScript, Python, Django, C, C++, Java, and ReactJS.",
                " Created comprehensive training materials, including presentations, hands-on exercises, and assignments."," Collaborated with the training team to continually enhance the training curriculum. ","Assessed trainees' progress and adapted training methods as needed to ensure successful learning outcomes."
            ],
        },
        {
            title:"HR",
            company_name:"Sri Kumaran Knits",icon:sk,iconBg:"#fbc3bc",date:"2018 - 2019",points:["Maintained accurate employee records and managed employee salary records."," Proficiently oversaw the preparation and  demonstrating in-depth knowledge of ESI and PF regulations without relying on external consultancies."," Set daily, weekly, and monthly objectives and communicated them to employees. Organized workflow by assigning responsibilities and preparing schedules."," Oversaw and coached employees, ensuring adherence to safety protocols in equipment use and scheduling regular maintenance."," Checked production output according to specifications and submitted reports on performance and progress."],
        },
        {
            title:"Web Researcher",
            company_name:"TechUnity",icon:techunity,iconBg:"#a2d2ff",date:"2016-2018",points:["As a Web Researcher I'm the responsible for conducting web searches, gathering data from various websites, and updating internal documents. ","Performing web searches to gather relevant data and information from various online sources, accurately inputting and organizing collected data into internal documents or databases."],
        },
    ];
    export const socialLinks=[
        {
            name:"Contact",
            iconUrl:contact,
            link:"/contact",
        },
        {
            name:"Linkedin",
            iconUrl:linkedin,
            link:"https://www.linkedin.com/in/sujitha-vijayan-28345b259",
        },
        {
            name:"GitHub",
            iconUrl:github,
            link:"https://github.com/Sujitha-Vijayan",
        },
    ]
    export const projects =[
        {
            iconUrl:pricewise,
            theme:"btn-back-red",
            name:"Project1",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
        {
            iconUrl:threads,
            theme:"btn-back-green",
            name:"Project2",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
        {
            iconUrl:car,
            theme:"btn-back-blue",
            name:"Project3",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
        {
            iconUrl:snapgram,
            theme:"btn-back-pink",
            name:"Project4",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
        {
            iconUrl:summiz,
            theme:"btn-back-yellow",
            name:"Project5",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
        {
            iconUrl:estate,
            theme:"btn-back-black",
            name:"Project6",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea atque amet magnam quisquam soluta molestiae fugit sit at voluptatem!",
            link:" ",
        },
    ]
export default {skills,experiences,socialLinks,projects};