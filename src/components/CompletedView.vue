<template>
  <tasks-container>
    <h2>Completed Tasks</h2>
    <p v-if="completedTasks.length === 0" class="gray-p">Nothing to show yet</p>
    <ul v-else>
      <li v-for="task in completedTasks" :key="task.id">
        <p>{{ task.text }}</p>
      </li>
    </ul>
  </tasks-container>
</template>

<script>
export default {
  props: {
    completedTasks: {
      type: Array,
      required: true,
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

.gray-p {
  color: rgb(194, 194, 194);
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
  text-decoration: line-through;
}
</style>
