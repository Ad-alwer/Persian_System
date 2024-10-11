<template>
  <section class="mt-5 d-flex flex-column gap-5">
    <div>
      <div class="d-flex justify-content-between align-items-center text-dark">
        <div class="d-flex gap-2 align-items-center">
          <div class="slider-title-parent rounded-circle p-3">
            <img
              src="../../assets/img/gpu-card.svg"
              class="img-fluid slider-title-img"
              alt=""
            />
          </div>

          <div class="d-flex flex-column align-items-center">
            <span class="fs-4 fw-bold">کارت گرافبک</span>
            <span class="text-capitalize">Graphic card</span>
          </div>
        </div>
        <div class="gap-2 pointer d-flex align-items-center">
          <span class="fw-bolder">مشاهده همه</span>
          <i class="bi bi-arrow-left fs-5"></i>
        </div>
      </div>

      <Swiper
        class="py-4 px-2 swiper mt-4 rounded-2"
        :modules="modules"
        slides-per-view="5"
        :space-between="10"
        :scrollbar="{ draggable: true }"
        loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="autoplay"
      >
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/gigabyte-rtx-4080-super-windforce-v2-1-1500x1500 (1).jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold text-center">
            کارت گرافیک gigabyte rtx 4080 super
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">نو</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/gigabyte-rtx-4080-super-windforce-v2-1-1500x1500 (1).jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold text-center">
            کارت گرافیک gigabyte rtx 4080 super
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">نو</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/gigabyte-rtx-4080-super-windforce-v2-1-1500x1500 (1).jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold text-center">
            کارت گرافیک gigabyte rtx 4080 super
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">نو</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <div>
      <div class="d-flex justify-content-between align-items-center text-dark">
        <div class="d-flex gap-2 align-items-center">
          <div class="slider-title-parent rounded-circle p-3">
            <img
              src="../../assets/img/new.svg"
              class="img-fluid slider-title-img"
              alt=""
            />
          </div>

          <div class="d-flex flex-column align-items-center">
            <span class="fs-4 fw-bold">جدیدترین محصولات</span>
            <span class="text-capitalize">latest products</span>
          </div>
        </div>
        <div class="gap-2 pointer d-flex align-items-center">
          <span class="fw-bolder">مشاهده همه</span>
          <i class="bi bi-arrow-left fs-5"></i>
        </div>
      </div>

      <Swiper
        class="py-4 px-2 swiper mt-4 rounded-2"
        :modules="modules"
        :slides-per-view="5"
        :space-between="10"
        :scrollbar="{ draggable: true }"
        loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="autoplay"
      >
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div> </swiper-slide
        ><swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div> </swiper-slide
        ><swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div> </swiper-slide
        ><swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div> </swiper-slide
        ><swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div> </swiper-slide
        ><swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <swiper-slide
          data-swiper-autoplay="2000"
          class="swiper-child bg-light rounded-3 p-2"
        >
          <img
            src="../../assets/img/test/DUAL-RTX-3060-Ti-8GD6X-White-1-1500x1500.jpg"
            class="img-fluid slider-img"
            alt=""
          />
          <p class="swiper-text fw-bold">
            کارت گرافیک ASUS DUAL RTX 3060 Ti O8G - White
          </p>
          <div
            class="d-flex justify-content-between flex-row-reverse px-2 align-items-center"
          >
            <span class="fw-bold">15,000,000</span>
            <div>
              <div
                class="rounded-pill swiper-badge-parent d-flex justify-content-center"
              >
                <span class="fw-bold">استوک</span>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center mt-3 btn swiper-btn-parent gap-2 align-items-center"
          >
            <button class="fw-bold">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

export default {
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style scoped>
/* Title */

.slider-title-img {
  width: 50px;
}

/* Swiper */
.swiper {
  background-color: rgba(179, 236, 241, 0.8);
}
.swiper-child {
  max-width: 248px;
  max-height: 390px;
}
.slider-img {
  width: 220px;
  height: 220px;
}
.swiper-text {
  height: 50px;
  max-width: 290px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-badge-parent {
  background-color: var(--main-cyan);
  width: 70px;
}
.swiper-btn-parent {
  background-color: var(--main-cyan);
}
</style>
