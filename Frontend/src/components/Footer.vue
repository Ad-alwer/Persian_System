<template>
  <div class="parent rounded-3 p-4 mb-3">
    <div class="row">
      <div class="col-8">
        <div class="px-3">
          <p class="h1 fw-bold text-center">پرشین سیستم</p>
          <p class="mt-3 text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            و با استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex flex-column align-items-center gap-3 social-parent">
          <p class="h3 fw-bold text-center">به ما بپیوندید</p>
          <div class="d-flex justify-content-center gap-3">
            <div class="p-2 img-icon-parent rounded-3 pointer">
              <img src="../assets/img/instagram.svg" alt="" class="img-icon" />
            </div>
            <div class="p-2 img-icon-parent rounded-3 pointer">
              <img src="../assets/img/telegram.svg" alt="" class="img-icon" />
            </div>
            <div class="p-2 img-icon-parent rounded-3 pointer">
              <img src="../assets/img/phone.svg" alt="" class="img-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center gap-3 mt-4">
      <div class="p-2 img-icon-parent rounded-3 pointer">
        <img src="../assets/img/location.svg" alt="" class="img-icon" />
      </div>
      <span class="fw-bold fs-5 img-icon-parent p-2 rounded-3 "
        >کرج ، چهارراه هفت تیر ، مجتمع کامپیوتری کیش ،طبقه همکف واحد 129</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.parent {
  background-color: var(--light-cyan);
}

/* icons */

.img-icon-parent {
  background-color: rgb(128, 128, 128, 0.4);
}
.img-icon {
  width: 30px;
  height: 30px;
}
</style>
