<template>
  <TodoHeader />
  <main>
    <NewTask @submit-task="addTask" />
    <TasksView :tasks="tasks" @submit-task-removal="removeTask" />
  </main>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import NewTask from "./components/NewTask.vue";
import TasksView from "./components/TasksView.vue";

export default {
  components: {
    TodoHeader,
    NewTask,
    TasksView,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.unshift({
        id: this.tasks.length,
        text: task,
      });
    },
    removeTask(taskId) {
      const selectedTask = this.tasks.find((task) => task.id === taskId);
      this.tasks = this.tasks.filter((task) => task !== selectedTask);
    },
  },
};
</script>

<style scoped></style>
