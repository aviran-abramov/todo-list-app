<template>
  <TodoHeader />
  <main>
    <NewTask @submit-task="addTask" />
  </main>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import NewTask from "./components/NewTask.vue";

export default {
  components: {
    TodoHeader,
    NewTask,
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
  },
};
</script>

<style scoped></style>
