<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container d-flex justify-content-between">
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>

      <a class="navbar-brand fw-bold fs-3 d-lg-none" href="#">پرشین سیستم</a>
      <div class="d-flex align-items-center gap-3 me-3 d-lg-none">
        <i class="bi bi-cart fw-bold fs-3 pointer"></i>
      </div>

      <div class="offcanvas offcanvas-end pt-lg-0" id="navbarTogglerDemo01">
        <div class="d-flex justify-content-center">
          <i
            class="bi bi-x text-danger fs-1 fw-bold position-absolute top-0 start-0 d-lg-none ms-2 mt-1"
          ></i>
          <button
            class="d-flex btn btn-register px-3 py-2 gap-1 align-items-center d-lg-none mt-4 mt-lg-0"
          >
            <!-- User SVG -->
            <svg
              width="22"
              height="22"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4352 14.8749C10.7369 14.8749 7.72691 11.8649 7.72691 8.16659C7.72691 4.46825 10.7369 1.45825 14.4352 1.45825C18.1336 1.45825 21.1436 4.46825 21.1436 8.16659C21.1436 11.8649 18.1336 14.8749 14.4352 14.8749ZM14.4352 3.20825C13.1212 3.21133 11.8618 3.73472 10.9326 4.66392C10.0034 5.59312 9.47999 6.8525 9.47691 8.16659C9.47999 9.48067 10.0034 10.7401 10.9326 11.6693C11.8618 12.5985 13.1212 13.1218 14.4352 13.1249C15.7493 13.1218 17.0087 12.5985 17.9379 11.6693C18.8671 10.7401 19.3905 9.48067 19.3936 8.16659C19.3905 6.8525 18.8671 5.59312 17.9379 4.66392C17.0087 3.73472 15.7493 3.21133 14.4352 3.20825ZM24.4569 26.5416C23.9786 26.5416 23.5819 26.1449 23.5819 25.6666C23.5819 21.6416 19.4752 18.3749 14.4352 18.3749C9.39524 18.3749 5.28857 21.6416 5.28857 25.6666C5.28857 26.1449 4.89191 26.5416 4.41357 26.5416C3.93524 26.5416 3.53857 26.1449 3.53857 25.6666C3.53857 20.6849 8.42691 16.6249 14.4352 16.6249C20.4436 16.6249 25.3319 20.6849 25.3319 25.6666C25.3319 26.1449 24.9352 26.5416 24.4569 26.5416Z"
                fill="white"
              />
            </svg>

            <span class="text-white">ورود / ثبت نام</span>
          </button>
        </div>
        <div
          class="d-flex mx-lg-auto w-100 align-items-center justify-content-between mt-4 mt-lg-0"
        >
          <a class="navbar-brand fw-bold fs-2 d-none d-lg-block" href="#"
            >پرشین سیستم</a
          >

          <!-- Normal Menu -->
          <ul
            class="navbar-nav mb-0 w-50 d-lg-flex justify-content-evenly d-none"
          >
            <li
              class="nav-item d-flex justify-content-center active-cyan position-relative"
            >
              <a
                class="nav-link pb-2 px-1 fw-bolder d-flex gap-2 product-text"
                aria-current="page"
                href="#"
                ><span>محصولات</span> <i class="bi bi-chevron-down"></i
              ></a>

              <div class="header-category-parent p-3 d-none rounded-4">
                <div class="row h-100  overflow-hidden">
                  <div class="col-3 header-category">
                    <ul class="py-3">
                      <li class="d-flex align-items-center gap-3 lh-lg">
                        <img
                          src="../assets/img/motherboard.svg"
                          alt=""
                          class="img-fluid category-svg"
                        />
                        <span class="fs-5 fw-bold text-dark"
                          >قطعات کامپیوتر</span
                        >
                      </li>
                      <li class="d-flex align-items-center gap-3 lh-lg">
                        <img
                          src="../assets/img/mouse.svg"
                          alt=""
                          class="img-fluid category-svg"
                        />
                        <span class="fs-5 fw-bold text-secondary"
                          >لوازم جانبی</span
                        >
                      </li>
                      <li class="d-flex align-items-center gap-3 lh-lg">
                        <img
                          src="../assets/img/laptop.svg"
                          alt=""
                          class="img-fluid category-svg"
                        /><span class="fs-5 fw-bold text-secondary">لپتاپ</span>
                      </li>
                      <li class="d-flex align-items-center gap-3 lh-lg">
                        <img
                          src="../assets/img/monitor.svg"
                          alt=""
                          class="img-fluid category-svg"
                        /><span class="fs-5 fw-bold text-secondary"
                          >مانیتور</span
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="col-9 header-subcateory">
                    <ul class="py-3 py-3">
                      <li class="">مادربرد</li>
                      <li class="">پردازنده</li>
                      <li class="">کارت گرافبک</li>
                      <li class="">پاور</li>
                      <li class="">هارد</li>
                      <li class="">درایو نوری</li>
                      <li class="">فن و حنک کننده</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-flex justify-content-center">
              <a class="nav-link pb-2 fw-bolder" href="#">درخواست محصول</a>
            </li>
            <li class="nav-item d-flex justify-content-center">
              <a class="nav-link pb-2 fw-bolder" href="#">خرید محصول</a>
            </li>
            <li class="nav-item d-flex justify-content-center">
              <a class="nav-link pb-2 fw-bolder" href="#">ارتباط با ما</a>
            </li>
          </ul>

          <!-- Responsive Menu -->
          <ul
            class="navbar-nav mb-2 mb-lg-0 d-lg-none justify-content-lg-evenly justify-content-center d-flex w-100 px-2"
          >
            <li
              class="nav-item d-flex justify-content-center w-100 active-cyan"
            >
              <a
                class="nav-link pb-2 px-1 fw-bolder d-flex gap-1"
                aria-current="page"
                href="#"
                ><span>محصولات</span> <i class="bi bi-chevron-left"></i
              ></a>
            </li>
            <li class="nav-item d-flex justify-content-center w-100">
              <a class="nav-link pb-2 fw-bolder" href="#">درخواست محصول</a>
            </li>
            <li class="nav-item d-flex justify-content-center w-100">
              <a class="nav-link pb-2 fw-bolder" href="#">خرید محصول</a>
            </li>
            <li class="nav-item d-flex justify-content-center w-100">
              <a class="nav-link pb-2 fw-bolder" href="#">ارتباط با ما</a>
            </li>
          </ul>
          <div class="align-items-center gap-3 d-none d-lg-flex">
            <i class="bi bi-cart fs-3 fw-bold pointer"></i>
            <button
              class="d-flex btn btn-register px-3 py-2 gap-1 align-items-center"
            >
              <!-- User SVG -->
              <svg
                width="22"
                height="22"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4352 14.8749C10.7369 14.8749 7.72691 11.8649 7.72691 8.16659C7.72691 4.46825 10.7369 1.45825 14.4352 1.45825C18.1336 1.45825 21.1436 4.46825 21.1436 8.16659C21.1436 11.8649 18.1336 14.8749 14.4352 14.8749ZM14.4352 3.20825C13.1212 3.21133 11.8618 3.73472 10.9326 4.66392C10.0034 5.59312 9.47999 6.8525 9.47691 8.16659C9.47999 9.48067 10.0034 10.7401 10.9326 11.6693C11.8618 12.5985 13.1212 13.1218 14.4352 13.1249C15.7493 13.1218 17.0087 12.5985 17.9379 11.6693C18.8671 10.7401 19.3905 9.48067 19.3936 8.16659C19.3905 6.8525 18.8671 5.59312 17.9379 4.66392C17.0087 3.73472 15.7493 3.21133 14.4352 3.20825ZM24.4569 26.5416C23.9786 26.5416 23.5819 26.1449 23.5819 25.6666C23.5819 21.6416 19.4752 18.3749 14.4352 18.3749C9.39524 18.3749 5.28857 21.6416 5.28857 25.6666C5.28857 26.1449 4.89191 26.5416 4.41357 26.5416C3.93524 26.5416 3.53857 26.1449 3.53857 25.6666C3.53857 20.6849 8.42691 16.6249 14.4352 16.6249C20.4436 16.6249 25.3319 20.6849 25.3319 25.6666C25.3319 26.1449 24.9352 26.5416 24.4569 26.5416Z"
                  fill="white"
                />
              </svg>

              <span class="text-white text-nowrap">ورود / ثبت نام</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
