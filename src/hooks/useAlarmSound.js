import alarmSfx from "../data/AlarmSound1.mp3";

export function useAlarmSound() {
  const sound = new Audio(alarmSfx);
  const playAlarmSound = () => {
    sound.play();
  };
  return playAlarmSound;
}
