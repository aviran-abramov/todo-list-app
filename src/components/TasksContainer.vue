<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

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
</style>
