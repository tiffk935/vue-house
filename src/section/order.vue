  <template>
  <div class="order relative bg-[#FFDFE3] text-center">
    <div class="order1 relative">
      <img class="bg1" src="@/section/form/bg1.png" alt="">
      <div class="order2 relative">
        <div data-aos="fade-up" data-aos-delay="0">
          <div class="t1">樹海大道 綠蔭之河</div>
          <div class="t2">高鐵珍稀 靜謐之境｜2-3房｜24-45坪</div>
        </div>
        <!-- Title -->
        <div class="order-title text-center text-white">{{ info.order.title }}</div>
        <div class="t3">若想了解更多資訊，歡迎填寫表單或來電洽詢，<br class="md:hidden">將由專人為您服務，謝謝！</div>
        <!-- Title Image -->
        <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="艾美綠河" srcset=""
          data-aos="fade" data-aos-duration="1000">
        <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="艾美綠河" srcset="" data-aos="fade"
          data-aos-duration="1000"> -->
        
        <!-- Form -->
        <!-- <div class="form mx-auto relative flex items-start justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" />
            <select class="select w-full rounded-none" v-model="formData.room_type">
              <option value="" selected disabled>需求房型</option>
              <option value="兩房">兩房</option>
              <option value="三房">三房</option>
              <option value="透天">透天</option>
            </select>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>居住縣市</option>
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>居住地區</option>
              <option v-for="area in areaList" :value="area.value">
                {{ area.label }}
              </option>
            </select>
          </div>
          <div class="right h-full">
            <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
              class="textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
          </div>
        </div> -->

        <div class="form mx-auto relative flex justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row"><span>姓名<span>*</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row"><span>手機<span>*</span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>
            <select class="select w-full rounded-none" v-model="formData.room_type">
              <option value="" selected disabled>需求房型</option>
              <option value="兩房">兩房</option>
              <option value="三房">三房</option>
            </select>
            <label class="row"><span>居住縣市</span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select></label>
            <label class="row"><span>居住地區</span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value">
                {{ area.label }}
              </option>
            </select></label>
          </div>
          <div class="right">
            <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
              class="row textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
          </div>
        </div>

        <!-- Policy -->
        <div class="flex gap-2 items-center justify-center control">
          <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
            class="checkbox bg-white rounded-md" />
          <p class="text-white">
            本人知悉並同意<label for="policy-modal"
              class="modal-button text-[#FFF000] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer btregistration bg-[#AABB00] text-white hover:text-white rounded-full" @click="send()">
          {{ sending ? '發送中..' : '送出表單' }}
        </div>
      </div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>

    <!-- Map -->
    <Map />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  width: 100%;
  // padding-top: size(115);

  @keyframes leaf {
    to {
      transform: skewX(0);
    }
  }

  .order1 {
    background-color: #00803F;
    background-image: url(@/section/form/bg.jpg);
    background-size: 31.25vw;
    background-position: center center;
    padding-bottom: size(21);
  }

  .order2 {
    padding: size(160) 0 size(73) 0;
  }

  .bg1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 78.125vw;
    // height: 65%;
    filter: blur(2px);
    animation: leaf 3s ease-in-out infinite alternate;
    transform: skewX(5deg);
    transform-origin: 100% 0;
  }

  .t1 {
    text-align: center;
    color: #FFF;
    font-family: 'Noto Serif TC';
    font-size: size(92);
    font-weight: 700;
    line-height: 103%;
    margin-bottom: size(33);
  }

  .t2 {
    text-align: center;
    color: #FFF;
    font-size: size(45);
    font-weight: 700;
    line-height: 103%;
    letter-spacing: size(0.45);
    margin-bottom: size(106);
  }

  .order-title {
    color: #FFF;
    text-align: center;
    font-family: 'Noto Serif TC';
    font-size: size(40);
    font-weight: 700;
    line-height: normal;
    margin-bottom: size(6);
  }

  .t3 {
    color: #FFF;
    text-align: center;
    font-family: 'Noto Serif TC';
    font-size: size(18);
    font-weight: 700;
    line-height: size(36);
    margin-bottom: size(31);
  }

  .z-10 {
    z-index: 10;
    position: relative;
  }

  .order-title-img {
    display: block;
    width: size(859);
    margin: 0 auto;
    margin-bottom: size(40);
  }

  .form {
    width: size(920);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;

    .left {
      flex: 1;
      gap: size(20);
      //   width: size(419);
    }

    .right {
      flex: 1;
      height: auto;
      //  width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff;
      position: absolute;
    }
    .row{background: #FFF;border: 1px solid #CCC;color: #000;
      display: flex;width: 100%;
    align-items:center;
      > span{
        width: 5.5em;
        text-align: left;padding-left:1em ;
        > span{color: #F00;}
      }
      input,select{background: inherit;flex: 1;}
      option{color: #666;}
      select{
        // background: url("@/assets/select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
    }
  }

  .send {
    font-size: size(22);
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    z-index: 10;
    position: relative;
    border-radius: size(10);
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    // padding-top: size-m(40);
    margin-top: size-m(0);

    .order1 {
      padding-bottom: 0;
      background-size: 106.6666666667vw auto;
    }

    .order2 {
      padding: size-m(40) 0 size-m(60) 0;
    }

    .bg1 {
      width: 100%;
      height: 40%;
      right: -6%;
      filter: blur(1px);
    }

    .t1 {
      line-height: 103%;
      font-size: size-m(35);
      margin-bottom: size-m(16);
      margin-top: size-m(100);
    }

    .t2 {
      line-height: 103%;
      font-size: size-m(17);
      letter-spacing: size-m(0.17);
      margin-bottom: size-m(100);
    }

    .t3 {
      line-height: 150%;
      font-size: size-m(12);
      margin-bottom: size-m(20);
    }

    .order-title {
      font-size: size-m(29);
      font-weight: 700;
      margin-bottom: size-m(20);
    }

    .order-title-img {
      width: size-m(208);
      margin-bottom: size-m(20);
    }

    .form {
      width: size-m(310);
      min-width: 0;
      height: auto;
      gap: size-m(15);
      margin-bottom: size-m(20);
      flex-direction: column;
      margin-top: size-m(20);

      .left {
        width: 100%;
        gap: size-m(15);
      }

      .right {
        width: 100%;
        height: size-m(100);
        .row{
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: size-m(21);
      width: size-m(318);
      border-radius: size-m(10);
    }

    .control {
      font-size: size-m(14.6);
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"

import { cityList, renderAreaList } from "@/info/address.js"
import { ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  // email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

const sending = ref(false)

//非必填
// const bypass = ["msg", "room_type", "email"]
const bypass = ["msg", "room_type", "city", "area"];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  // "信箱", //email
  "居住縣市", //city
  "居住地區", //area
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
])

const areaList = ref([])

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value[0].value
  }
)

const onRecaptchaVerify = () => {
  formData.r_verify = true
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmContent = urlParams.get("utm_content");
  const utmCampaign = urlParams.get("utm_campaign");
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

  const presend = new FormData();
  let pass = true
  let unfill = []
  let idx = 0

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx])
      }
    }
    idx++
    presend.append(key, value);
  }

  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);

  //有未填寫
  if (unfill.length > 0) {
    pass = false
    toast.error(`「${unfill.join(", ")}」為必填或必選`)
    return
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/
  if (!formData.phone.match(MobileReg)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }

  if (pass && !sending.value) {
    sending.value = true
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &room_type=${formData.room_type}
      &project=${formData.project}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.msg}
      &utm_source=${utmSource}
      &utm_medium=${utmMedium}
      &utm_content=${utmContent}
      &utm_campaign=${utmCampaign}
      &date=${date}
      &campaign_name=${info.caseName}`,
      {
        method: "GET"
      }
    );

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      }
      sending.value = false
    });


    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
