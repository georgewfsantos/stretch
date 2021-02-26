import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from "../../challenges.json";
import Cookies from "js-cookie";
import LevelUpModal from "../components/LevelUpModal.tsx";
interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  activeChallenge: Challenge;
  completedChallenges: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  generateNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeModal: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export const ChallengeProvider = ({
  children,
  ...rest
}: ChallengeProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [completedChallenges, setCompletedChallenges] = useState(
    rest.completedChallenges ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("completedChallenges", String(completedChallenges));
  }, [level, currentExperience, completedChallenges]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsModalOpen(true);
  };

  const generateNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio", {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(completedChallenges + 1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        completedChallenges,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        generateNewChallenge,
        resetChallenge,
        completeChallenge,
        closeModal,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
};
