import { createApp, ref, reactive } from 'vue';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import info from '@/data/info.js'

const app = createApp({
  setup() {
    const toast = useToast();
    const sending = ref(false)
    const formData = reactive({
      name: '',
      phone: '',
      email: '',
      people: '',
      msg: '',
      policyChecked: false,
      r_verify: false,
    })

    //非必填
    const bypass = ['type', 'msg', 'email', 'people']

    //中文對照
    const formDataRef = ref([
      "姓名", //name
      "手機", //phone
      "信箱", //email
      "參觀人數", //people
      // "登錄方案", //type
      "備註訊息", //msg
      "個資告知事項聲明", //policyChecked
      "機器人驗證", //r_verify
    ]);

    window.recaptchaCallback = () => { console.log('aa'); formData.r_verify = true };
    window.recaptchaExpiredCallback = () => { console.log('bb'); formData.r_verify = false };
    window.recaptchaErrorCallback = () => { console.log('cc'); formData.r_verify = false };

    function handleSubmit() {
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
          `https://script.google.com/macros/s/AKfycbzqyW-sbiYwNAwunTDkp3ncVcvPnPEkvsUQWswyprd2b1V2u1HQ/exec?name=${formData.name}
          &phone=${formData.phone}
          &email=${formData.email}
          &people=${formData.people}
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
        }).then((res) => {
          return res.json();
        }).then((json) => {
          if (json.success === true) {
            window.location.href = "/formThanks/";
            // toast.success(`表單已送出，感謝您的填寫`)
          } else {
            toast.error('預約失敗，請稍後再試');
          }
          sending.value = false
        });
      }
    }

    return { sending, formData, handleSubmit };
  }
});
app.use(Toast, { timeout: 3000 });
app.mount('#order-sec');