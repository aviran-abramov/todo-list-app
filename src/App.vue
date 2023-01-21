<template>
  <TodoHeader />
  <main>
    <NewTask />
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
};
</script>

<style scoped></style>
