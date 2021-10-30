import { FaReact, FaJsSquare, FaHtml5, FaCss3, FaNode, FaGit, FaGithub, FaDatabase } from "react-icons/fa" ;
import {DiMongodb} from "react-icons/di";
import {SiMysql, SiGraphql, SiHandlebarsdotjs, SiVisualstudio, SiExpress, SiHeroku} from "react-icons/si";

export const skillList = [
    {
        type: "MERN-STACK",
        list: [
            {
                name: "HTML",
                icon: <FaHtml5 style={{ color:'#e34f26'}}/>
            },
            {
                name: "CSS",
                icon: <FaCss3 style={{ color:'#2965f1'}}/>
            },
            {
                name: "JavaScript",
                icon: <FaJsSquare  style={{ color:'#f7df1e'}}/>
            },
            {
                name: "ReactJS",
                icon: <FaReact style={{ color:'#00d8ff'}}/>
            },
            {
                name: "HandlebarsJS",
                icon: <SiHandlebarsdotjs style={{ color:'#5c4848'}}/>
            },
            {
                name: "NodeJS",
                icon: <FaNode style={{ color:'#215732'}}/>
            },
            {
                name: "ExpressJS",
                icon: <SiExpress />
            },
            {
                name: "RESTful APIs",
                icon: ""
            },
            {
                name: "MongoDB",
                icon: <DiMongodb style={{ color:'#589636'}} />
            },
            {
                name: "GraphQL",
                icon: <SiGraphql style={{ color:'#e535ab'}}/>
            },
            {
                name: "SQL",
                icon: <SiMysql/>
            },
            {
                name: "NoSQL",
                icon: <FaDatabase style={{color:'#'}}/>
            },
            {
                name: "Git",
                icon: <FaGit/>
            },
            {
                name: "GitHub",
                icon: <FaGithub/>
            },
            {
                name: "Heroku",
                icon: <SiHeroku style={{color:'#6567a5'}}/>
            },
            {
                name: "Visual Studio Code",
                icon: <SiVisualstudio style={{color:'#0078d7'}} />
            },
        ]
    }
]