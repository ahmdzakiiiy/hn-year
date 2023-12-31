import { useState } from "react";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Countdown from "react-countdown";

function App() {

  const [newYearMessage, setNewYearMessage] = useState(["Siap-siap Tiara", "Bye", "2023"])

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-5">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
          />
        </span>

        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat", "Tahun", "Baru!", "Happy", "New", "Year", "2023", "Semoga Tiara Bahagia Selalu", "💋💋💋"])} />
        </div>
      </div>
    </>
  );

}

export default App;
