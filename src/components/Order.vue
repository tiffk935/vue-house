<template>
  <!-- Form -->
  <div class="container">
    <div class="form">

      <div class="form-inner">
        <div>
          <div class="input-group">
            <span>姓　　名</span>
            <input type="text" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          </div>
          <div class="input-group">
            <span>連絡電話</span>
            <input type="text" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" />
          </div>
          <div class="input-group">
            <span>電子信箱</span>
            <input type="text" :value="formData.email"
              @input="(event) => (formData.email = event.target.value)" />
          </div>
        </div>

        <div>
          <div class="input-group">
            <span>參觀人數</span>
            <input type="text" :value="formData.people"
              @input="(event) => (formData.people = event.target.value)" />
          </div>
          <div class="input-group">
            <span>登錄方案</span>
            <div class="radios">
              <div class="pretty p-default p-round">
                <input 
                  type="radio" 
                  name="radio1" 
                  :checked="formData.type === '展覽參觀'"
                  value="展覽參觀"
                  @input="(event) => (formData.type = event.target.value)" />
                <div class="state">
                  <label>展覽參觀</label>
                </div>
              </div>
              <div class="pretty p-default p-round">
                <input 
                  type="radio" 
                  name="radio1"
                  :checked="formData.type === '平實預推案'"
                  value="平實預推案"
                  @input="(event) => (formData.type = event.target.value)" />
                <div class="state">
                  <label>平實預推案</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="input-group">
        <span>備　　註</span>
        <input type="text" :value="formData.msg"
          @input="(event) => (formData.msg = event.target.value)" />
      </div>
    </div>

    <div class="others">
      <div class="policy-recaptcha">
        <!-- Policy -->
        <div class="control">
          <div class="pretty p-default p-round">
            <input id="privacy-checkbox" type="checkbox" v-model="formData.policyChecked" />
            <div class="state">
              <label for="privacy-checkbox">我同意使用上方提供的資訊與我聯繫，詳情請參閱<span @click="open">隱私權聲明</span>。</label>
            </div>
          </div>
          <ModalsContainer />
        </div>

        <!-- Recaptcha -->
        <vue-recaptcha
          class="recaptcha"
          ref="recaptcha"
          :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify"
          @expired="onRecaptchaUnVerify" />
      </div>

      <!-- Send -->
      <div class="send" @click="send">
        {{ sending? '發送中..': '立即預約' }}
      </div>
    </div>
  </div>

  <div class="map">
    <iframe :src="info.googleSrc" frameborder="0"></iframe>
  </div>

  <div class="location">
    <div class="container">
      <div class="addr">
        平實願景館 地址｜<br>
        {{ info.address }}
      </div>
      <a class="navigation" target="_blank" :href="info.googleLink">立即導航</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.container {
  padding: 0 func.size-m(49);
  @media screen and (min-width:768px) {
    padding: 0 func.size(304);
  }
}

.form {
  .form-inner {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;

      & > div {
        width: func.size(612);
      }
    }
  }


  .input-group {
    display: block;
    width: 100%;
    margin-bottom: func.size-m(20);
    display: flex;
    align-items: center;
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      margin-bottom: func.size(49);
      border-bottom: func.size(1) solid #000;
    }
    
    span {
      display: block;
      width: func.size-m(62);
      padding-right: func.size-m(13);
      margin-bottom: func.size-m(4);
      margin-right: func.size-m(13);
      border-right: func.size-m(1) solid #000;
      font-size: func.size-m(12);
      line-height: func.size-m(14);
      font-weight: 500;
      letter-spacing: .07em;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        width: func.size(125);
        padding-right: func.size(22);
        margin-bottom: func.size(22);
        margin-right: func.size(22);
        border-right: func.size(1) solid #000;
        font-size: func.size(25);
        line-height: func.size(25);
      }
    }

    input[type=text], select {
      appearance: none;
      display: block;
      width: 100%;
      font-size: 16px;
      border: none;
      background: none;
      padding: func.size-m(4) 0;
      margin-bottom: func.size-m(4);
      @media screen and (min-width:768px) {
        padding: 0;
        margin-bottom: func.size(22);
      }

      &:focus {
        outline: none;
      }
    }

    .radios {
      width: 100%;
      padding: func.size-m(4) 0;
      margin-bottom: func.size-m(4);
      display: flex;
      @media screen and (min-width:768px) {
        padding: 0;
        justify-content: flex-end;
      }

      .pretty {
        margin-right: func.size-m(23);
        @media screen and (min-width:768px) {
          margin-right: func.size(61);
        }
        
        &:last-child {
          margin-right: 0;
        }
      }

      .pretty .state label {
        min-width: unset;
        position: relative;
        text-indent: func.size-m(18);
        font-size: func.size-m(12);
        line-height: func.size-m(12);
        display: block;
        font-weight: 500;
        letter-spacing: .07em;
        @media screen and (min-width:768px) {
          text-indent: func.size(49);
          font-size: func.size(25);
          line-height: func.size(25);
        }

        &:before {
          width: func.size-m(12);
          height: func.size-m(12);
          border-color: #000;
          top: 0;
          @media screen and (min-width:768px) {
            width: func.size(25);
            height: func.size(25);
          }
        }

        &:after {
          width: func.size-m(8);
          height: func.size-m(8);
          transform: none;
          margin: func.size-m(2);
          top: 0;
          @media screen and (min-width:768px) {
            width: func.size(17);
            height: func.size(17);
            margin: func.size(4);
          }
        }
      }

      .pretty.p-default input:checked~.state label:after {
        background: #000 !important;
      }
    }
  }
}

