import React from "react";
import { useSelector } from "react-redux";
import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData";

const Certifications = () => {
    // Fetching non-theme color from Redux state
    const nonThemeColor = useSelector((state) => state.nonThemeColor) || "#000";

    // Fetching certifications list from CertificatesData
    const { certificationsList } = CertificatesData;

    return (
        <div className={classes.certificationsContainer}>
            {/* Page Title */}
            <h1 style={{ color: nonThemeColor }} className={classes.title}>
                Certifications
            </h1>

            {/* Certificate Cards */}
            <div className={classes.certificateCard}>
                {certificationsList.length > 0 ? (
                    certificationsList.map((item, index) => (
                        <CreateCertificate key={index} item={item} />
                    ))
                ) : (
                    <p className={classes.noCertificates}>No certifications available.</p>
                )}
            </div>
        </div>
    );
};

export default Certifications;
