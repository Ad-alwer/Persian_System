<template>
  <div>
    <!-- Header -->
    <header>
      <hmheader />
    </header>

    <!-- Body -->
    <main class="container mt-3">

      <!-- Slider -->
      <section class="row slider-container">
        <div class="col-9 rounded-4 img-fluid slider position-relative">
          <div>
            <img
              src="../assets/img/test/banner 1.webp"
              class="img-fluid rounded-4 h-100"
              alt=""
            />
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
            <div
              class="slider-pagenation position-absolute d-flex justify-content-center w-100 mb-2 bottom-0 gap-2"
            >
              <div class="rounded-circle pointer active-slider"></div>
              <div class="rounded-circle pointer"></div>
            </div>
          </div>
        </div>

        <div
          class="col-3 d-flex flex-column justify-content-between no-transition-banner"
        >
          <img
            src="../assets/img/test/banner 2.webp"
            class="img-fluid rounded-4"
            alt=""
          />
          <img
            src="../assets/img/test/banner 3.webp"
            class="img-fluid rounded-4"
            alt=""
          />
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import hmheader from "./Header.vue";

export default {
  name: "Home",
  components: {
    hmheader,
  },
};
</script>

<style scoped>

/* Slider */
.no-transition-banner img {
  height: 220px;
}

.slider-container .bi-chevron-left {
  position: absolute;
  left: 2%;
  top: 46%;
  cursor: pointer;
  font-size: 16px;
}

.slider-container .bi-chevron-right {
  position: absolute;
  right: 2%;
  top: 46%;
  cursor: pointer;
  font-size: 16px;
}

.slider-pagenation div {
  width: 8px;
  height: 8px;
  background: var(--light-cyan);
}
.active-slider{
  background: var(--dark-cyan) !important;
}
</style>
