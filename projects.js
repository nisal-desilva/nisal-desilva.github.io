const PROFILE = {
  name: "Nisal Dinupiya De Silva",
  role: "Electronic & Telecommunication Engineering Undergraduate",
  github: "https://github.com/nisal-desilva",
  summary:
    "Centralized hub of information about Individual and Group projects I have worked on."
};

const PROJECTS = [
  {
    id: "zone-noise-monitor",
    title: "Z.O.N.E. — Zonal Observer for Noise Evaluation",
    term: "Semester 2 · EN1190 Group Project",
    year: "2026",
    category: ["Embedded", "IoT", "PCB & Hardware", "Group Project"],
    status: "Near-Product / Pilot-Ready",
    summary:
      "Wall-mounted automated noise monitoring and alert system built on an ESP32-S3 with three I2S MEMS microphones, a custom addressable LED 3-digit display and warning ring, voice alerts via MAX98357A, and a mobile app synced via BLE and Firebase.",
    myContribution:
      "Core operating algorithm and alert/threshold logic design, firmware development, input/output component selection, and custom LED display design and creation within the enclosure.",
    contributors: [
      {
        name: "J.A.D.P. Piniwan",
        role: "PCB Design, Controller/Power Selection & BOM",
        url: "https://github.com/piniwanjayasuriya-commits"
      },
      {
        name: "N.D. De Silva",
        role: "Algorithm & Firmware, I/O Selection & Display/Enclosure",
        url: "https://github.com/nisal-desilva"
      },
      {
        name: "Y.V. Gunawardana",
        role: "Enclosure Design, Material Selection & BOM",
        url: "https://github.com/Yenumi"
      },
      {
        name: "I.A. Gunawardena",
        role: "PCB Design & App-Device Communication Network",
        url: "https://github.com/isula2004"
      }
    ],
    techStack: [
      "ESP32-S3-WROOM-1",
      "INMP441 I2S Mics",
      "MAX98357A I2S Amp",
      "Addressable LEDs",
      "BLE & Firebase",
      "LittleFS",
      "SolidWorks 2025"
    ],
    highlights: [
      "Validated with a 68-student survey and university Head Librarian feedback; displays live noise as a threshold percentage rather than raw dB",
      "Measured sound fluctuations up to ~30 m; power draw ~4 W avg / 5.35 W max locally and ~5.70 W avg / 7.15 W max with Wi-Fi",
      "Estimated prototype BOM of 28,580 LKR (~42,870 LKR small-scale unit price with 50% markup); future work includes slimmer speaker/enclosure (<60 mm) and direction sensing"
    ],
    githubUrl: "https://github.com/nisal-desilva/ZONE_by_EIGENSS",
    videos: [],
    images: [
      
      { src: "assets/zone-noise-monitor/initial_design.jpeg", caption: "Initial Handsketches" },
      { src: "assets/zone-noise-monitor/display_in_progress.jpeg", caption: "Display Creation in progress" },
      { src: "assets/zone-noise-monitor/app_interface.jpeg", caption: "Interface of Mobile Application" },
      { src: "assets/zone-noise-monitor/final-product_in_action.jpeg", caption: "Z.O.N.E. unit in Action" },
      { src: "assets/zone-noise-monitor/group_photo.jpeg", caption: "Team Eigenss with Z.O.N.E" }
    ]
  },
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
    githubUrl: "https://github.com/nisal-desilva/Driver_Drowsiness_Detection", // Leave empty when no repo exists
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
