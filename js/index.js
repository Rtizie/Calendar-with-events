const date = new Date();

const info = document.querySelector(".action-info");

const actions = [
  new Date(2022, 4, 16),
  new Date(2022, 4, 12),
  new Date(2022, 4, 10),
  new Date(2022, 4, 6),
  new Date(2022, 2, 8),
  new Date(2022, 2, 7),
  new Date(2022, 2, 9),

];

const actionsText = [
	'Brazil Ride Espinhaço XCM UCI S1',
	'Kamenjak XCM UCI S2',
	'Brazil Ride Espinhaço XCM UCI S1',
	'Brazil Ride Espinhaço XCM UCI S1',
	'Chřibská 50 MTB marathon',
	'Premantura Rocky Trails XCO UCI C1',
	'Brazil Ride Espinhaço XCM UCI S1',
]

const renderCalendar = () => {
  info.innerHTML = "";
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

  document.querySelector(".date p").innerHTML = "Dnes je: " + new Date().toLocaleDateString("cs-CZ");

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
	var passed = false;
    actions.forEach((action) => {
      if (i === action.getDate() && date.getMonth() === action.getMonth() && date.getFullYear() === action.getFullYear()) {
        days += `<div class="action" onclick="openAction(${actions.indexOf(action)})">${i}</div>`;
		passed = true;
      }
    });
	if(passed){
		continue;
	}
	days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

function openAction(action){
	info.innerHTML = actionsText[action] + "<br>" + actions[action].toLocaleDateString("cs-CZ");
}