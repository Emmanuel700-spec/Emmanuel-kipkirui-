const languagesDone = [
    {
        name: 'JavaScript',
        percentDone: 85
    },
    {
        name: 'Python',
        percentDone: 75
    },
    {
        name: 'HTML',
        percentDone: 90
    },
    {
        name: 'CSS',
        percentDone: 80
    },
    {
        name: 'React',
        percentDone: 70
    },
    {
        name: 'Django',
        percentDone: 60
    },
    {
        name: 'Flask',
        percentDone: 65
    }
];

const EducationData = {
    collegeName: "Moringa School",
    courseName: "Certificate in Software Development",
    courseStartYear: "2024",
    courseEndYear: "2024",
    details: [
        "I joined Moringa School in 2024, where I received a strong foundation in software engineering.",
        "Studied and practiced key concepts in web development, backend frameworks, and full-stack engineering.",
        "Completed projects involving JavaScript, React, Flask, and Django, along with database management and APIs."
    ],
    codingStatus: languagesDone,
    certifications: [
        {
            title: "Software Development Certification",
            instructor: "Moringa School",
            link: "/certificates/certificate.jpg",
            platform: "Moringa School",
            date: "November 2024",
            description: "Recognized for completing a comprehensive program in software engineering, including full-stack web development, data structures, and algorithms."
        },
        {
            title: "Introduction to Computer Studies",
            instructor: "African Complink College",
            link: "/certificates/intro-to-computer.jpg",
            platform: "African Complink College",
            date: "March 2024",
            description: "Completed foundational training in computer studies, covering topics like MS Office, networking, and keyboarding.",
            modules: [
                "MS Office Suite (Word, Excel, PowerPoint)",
                "Networking Basics",
                "Keyboarding and Typing Skills",
                "Introduction to Operating Systems",
                "Database Management (Introduction to Access)",
                "Basic Programming Concepts",
                "Introduction to Internet and Web Browsing",
                "File Management and System Navigation"
            ]
        }
    ]
};

export default EducationData;