w-90 {
  width: 90px !important;
}
nav::before {
  content: "";
  width: 904px;
  height: 876px;
  background-image: radial-gradient(#1fbdd2 38%, #b3ecf1 0);
  position: absolute;
  filter: blur(84px);
  opacity: 0.35;
  right: -300px;
  top: -250px;
  z-index: -1;
}

.active-cyan,
.active-cyan:hover {
  color: black;
  border-bottom: 2px var(--dark-cyan) solid;
}

.btn-register,
.btn-register:hover {
  background-color: var(--dark-cyan);
}

.bi-chevron-down {
  position: relative;
  top: 4px;
  font-size: 12px;
}

.bi-chevron-left {
  position: relative;
  top: 3px;
  font-size: 12px;
}

.navbar-toggler:focus,
.navbar-toggler:hover,
.navbar-toggler:active {
  outline: none !important;
  box-shadow: none !important;
}

/* category */
.header-category-parent {
  width: 1200px;
  height: 400px;
  position: absolute;
  z-index: 5;
  right: -300px;
  top: 42px;
  background-color: rgba(255, 255, 255, 0.85);
}

.category-svg {
  width: 20px;
  height: 20px;
}

.header-category ul {
  height: 100%;
  border-left: 3px solid var(--hard-cyan);
}
.header-subcateory ul {
  column-count: 1;
}
.header-subcateory ul li {
  line-height: 38px;
  cursor: pointer;
}

.li-column-2 {
  column-count: 1;
}

/* Category hover  */
.product-text:hover + .header-category-parent,
.header-category-parent:hover {
  display: block !important;
}
</style>
