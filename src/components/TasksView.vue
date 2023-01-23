<template>
  <div v-if="tasks.length > 0" class="container">
    <h2>To-do List</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <p>{{ task.text }}</p>
        <div class="buttons">
          <button @click="submitCompletedTask(task.id)" class="finish">
            V
          </button>
          <button @click="submitTaskRemoval(task.id)" class="remove">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["submit-task-removal", "submit-completed-task"],
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    submitCompletedTask(taskId) {
      this.$emit("submit-completed-task", taskId);
    },
    submitTaskRemoval(taskId) {
      this.$emit("submit-task-removal", taskId);
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 20px;
  padding: 13px;
  border-radius: 6px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  background-color: rgb(240, 240, 240);
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 3px;
}

li p {
  font-weight: bold;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  border: 2px solid black;
  height: 26px;
  width: 26px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  transform: scale(1.12);
}

.buttons .finish {
  background-color: #01e901;
}

.buttons .remove {
  background-color: #f72f35;
}
</style>
