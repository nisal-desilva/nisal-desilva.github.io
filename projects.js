const PROFILE = {
  name: "Nisal Dinupiya De Silva",
  role: "Electronic & Telecommunication Engineering Undergraduate",
  github: "https://github.com/nisal-desilva",
  summary:
    "Centralized hub of information about Individual and Group projects I have worked on."
};

const PROJECTS = [
  {
    id: "driver-drowsiness-pi",
    title: "Smart Anti-Sleep Safety Alert for Drivers (Prototype)",
    term: "Term 01 · Group Project",
    year: "2025",
    category: ["Embedded", "Computer Vision", "Group Project"],
    status: "Prototype",
    summary:
      "Real-time Raspberry Pi 4 drowsiness prototype using OpenCV and Dlib facial landmarks to track Eye Aspect Ratio (EAR), paired with low-light enhancement, OLED/LED/buzzer alerts, and Telegram notifications.",
    myContribution:
      "Algorithm Design, Alert logic and Hardware implementation",
    contributors: [
      { name: "Dananjaya R.P.A.", role: "Team Member", url: "https://github.com/AnushaDananjaya" },
      { name: "De Silva N.D.", role: "Team Member", url: "https://github.com/nisal-desilva" },
      { name: "Dewmina K.U.", role: "Team Member", url: "https://github.com/KUDewmina" },
      { name: "Didulanga M.I.", role: "Team Leader", url: "https://github.com/inethdidu-hub" }
    ],
    techStack: [
      "Raspberry Pi 4",
      "Python",
      "OpenCV",
      "Dlib",
      "NumPy / SciPy",
      "SSD1306 OLED",
      "Telegram Bot API"
    ],
    highlights: [
      "~150–300 ms alert response time and >90% accuracy in well-lit tests",
      "CLAHE + gamma brightness adaptation and frame-buffer flushing for lower latency",
      "Noted limits: complete darkness (non-IR camera), reflective spectacles, and camera distance"
    ],
    githubUrl: "", // Leave empty when no repo exists
    videoUrl: "",  // Optional YouTube watch/embed URL
    images: [
      {
        src: "assets/driver-drowsiness-pi/Basic_Circuit_Diagram.jpg",
        caption: "Basic Circuit Diagram"
      },
      {
        src: "assets/driver-drowsiness-pi/Outer_View.jpg",
        caption: "Outer View"
      },
      {
        src: "assets/driver-drowsiness-pi/Complete_Setup.jpg",
        caption: "Complete Setup"
      },
      {
        src: "assets/driver-drowsiness-pi/Group_Photo.jpg",
        caption: "Group Photo"
      }
    ]
  }
];
