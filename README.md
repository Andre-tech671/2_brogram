# 🏋️ Brogram - The 30 Day Workout Program

A React-based workout tracking application implementing the classic "Bro Split" training program. Track your progress through 30 days of structured Push, Pull, and Legs workouts with progressive unlocking and weight tracking.

![Brogram](https://img.shields.io/badge/version-1.0.0-blue) ![React](https://img.shields.io/badge/React-19.2.0-61DAFB) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)

## ✨ Features

- **30-Day Structured Program**: Complete workout routine following the Bro Split (Push → Pull → Legs → Repeat)
- **Progressive Unlocking**: Workouts unlock sequentially as you complete each day
- **Weight Tracking**: Save and track your working weights for each exercise
- **Exercise Descriptions**: Helpful modal popups explaining each exercise with proper form
- **Local Storage Persistence**: Your progress and weights are saved automatically
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Progress Indicators**: Lock/unlock status and completion tracking

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: [Fantacss](https://www.fantacss.smoljames.com/)
- **Language**: JavaScript (ES6+)
- **Portals**: React DOM Portals for modal rendering

## 📁 Project Structure

```
2_brogram/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg            # React logo
│   ├── components/
│   │   ├── Grid.jsx             # Main workout grid display
│   │   ├── Hero.jsx             # Program rules and info section
│   │   ├── Layout.jsx           # App layout with header/footer
│   │   ├── Modal.jsx            # Exercise description modal
│   │   ├── WorkoutCard.jsx      # Individual workout display
│   │   └── code.txt             # Component code notes
│   ├── utils/
│   │   └── index.js             # Workout program data & exercise descriptions
│   ├── App.jsx                  # Main application component
│   ├── fantacss.css             # Fantacss custom styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   
```
bash
   git clone <repository-url>
   cd 2_brogram
   
```

2. Install dependencies:
   
```
bash
   npm install
   
```

3. Start the development server:
   
```
bash
   npm run dev
   
```

4. Open your browser and navigate to the URL shown (typically `http://localhost:5173`)

### Build for Production

```
bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```
bash
npm run preview
```

## 📋 The Program

### The Rules

1. **Rest**: Ensure you take rest days where necessary
2. **Reps**: Every rep is a pause rep following a 2-2-2 tempo (2 seconds down, 2 seconds pause, 2 seconds up)
3. **Weight**: Select the maximum weight that allows you to complete the set with good form

> **Note**: The first and second set should be at 75% and 85% of your working weight used for the last two sets.

### Training Split

The program uses a **Bro Split** rotation:
- **Push** → **Pull** → **Legs** → **Repeat**

Each cycle contains:
- **Push Day**: Chest, Shoulders, Triceps
- **Pull Day**: Back, Biceps, Rear Delts
- **Legs Day**: Quads, Hamstrings, Glutes, Calves

### Workout Structure

Each workout day contains:
- **Warmup Exercises**: 2 exercises, 2 sets, 20-30 reps
- **Workout Exercises**: 5 exercises, 3 sets, 10-15 reps
- **Progressive Overload**: Weights are tracked and saved for progression

## 💻 Usage Guide

1. **View Workouts**: Scroll through the grid to see all 30 workout days
2. **Start a Workout**: Click on an unlocked workout card to open it
3. **Enter Weights**: Input your working weights for each exercise
4. **Save Progress**: Click "Save & Exit" to save your weights
5. **Complete Workout**: Click "Complete" to mark the workout as done and unlock the next day
6. **Get Help**: Click the question mark icon next to any exercise to see form instructions

## 🔧 Component Overview

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Main application container |
| `Layout.jsx` | Header, footer, and content wrapper |
| `Hero.jsx` | Program rules and training plan information |
| `Grid.jsx` | Workout day cards grid with unlock logic |
| `WorkoutCard.jsx` | Individual workout display with exercise list |
| `Modal.jsx` | Exercise description popup using React Portals |
| `utils/index.js` | Workout program data and exercise descriptions |

## 📝 Data Structure

### Workout Program (in `utils/index.js`)

```
javascript
{
  0: {  // Push
    warmup: [{ name: "...", sets: 2, reps: 25 }],
    workout: [{ name: "...", sets: 3, reps: 10 }]
  },
  // ... 30 total workouts (0-29)
}
```

### Exercise Descriptions

Each exercise includes a detailed description explaining proper form and technique, accessible via the help icon in the workout card.

## 🤝 Credits

- **Built By**: [Stackdretech](https://stackdretech.netlify.app/)
- **Styled With**: [Fantacss](https://www.fantacss.smoljames.com/)

## 📄 License

This project is for educational purposes.

---

**Note**: Always consult with a healthcare professional before starting any new exercise program. Use proper form and start with weights appropriate for your fitness level.
