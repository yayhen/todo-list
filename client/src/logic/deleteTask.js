export const deleteTask = (id) => {
  let localTasks = JSON.parse(localStorage.getItem('localTasks'));
  localTasks.tasks.forEach((element, index) => {
    if(element.id === id) {
      localTasks.tasks.splice(index, 1);
    }
  });
  localStorage.setItem('localTasks', JSON.stringify(localTasks));
}