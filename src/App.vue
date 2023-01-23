<template>
  <TodoHeader />
  <main>
    <NewTask @submit-task="addTask" />
    <TasksView
      :tasks="tasks"
      @submit-completed-task="completeTask"
      @submit-task-removal="removeTask"
    />
    <CompletedView :completed-tasks="completedTasks" />
  </main>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import NewTask from "./components/NewTask.vue";
import TasksView from "./components/TasksView.vue";
import CompletedView from "./components/CompletedView.vue";

export default {
  components: {
    TodoHeader,
    NewTask,
    TasksView,
    CompletedView,
  },
  data() {
    return {
      tasks: [],
      tasksAmount: 0,
      completedTasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.unshift({
        id: this.tasksAmount,
        text: task,
      });
      this.tasksAmount++;
    },
    completeTask(taskId) {
      const selectedTask = this.tasks.find((task) => task.id === taskId);
      this.completedTasks.push({
        id: selectedTask.id,
        text: selectedTask.text,
      });
      this.tasks = this.tasks.filter((task) => taskId !== task.id);
    },
    removeTask(taskId) {
      const selectedTask = this.tasks.find((task) => task.id === taskId);
      this.tasks = this.tasks.filter((task) => task !== selectedTask);
    },
  },
};
</script>

<style scoped></style>
