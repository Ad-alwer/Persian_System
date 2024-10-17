<template>
  <div>
    <!-- Header -->
    <header>
      <hmheader />
    </header>

    <!-- Body -->
    <main class="container mt-3">
      <!-- Breadcrumb -->
      <section class="breadcrumb-parent py-2 px-4 rounded-pill">
        <breadcrumb />
      </section>

      <!-- Body -->
      <section class="row mt-3">
        <!-- Sort Box -->
        <div
          class="sort-parent p-2 rounded-3 ms-3 col-3 mt-2 d-flex flex-column gap-2"
        >
          <div class="bg-white py-2 px-3 rounded-4 w-100">
            <div class="d-flex justify-content-between rounded-pill">
              <span>برندها</span>
              <i class="bi bi-chevron-up pointer"></i>
            </div>

            <div>
              <!-- Sort box body -->
              <div class="sort-box-body mt-3">
                <!-- Search box -->
                <div
                  class="sort-box-search text-secondary d-flex flex-row-reverse align-items-center border border-1 px-2 rounded-3 border-black"
                >
                  <input type="text" class="form-control" maxlength="20" />
                  <i class="bi bi-search fs-6 pointer"></i>
                </div>

                <!-- Option box -->

                <div class="option-box px-3 mt-2 d-flex flex-column gap-1">
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">Asus</span>
                  </label>
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">msi</span>
                  </label>
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">zotac</span>
                  </label>
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">gigabyte</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white py-2 px-3 rounded-4 w-100">
            <div class="d-flex justify-content-between rounded-pill">
              <span>سازنده</span>
              <i class="bi bi-chevron-up pointer"></i>
            </div>

            <div>
              <!-- Sort box body -->
              <div class="sort-box-body mt-3">
                <!-- Option box -->

                <div class="option-box px-3 mt-2 d-flex flex-column gap-1">
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">nvidia</span>
                  </label>
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">amd</span>
                  </label>
                  <label for="" class="d-flex justify-content-start gap-3">
                    <input type="checkbox" />
                    <span class="text-capitalize">intel</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white py-2 px-3 rounded-4 w-100">
            <div class="d-flex justify-content-between rounded-pill">
              <span>سازنده</span>
              <i class="bi bi-chevron-down pointer"></i>
            </div>
          </div>
        </div>

        <!-- Products-box -->
        <div class="col-8">
          <!-- View -->
          <div
            class="view-parent w-100 rounded-pill d-flex justify-content-evenly align-items-center"
          >
            <span class="fs-5 fw-bold">مرتب سازی بر اساس</span>
            <span class="fs-5 fw-bold active-view text-secondary"
              >جدیدترین</span
            >
            <span class="fs-5 fw-bold text-secondary">گران ترین</span>
            <span class="fs-5 fw-bold text-secondary">ارزان ترین</span>
            <span class="fs-5 fw-bold text-secondary">پرفروش ترین</span>
          </div>

          <!-- Products -->
          <div class="row mt-3 px-1 py-2 rounded-4">
            <div class="col-3">
              <div class="product-box bg-light rounded-3 p-2">
                <img
                  src="../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
                  class="img-fluid product-img"
                  alt=""
                />
                <p class="product-text fw-bold">
                  کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
                </p>
                <div
                  class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
                >
                  <span class="fw-bold">15,000,000</span>
                  <div>
                    <div
                      class="rounded-pill product-badge-parent d-flex justify-content-center"
                    >
                      <span class="fw-bold">استوک</span>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-center mt-3 btn product-btn-parent gap-2 align-items-center"
                >
                  <button class="fw-bold">افزودن به سبد خرید</button>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="product-box bg-light rounded-3 p-2">
                <img
                  src="../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
                  class="img-fluid product-img"
                  alt=""
                />
                <p class="product-text product-text-unavailable fw-bold">
                  کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
                </p>
                <div
                  class="product-status d-flex justify-content-between flex-row-reverse px-2 align-items-center"
                ></div>

                <div
                  class="d-flex justify-content-center mt-3 rounded-2 product-unavailable gap-2 align-items-center"
                >
                  <button class="fw-bold">ناموجود</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pagenation -->
      <section
        class="pagenation-parent mt-4 d-flex justify-content-center rounded-pill"
      >
        <pagenation />
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-5 container">
      <hmfooter />
    </footer>
  </div>
</template>

<script>
import hmheader from "./Header.vue";
import hmfooter from "./Footer.vue";
import breadcrumb from "./breadcrumb.vue";
import pagenation from "./pagenation.vue";
export default {
  name: "products",
  components: {
    hmheader,
    hmfooter,
    breadcrumb,
    pagenation,
  },
};
</script>

<style scoped>
/* Breadcrumb */
.breadcrumb-parent {
  background-color: rgba(128, 128, 128, 0.27);
  width: 93%;
}
/* Product box */
.col-8 > div {
  background-color: rgba(128, 128, 128, 0.27);
}

/* View */
.view-parent {
  height: 50px;
}
.active-view {
  color: var(--main-cyan) !important;
}
.view-parent span {
  transition: all 200ms ease-in;
  cursor: pointer;
}
.view-parent span:hover {
  color: black !important;
}

/* Product */
.product-box {
  height: 385px;
  margin-top: 5px;
}
.product-img {
  width: 220px;
  height: 220px;
}

.product-text {
  height: 50px;
  max-width: 290px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-text-unavailable {
  color: gray !important;
}

.product-status {
  height: 25px;
}

.product-badge-parent {
  background-color: var(--main-cyan);
  width: 70px;
}
.product-btn-parent {
  color: white;
  background-color: var(--main-cyan);
  height: 38px;
}

.product-unavailable {
  background-color: var(--light-cyan);
  height: 38px;

  cursor: auto;
}
.product-unavailable button {
  color: #707070;
  cursor: auto;
}

/* Sort */
.sort-parent {
  background-color: rgba(128, 128, 128, 0.25);
}
.checkbox-sort {
  display: none;
}
.form-control {
  box-shadow: none;
  border: none;
}
.option-box {
  height: 90px;
  overflow-y: auto;
}

/* pagenation parent */
.pagenation-parent {
  background: rgba(128, 128, 128, 0.25);
  width: 93%;
}
</style>
