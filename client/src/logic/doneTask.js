export const doneTask = (id) => {
  let localTasks = JSON.parse(localStorage.getItem('localTasks'));
  localTasks.tasks.forEach((element, index) => {
    if(element.id === id) {
      element.isDone = true;
      console.log(element);
    }
  });
  localStorage.setItem('localTasks', JSON.stringify(localTasks));
}