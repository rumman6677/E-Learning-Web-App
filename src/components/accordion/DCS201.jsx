import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function DCS201() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="md:w-8/12 lg:w-8/12 mx-auto">
            <div className="text-center my-4 md:mb-4 lg:mb-10">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Frequently asked questions, answered</h1>
            </div>
            <div className="space-y-1">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">
                            What is DCS201?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            DCS201 is a professional certification in Defensive Cyber Security, designed to equip learners with Advanced skills and knowledge to defend against various cyber threats. It covers key concepts such as malware analysis, digital forensic and threat hunting.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">Is There a Prerequisite Work Experience?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            Strong knowledge of computer networks and operating systems. Familiarity with Cyber Threat Intelligence and Digital Forensic & Incident Response. At least 2-3 years cybersecurity experience is required and a passion for learning and solving complex problems is a plus
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">
                            What does the DCS201 Exam Look Like?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            The DCS201 exam is entirely practical, focusing on real-world scenarios where you apply defensive security techniques. In addition to the hands-on tasks, you will also be required to prepare a detailed report to demonstrate your findings and analysis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">
                            Can I apply the skills learned in this course to real-world scenarios?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            Absolutely. The course is designed to provide practical skills and knowledge that you can directly apply to protect your organization's digital assets and infrastructure.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">How Much Time Should I Dedicate to Studying DCS201?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            We recommend dedicating at least 5-7 hours per week over a 3-month period to thoroughly understand and master the material covered in the DCS201 course. However, the exact time needed may vary depending on your prior knowledge and experience.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">Will I receive a certification upon completion?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            Yes, participants who complete the course and pass the final assessment will receive a certification of completion, which can enhance your resume and demonstrate your expertise to employers.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">Does the DCS201 Certification Expire?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            No, the DCS201 Certification does not expire. Once you earn it, you can showcase your knowledge and skills in defensive cybersecurity indefinitely without the need for renewal
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="border border-cyan-400">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                        style={{ background: "#0b121f", color: "white" }}
                    >
                        <Typography className="w-52 md:m-96 lg:w-full flex-shrink-0">How do I enroll in the course?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#141d2b", color: "white" }} className="border-t border-cyan-400">
                        <Typography>
                            You can enroll in the course by visiting our website and completing the registration form. Early registration is recommended as spaces are limited.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="my-4 text-center">
                <p className="md:text-lg lg:text-xl">More questions? Feel free to mail at <span className="text-cyan-500">academy@penough.com</span></p>
            </div>
        </div>
    );
}