const PROFILE = {
  name: "Nisal De Silva",
  role: "Electronic & Telecommunication Engineering Undergraduate",
  github: "https://github.com/nisal-desilva",
  summary:
    "Centralized hub of hardware prototypes, embedded systems, and software projects."
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
      "Add your specific contribution here once finalized (e.g., hardware wiring, CV pipeline, or alert logic).",
    contributors: [
      { name: "Dananjaya R.P.A. (240084A)", role: "Team Member", url: "" },
      { name: "De Silva N.D. (240099A)", role: "Team Member", url: "" },
      { name: "Dewmina K.U. (240116C)", role: "Team Member", url: "" },
      { name: "Didulanga M.I. (240125D)", role: "Team Member", url: "" }
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
      // Example: "assets/driver-drowsiness-pi/prototype.jpg"
    ]
  }
];
