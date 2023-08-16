function scrollToID(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const weekday = ["일", "월", "화", "수", "목", "금", "토"];
const getDateStr = (date) => `${date.getMonth() + 1}월 ${date.getDate()}일(${weekday[date.getDay()]})`;
const getStatusMsg = (name, date) => `${name}는 ${getDateStr(date)} ${date.getHours()}에 진행됩니다.`;
const getNoticeMsg = (start, end) => `${getDateStr(start)} ~ ${getDateStr(end)} ${end.getHours()}시 까지 아래 링크를 통해 참가 신청합니다.`;
const checkBetween = (start, end, now) => start.getTime() <= now && now < end.getTime();

function secToStr(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * 24 * 60 * 60;

  const hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * 60 * 60;

  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  const secondsLeft = seconds;

  return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
}
