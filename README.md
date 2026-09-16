🔢 Counter App — Redux Toolkit Fundamentals

A simple counter application built to master the core concepts of Redux Toolkit — store setup, slices, actions, and connecting React components to global state.

🔗 Live Demo: https://counter-regex.vercel.app/

This is Part 1 of a two-part Redux Toolkit learning project. Part 2 is a full e-commerce cart app with async data, persistence, and wishlist logic — check it out here.

Features
Increment / Decrement — basic counter controls
Reset — return the counter to zero
Increment by custom value — user-input-driven state updates
What This Project Covers
Store configuration with configureStore
Slice-based state management using createSlice
Reading state with useSelector
Dispatching actions with useDispatch
Structuring reducers and actions in a scalable way, even for a small app

The goal here wasn't complexity — it was to build muscle memory for the Redux Toolkit workflow (actions, reducers, store) without the noise of async logic or middleware, before taking those concepts into a bigger project.

Tech Stack
Category	Technology
UI Library	React.js
State Management	Redux Toolkit, React-Redux
Styling	Bootstrap
Build Tool	Vite
Getting Started
bash
# Clone the repo
git clone https://github.com/nivakclt/counter-regex.git
cd counter-regex

# Install dependencies
npm install

# Run the dev server
npm run dev

The app will be available at http://localhost:5173 (default Vite port).

Project Structure
src/
├── redux/
│   ├── slices/       # counterSlice.js
│   └── store.js      # Store configuration
├── CounterPage.jsx    # Main UI + dispatch logic
└── App.jsx
