  <template>
  <div id="order" class="order relative text-center">
    <!-- Title -->
    <div id="contact" class="order-title text-center text-[#C30D23]">{{ info.order.title }}</div>
    <!-- Title Image -->
    <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="華友聯next21" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="華友聯next21" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->
    <!-- Form -->
    <div class="form mx-auto relative flex items-start justify-center">
      <div class="left h-full flex flex-col justify-between items-center">
        <input type="text" placeholder="姓名" class="aa-input w-full rounded-none" :value="formData.name"
          @input="(event) => (formData.name = event.target.value)" maxlength="16" />
        <input type="text" placeholder="手機" class="aa-input w-full rounded-none" :value="formData.phone"
          @input="(event) => (formData.phone = event.target.value)" maxlength="10" />
        <input type="text" placeholder="信箱" class="aa-input w-full rounded-none" :value="formData.email"
          @input="(event) => (formData.email = event.target.value)" maxlength="255" />
        <select class="aa-select w-full rounded-none" v-model="formData.room_type">
          <option value="" selected disabled>需求房型</option>
          <option value="兩房">兩房</option>
          <option value="2+1房">2+1房</option>
          <option value="3+1房">3+1房</option>
        </select>
        <select class="aa-select w-full rounded-none" v-model="formData.city">
          <option value="" selected disabled>居住縣市</option>
          <option v-for="city in cityList" :key="city.label" :value="city.value">
            {{ city.label }}
          </option>
        </select>
        <select class="aa-select w-full rounded-none" v-model="formData.area">
          <option value="" selected disabled>居住地區</option>
          <option v-for="area in areaList" :key="area.label" :value="area.value">
            {{ area.label }}
          </option>
        </select>
        <select class="aa-select w-full rounded-none" v-model="formData.source">
          <option value="" selected disabled>消息來源</option>
          <option v-for="source in sourceList" :key="source.label" :value="source.value">
            {{ source.label }}
          </option>
        </select>
        <input v-if="formData.source == 'other'" type="text" placeholder="其他來源" class="aa-input w-full rounded-none" :value="formData.source_note"
          @input="(event) => (formData.source_note = event.target.value)" />
      </div>
      <div class="right h-full">
        <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
          class="aa-textarea w-full h-full rounded-none" placeholder="備註訊息"></textarea>
      </div>
    </div>

    <!-- Policy -->
    <div class="flex gap-2 items-center justify-center control">
      <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
        class="aa-checkbox bg-white rounded-md" />
      <p class="mb-0 text-[#595757]">
        本人知悉並同意<label for="policy-modal"
          class="aa-modal-button mb-0 text-[#D9374B] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
      </p>
    </div>
    <Policy />

    <!-- Recaptcha -->
    <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
      @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

    <!-- Send -->
    <div class="send mt-8 mx-auto hover:scale-90 aa-btn cursor-pointer btregistration bg-[#A7A7A7] text-white" @click="send()">
      {{ sending ? '發送中..' : '送出表單' }}
    </div>

    <!-- Contact Info -->
    <ContactInfo />

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
  padding-top: size(115);
  background: #E3E3E3;
  background-image: url(@/section/form/bg.jpg);
  background-size: 100% auto;
  font-family:"Noto Sans TC";

  .order-title {
    font-size: size(43);
    font-weight: 500;
    margin-bottom: size(45);
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
    height: 450px;
    gap: size(80);
    margin-bottom: size(50);
    padding: 3px;

    .left {
      width: size(419);
    }

    .right {
      width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff;
      position: absolute;
    }
  }

  .send {
    font-size: size(22);
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    // color: #231815;
    // background-color: #fff;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    border-radius: 0;
    z-index: 10;
    position: relative;
  }

  .control {
    font-size: size(22);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    padding-top: size-m(40);
    margin-top: size-m(0);

    .order-title {
      font-size: size-m(29);
      font-weight: 500;
      margin-bottom: size-m(20);
    }

    .order-title-img {
      width: size-m(208);
      margin-bottom: size-m(20);
    }

    .form {
      width: size-m(310);
      height: auto;
      gap: size-m(15);
      margin-bottom: size-m(20);
      flex-direction: column;

      .left {
        width: 100%;
        gap: size-m(15);
      }

      .right {
        width: 100%;
        height: size-m(100);
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: size-m(21);
      width: size-m(318);
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
  email: "",
  room_type: "",
  city: "",
  area: "",
  source: "",
  source_note: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

const sourceList = reactive([
  {label: '社群媒體', value: 'social_media'},
  {label: '網路媒體', value: 'internet_media'},
  {label: '平面媒體', value: 'print_media'},
  {label: '電視媒體', value: 'tv_media'},
  {label: '戶外看板', value: 'billboard'},
  {label: '親友介紹', value: 'from_others'},
  {label: '其它來源', value: 'other'},
])

const sending = ref(false)

//非必填
// const bypass = ["msg", "room_type", "email"]
const bypass = ["msg", "email", "source_note"];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "信箱", //email
  "房型", //room_type
  "居住縣市", //city
  "居住地區", //area
  "消息來源", // source
  "其他來源", // source_note
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
    if (!bypass.includes(key) || (key == 'source_note' && formData.source == 'other')) {
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

  //姓名驗證
  if (!formData.name.match(/^[\w\W]{1,16}/)) {
    pass = false
    toast.error(`姓名字數限16字以內`)
    return
  }

  //手機驗證
  if (!formData.phone.match(/^(09)[0-9]{8}$/)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }

  //信箱驗證
  if (formData.email != '' && !formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    pass = false
    toast.error(`信箱格式錯誤`)
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
