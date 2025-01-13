const diplomas = [
  {
    name: "Diploma in Information Technology",
    id: "diploma-in-information-technology",
    sessions: [
      {
        name: "Programming Fundamentals 1",
        id: "programming-fundamentals",
        details: {
          moduleName: "Programming Fundamentals 1",
          name: "Hannah Lim",
          id:"DIT1",
          desc: "Students will learn to apply computational thinking methods to decompose, abstract, identify patterns to problems, and assemble a series of computer instructions that solve a problem using a computer program. Students will be able to explain and write computer instructions that employ the use of variables, input and output statements, decision-making constructs, repetition constructs, and functions. They will also learn to test and debug computer programs to ensure optimal performance of the programs.",
          title: "SOI Lecturer",
        },
      },
      {
        name: "IT Security and Management",
        id: "it-security-and-management",
        details: {
          moduleName: "IT Security and Management",
          name: "Andy Tao",
          id:"DIT1",
          desc: "This module addresses the best practices of the development and management of effective security systems with coverage on information, personnel, physical security, and risk analysis for information protection. It provides a broad overview of the principles and elements of information technology security. It covers the basic principles of the CIA model – Confidentiality, Integrity and Availability. Topics covered include IT security threats, security techniques, security services, and system security features. Students will also be introduced to the different information security standards available in the IT industry such as ISO 27001 that implements a security framework for organisations.",
          title: "SOI Lecturer",
        },
      },
    ],
  },
  {
    name: "Diploma in Financial Technology",
    id: "diploma-in-financial-technology",
    sessions: [
      {
        name: "Financial Ecosystems",
        id: "financial-ecosystems",
        details: {
          moduleName: "Financial Ecosystems",
          name: "Sol Yan",
          id:"DFT1",
          desc: "This module introduces students to the financial industry and its ecosystem. Students will learn about the different types of financial institutions, their roles and functions in the financial industry, how they interact with each other and their significance to the economy. The module will also cover financial products and services and their processes. Students will be exposed to the concepts of financial technologies (FinTech) and how it is changing the ecosystem as well.",
          title: "SOI Lecturer",
        },
      },
      {
        name: "Security in the Age of AI",
        id: "security-in-age-of-ai",
        details: {
          moduleName: "Security in the Age of AI",
          name: "Daniel Rohan",
          id:"DFT2",
          desc: "With security crises gaining in prevalence, it's more important than ever for us to make sure that our AI can't be hacked. How can we avoid all the data noise out there?",
          title: "Cyber Security Specialist",
        },
      },
    ],
  },

];

export function getSession({ sessionId, catId }) {
  return diplomas
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

// Flattens the sessions array from all diplomas into a single array of sessions
// Search for a specific session by ID
// if session found, return details, (containing name, desc, title)
export function getDetails(modId) {
  return diplomas.flatMap(diploma => diploma.sessions).find(session => session.id === modId)?.details;
}

export function getName() {
  return 
}

export function getDiploma(dipId) {
  return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
