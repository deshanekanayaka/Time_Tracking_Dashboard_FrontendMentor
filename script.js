let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll(".activity-tracker-option");

const activateClickButton = (button) => {
  //remove active class from button
  buttons.forEach((b) => b.classList.remove("active"));
  //add active class from button
  button.classList.add("active");
};
const clearCards = () => {
  const activities = document.querySelectorAll(".activity-tracker__activity");
  activities.forEach((a) => a.remove());
};
const renderCards = (clickedOption) => {
  //Clear existing Cards
  clearCards();
  //Main Grid
  const activityTracker = document.querySelector("section.activity-tracker");

  //Function to figure out times - yesterday, lastweek etc
  const calcTimeFrame = (option) => {
    if (option === "daily") {
      return "Yesterday";
    } else if (option === "weekly") {
      return "Last Week";
    } else if (option === "monthly") {
      return "Last Month";
    }
  };
  //loop through data
  data.forEach((activity) => {
    const name = activity.title;
    //Add dash for some titles like Self Care
    const activityClass = name.toLowerCase().replace(" ", "-");
    const timeFrameData = activity.timeframes[clickedOption];
    const previousTimeFrame = calcTimeFrame(clickedOption);

    const section = document.createElement("section");
    section.classList.add("activity-tracker__activity", activityClass);
    const stringToInject = `
     <div class="activity__bg">
          <img src="images/icon-${activityClass}.svg" alt="work.svg" />
        </div>
        <div class="activity__info">
          <div class="activity__header">
            <h2>${name}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis.svg" />
          </div>
          <div class="activity__timeframes">
            <h3>${timeFrameData.current}hrs</h3>
            <p class="activity__previous-timeframes">${previousTimeFrame} - ${timeFrameData.previous}hrs</p>
          </div>
        </div>
    `;
    section.innerHTML = stringToInject;

    activityTracker.append(section);
    //Here cards add each time we click the times
    //So,creating a function to clear the exsisting cards
  });
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    activateClickButton(button);
    const clickedOption = button.dataset.option;
    renderCards(clickedOption);
  });
});

buttons[1].click();
