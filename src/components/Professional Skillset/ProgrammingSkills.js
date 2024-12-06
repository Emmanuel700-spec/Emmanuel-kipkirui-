import classes from "./programmingSkills.module.css";
import { JavaScript, Python, ReactJS, HTML, CSS, NodeJs, Git, MySQL } from "../asset/svg/svg";
import { useSelector } from "react-redux";

// Array of skill names
const skills = ["JavaScript", "Python", "ReactJS", "HTML", "CSS", "NodeJs", "Git", "MySQL"];

// Array of corresponding icon components
const skillIcons = [JavaScript, Python, ReactJS, HTML, CSS, NodeJs, Git, MySQL];

const ProgrammingSkills = (props) => {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{ color: nonThemeColor }}>Programming <span style={{ color: uiColor }}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((skill, index) => {
                    const SkillIcon = skillIcons[index]; // Get the corresponding icon component
                    return (
                        <div className={classes.skillItem} style={{ borderColor: uiColor }} key={index}>
                            <SkillIcon /> {/* Render the icon component */}
                            <span className={classes.skillName}>{skill}</span> {/* Display the skill name */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgrammingSkills;
