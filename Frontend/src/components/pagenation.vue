<template>
  <div class="d-flex justify-content-center align-items-center p-2 gap-2 flex-row-reverse">
    <div class="box rounded-3">
      <button class="btn text-light">قبلی</button>
    </div>

    <div class="box rounded-3"><button class="btn text-light">1</button></div>

    <div class="box rounded-3">
      <button class="btn text-light">2</button>
    </div>

    <div class="box rounded-3">
      <button class="btn text-light">3</button>
    </div>

    <div class="box rounded-3">
      <button class="btn text-light">4</button>
    </div>

    <div class="box rounded-3">
      <button class="btn text-light">5</button>
    </div>

    <div class="box rounded-3">
      <button class="btn text-light">بعدی</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagenation",
};
</script>

<style scoped>
.box {
  background: var(--dark-cyan);
}
</style>
