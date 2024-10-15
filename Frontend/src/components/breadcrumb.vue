<template>
  <nav class="d-flex gap-3 align-items-center text-secondary">
    <div class="d-flex gap-1">
      <i class="bi bi-house-door-fill"></i>
      <span class="fw-bold">خانه</span>
    </div>
    <i class="bi bi-chevron-left"></i>
    <div><span class="fw-bold">محصولات</span></div>
    <i class="bi bi-chevron-left"></i>
    <div><span class="fw-bold">مادربردها</span></div>
  </nav>
</template>

<script>
export default {
  name: "bradcrumb",
};
</script>

<style scoped>
div {
  transition: all 400ms;
}
div:not(:last-child):hover {
  color: black;
  cursor: pointer;
}
</style>
