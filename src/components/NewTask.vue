<template>
  <div class="add-task-container container">
    <h3>New Task</h3>
    <form @submit.prevent="submitTask">
      <input v-model="enteredNewTask" type="text" />
      <button>+</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["submit-task"],
  data() {
    return {
      enteredNewTask: "",
    };
  },
  methods: {
    submitTask() {
      this.$emit("submit-task", this.enteredNewTask);
      this.enteredNewTask = "";
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
}
.add-task-container {
  max-width: 400px;
}
.container {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 13px;
  border-radius: 6px;
}

h3 {
  font-weight: bold;
  font-size: 1.2rem;
}

form {
  display: flex;
}

form input {
  width: 250px;
  height: 30px;
  padding: 6px;
}

form button {
  background-color: #007bff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

form button:hover {
  transform: scale(1.15);
}
</style>
