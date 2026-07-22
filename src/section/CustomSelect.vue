

<template>
  <div class="custom-select" ref="selectRef">
    <div class="select-btn" @click="toggle">
      <span :class="{ placeholder: !modelValue }">
        {{ currentLabel }}
      </span>

      <img
        src="@/section/icon/prime_angle-down.svg"
        class="arrow"
        :class="{ open: isOpen }"
      />
    </div>

    <Transition name="dropdown">
      <ul v-if="isOpen" class="options">
        <li
          v-for="item in options"
          :key="item.value"
          @click="choose(item)"
          :class="{ active: modelValue === item.value }"
        >
          {{ item.label }}

          <span v-if="modelValue === item.value">
            ✓
          </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "請選擇"
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const selectRef = ref(null)

const currentLabel = computed(() => {
  const item = props.options.find(
    i => i.value === props.modelValue
  )

  return item ? item.label : props.placeholder
})

const toggle = () => {
  isOpen.value = !isOpen.value
}

const choose = (item) => {
  emit("update:modelValue", item.value)
  isOpen.value = false
}

const clickOutside = (e) => {
  if (
    selectRef.value &&
    !selectRef.value.contains(e.target)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", clickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", clickOutside)
})
</script>

<style scoped>

.custom-select{
  position:relative;
  flex:1;
  height: 100%;
  padding-left: 1em;
}

.select-btn{

  display:flex;
  justify-content:space-between;
  align-items:center;

  width:100%;
  height:100%;

  min-height:48px; 

  cursor:pointer;

  color:#fff;

  padding-right:1em;
}

.placeholder{

  color:rgba(255,255,255,.55);

}

.arrow{

  width:48px;
  height:48px;

  transition:.3s;

}

.arrow.open{

  transform:rotate(180deg);

}

.options{

  position:absolute;

  top:calc(100% + 10px);

  left:0;

  width:100%;

  background:#fff;

  border-radius:18px;

  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;

  box-shadow:0 15px 35px rgba(0,0,0,.25);

  z-index:999;

  

}

.options li{

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:14px 20px;

  cursor:pointer;

  color:#444;

  transition:.25s;

}

.options li:hover{

  background:#00771A;

  color:#fff;

}

.options li.active{

  background:#00771A;

  color:#fff;

}

.dropdown-enter-active,
.dropdown-leave-active{

  transition:.25s;

}

.dropdown-enter-from,
.dropdown-leave-to{

  opacity:0;
  transform:translateY(-8px);

}

.dropdown-enter-to,
.dropdown-leave-from{

  opacity:1;
  transform:translateY(0);

}

</style>