import clickSfx from "../data/ClickSound2.mp3";

export function useClickSound() {
  const sound = new Audio(clickSfx);
  const playClickSound = () => {
    sound.play();
  };
  return playClickSound;
}
