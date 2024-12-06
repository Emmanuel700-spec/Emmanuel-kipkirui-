import React from "react";
import PropTypes from "prop-types"; // For prop validation
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

const ProjectItem = React.memo((props) => {
    const uiColor = useSelector((state) => state.uiColor);
    const nonThemeColor = useSelector((state) => state.nonThemeColor);

    const { projectTitle, description = "Project description", sourceLink, lastUpdated } = props.project;

    // Truncate description if too long
    const truncatedDescription = description.length > 120 
        ? `${description.substr(0, 120)}...` 
        : description;

    return (
        <Card className={classes.projectItem}>
            <h2 style={{ color: uiColor }}>{projectTitle || "Untitled Project"}</h2>
            <p className={classes.description}>{truncatedDescription}</p>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={sourceLink || "#"}
                        style={{ color: nonThemeColor }}
                    >
                        <GitHubIcon fontSize="large" />
                    </a>
                </div>
                <p className={classes.dateUpdated} style={{ color: nonThemeColor }}>
                    Last Updated On: {lastUpdated || "Unknown"}
                </p>
            </div>
        </Card>
    );
});

// Validate props
ProjectItem.propTypes = {
    project: PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        description: PropTypes.string,
        sourceLink: PropTypes.string,
        lastUpdated: PropTypes.string,
    }),
};

export default ProjectItem;
