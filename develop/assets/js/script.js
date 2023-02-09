var tasks = ".description"

// displays today's date
function displayDate (){
  var today= day.js().format('MMM DD, YYYY');
  dateDisplayEl.text(today);
}

// reads tasks from local storage and returns array of tasks
function readTasksFromStorage () {
  var tasks = localStorage.getItem('tasks');
  if (tasks) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [ ];
  }
  return tasks;
}

// saves an array of tasks to local storage
function saveTasksToStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// gets array of tasks from local storage and displays it
function printTasksData() {
  tasksDisplayEl.empty():
}

var taskData = readTasksFromStorage();

// loop through each time block

function hourTracker() {

  var currentHour = moment().hour(); 

  $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })
}
hourTracker();