.others {
  @media screen and (min-width:768px) {
    margin-bottom: func.size(260);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .policy-recaptcha {
      display: flex;
      flex-direction: column-reverse;
    }
  }
}

.control {
  margin-bottom: func.size-m(11);
  @media screen and (min-width:768px) {
    margin-bottom: 0;
  }

  .pretty input {
    width: func.size-m(12);
    height: func.size-m(12);
    @media screen and (min-width:768px) {
      width: func.size(25);
      height: func.size(25);
    }
  }

  .pretty .state label {
    white-space: initial;
    padding-left: func.size-m(20);
    text-indent: 0;
    font-size: func.size-m(12);
    line-height: func.size-m(14);
    font-weight: 500;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      padding-left: func.size(51);
      font-size: func.size(25);
      line-height: func.size(25);
    }

    &:after, &:before {
      top: 50%;
      transform: translate(0, -50%);
      width: func.size-m(12);
      height: func.size-m(12);
      @media screen and (min-width:768px) {
        width: func.size(25);
        height: func.size(25);
      }
    }

    &:before {
      border-color: #000;
    }

    &:after {
      transform: translate(0, -50%) scale(.6666);
    }
  }

  .pretty.p-default input:checked~.state label:after {
    background-color: #000 !important;
  }

  label span {
    cursor: pointer;

    &:hover {
      color: #6b6b6b;
    }
  }
}

.recaptcha {
  display: flex;
  justify-content: center;
  margin: 0 func.size-m(-49) func.size-m(20) func.size-m(-49);
  @media screen and (min-width:768px) {
    justify-content: flex-start;
    margin: 0 0 func.size(44) 0;
  }
}

.send {
  width: 100%;
  border: func.size-m(3) solid #299644;
  text-align: center;
  padding: func.size-m(19) 0;
  color: #299644;
  font-size: func.size-m(18);
  font-weight: 500;
  letter-spacing: .23em;
  cursor: pointer;
  transition: all .2s;
  margin-bottom: func.size-m(65);
  @media screen and (min-width:768px) {
    width: func.size(328);
    border: func.size(3) solid #299644;
    padding: func.size(20) 0;
    font-size: func.size(35);
    margin: 0;
  }

  &:hover {
    background: #299644;
    color: #fff;
  }
}

.map {
  width: 100%;
  height: func.size-m(230);
  background: #ddd;
  margin-bottom: func.size-m(21);
  @media screen and (min-width:768px) {
    width: func.size(1311);
    height: func.size(529);
    margin: 0 auto func.size(35) auto;
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.location {

  .container {
    @media screen and (min-width:768px) {
      padding: 0;
      display: flex;
      width: func.size(1311);
      margin: 0 auto;
    }
  }

  .addr {
    width: 100%;
    font-size: func.size-m(14);
    font-weight: 500;
    line-height: func.size-m(21);
    letter-spacing: .05em;
    padding: func.size-m(10) func.size-m(20);
    border: func.size-m(1) solid #299644;
    @media screen and (min-width:768px) {
      flex: 1;
      font-size: func.size(29);
      line-height: func.size(42);
      padding: func.size(27) func.size(56);
      border: func.size(1) solid #299644;

      br {
        display: none;
      }
    }
  }

  .navigation {
    display: block;
    width: 100%;
    font-size: func.size-m(15);
    font-weight: 500;
    line-height: func.size-m(21);
    letter-spacing: .23em;
    text-align: center;
    padding: func.size-m(13) 0;
    border: func.size-m(1) solid #299644;
    background: #299644;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    @media screen and (min-width:768px) {
      width: func.size(266);
      font-size: func.size(35);
      line-height: func.size(42);
      padding: func.size(27) 0;
      border: func.size(1) solid #299644;
    }
    &:hover{
      background: #fff;
    color: #299644; 
    transition:.3s;
  }
  }
}
</style>

<script setup>
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import info from '@/info';
import { ref, reactive } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { useToast } from 'vue-toastification';
import { ModalsContainer, useModal } from 'vue-final-modal';
import 'vue-final-modal/style.css';
import Privacy from '@/components/Privacy.vue';

const { open, close } = useModal({
  component: Privacy,
  attrs: {
    onConfirm() {
      close();
    },
  }
});

const toast = useToast()
const sending = ref(false)
const formData = reactive({
  name: "",
  phone: "",
  email: "",
  people: "",
  type: "展覽參觀",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

//非必填
const bypass = ['type', 'msg']

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "信箱", //email
  "參觀人數", //people
  "登錄方案", //type
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
])

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

    idx++;

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
      &email=${formData.email}
      &people=${formData.people}
      &type=${formData.type}
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
        // window.location.href = "formThanks";
        toast.success(`表單已送出，感謝您的填寫`)
      }
      sending.value = false
    });
  }
}
</script>