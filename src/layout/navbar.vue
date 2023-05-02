<template>
    <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
        <div class="menu-inner">
            <img class="close" src="@/section/nav/close.svg" @click="menuOpen = !menuOpen" />
            <div class="menu-item font-bold cursor-pointer text-white" 
                v-for="(item, i) in info.navList"
                :key="i"
                @click="scrollTo(item.target)"
            >
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>

    <div class="topnav">
        <img class="top-logo" src="@/section/nav/logo.svg" />
        <div class="top-btns flex justify-between items-center">
            <img class="md:hidden" src="@/section/nav/map.svg" @click="modalOpen = true; modalType = 'gmap'" />
            <img class="md:hidden" src="@/section/nav/phone.svg" @click="modalOpen = true; modalType = 'phone'" />
            <img class="md:hidden" src="@/section/nav/msg.svg" @click="modalOpen = true; modalType = 'fb'" />
            <img class="md:hidden" src="@/section/nav/menu.svg" @click="menuOpen = !menuOpen" />

            <div class="hidden md:block item" 
                v-for="(item, i) in info.navList"
                :key="i"
                @click="scrollTo(item.target)"
            >{{ item.name }}</div>

            <svg 
                class="hidden md:block"
                width="38" height="50" 
                viewBox="0 0 38 50" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                @click="modalOpen = true; modalType = 'gmap'"
            >
                <circle cx="19" cy="19" r="18" fill="#005E4D" fill-opacity="0.8"/>
                <path d="M19.08 8.84C15.52 8.84 12.63 11.73 12.63 15.29C12.63 18.85 19.08 29.32 19.08 29.32C19.08 29.32 25.53 18.85 25.53 15.29C25.53 11.73 22.64 8.84 19.08 8.84ZM19.08 17.9C17.61 17.9 16.42 16.71 16.42 15.24C16.42 13.77 17.61 12.58 19.08 12.58C20.55 12.58 21.74 13.77 21.74 15.24C21.74 16.71 20.55 17.9 19.08 17.9Z" fill="#E3B15F"/>
                <path d="M19.08 37.16C29.0653 37.16 37.16 29.0653 37.16 19.08C37.16 9.09469 29.0653 1 19.08 1C9.09469 1 1 9.09469 1 19.08C1 29.0653 9.09469 37.16 19.08 37.16Z" stroke="#E3B15F" stroke-width="0.5" stroke-miterlimit="10"/>
                <path d="M6.24 49.34V49.46H3.63V49.34H4.45V43.69H3.63V43.57H5.41V49.33H6.24V49.34Z" fill="#E3B15F"/>
                <path d="M6.82996 47.54C6.82996 46.04 7.76996 45.49 8.63996 45.49C9.50996 45.49 10.45 46.03 10.45 47.54C10.45 49.05 9.58996 49.59 8.63996 49.59C7.61996 49.59 6.82996 48.89 6.82996 47.54ZM9.38996 47.48C9.38996 45.76 9.05996 45.62 8.61996 45.62C8.08996 45.62 7.87996 45.97 7.87996 47.59C7.87996 49.21 8.17996 49.47 8.62996 49.47C9.15996 49.47 9.37996 49.15 9.37996 47.48H9.38996Z" fill="#E3B15F"/>
                <path d="M14.62 48.44C14.46 48.82 14.12 49.59 13.06 49.59C12.72 49.59 11.3 49.45 11.3 47.58C11.3 45.59 12.82 45.49 13.15 45.49C13.97 45.49 14.48 45.91 14.48 46.45C14.48 46.67 14.34 46.99 13.92 46.99C13.5 46.99 13.38 46.69 13.38 46.49C13.38 46.19 13.57 46.08 13.72 46.01C13.75 45.99 13.78 45.97 13.78 45.92C13.78 45.79 13.53 45.6 13.21 45.6C12.64 45.6 12.36 45.98 12.36 47.53C12.36 49.08 12.58 49.37 13.31 49.37C13.97 49.37 14.25 48.87 14.53 48.35L14.63 48.42L14.62 48.44Z" fill="#E3B15F"/>
                <path d="M19.17 48.93C18.94 49.59 18.35 49.59 18.3 49.59C18.09 49.59 17.56 49.44 17.59 48.89C17.22 49.49 16.53 49.59 16.22 49.59C15.96 49.59 15.2 49.53 15.2 48.66C15.2 47.36 16.64 47.32 17.58 47.28V46.3C17.58 45.68 17.13 45.61 16.91 45.61C16.43 45.61 16.2 45.87 16.2 46.01C16.2 46.08 16.22 46.09 16.37 46.16C16.51 46.23 16.61 46.42 16.61 46.6C16.61 46.77 16.51 47.12 16.07 47.12C15.74 47.12 15.5 46.9 15.5 46.55C15.5 45.98 16.07 45.49 17 45.49C18.55 45.49 18.55 46.28 18.55 46.83V48.86C18.55 49.01 18.55 49.12 18.73 49.12C18.91 49.12 19 49 19.08 48.86L19.18 48.92L19.17 48.93ZM17.59 47.4C17.34 47.4 16.24 47.44 16.24 48.5C16.24 49.04 16.63 49.12 16.87 49.12C17.18 49.12 17.41 48.98 17.59 48.74V47.4Z" fill="#E3B15F"/>
                <path d="M21.11 45.62H21.97V45.74H21.11V48.75C21.11 48.92 21.11 49.26 21.48 49.26C21.85 49.26 21.99 48.91 22.06 48.75L22.16 48.8C22.1 48.98 21.89 49.58 21.03 49.58C20.64 49.58 20.15 49.44 20.15 48.75V45.74H19.41V45.62H20.15V44.36L21.11 44.29V45.62Z" fill="#E3B15F"/>
                <path d="M25.0599 49.34V49.46H22.45V49.34H23.27V45.74H22.45V45.62H24.2299V49.34H25.0599ZM24.3099 44.23C24.3099 44.54 24.06 44.79 23.75 44.79C23.44 44.79 23.19 44.54 23.19 44.23C23.19 43.92 23.45 43.67 23.75 43.67C24.05 43.67 24.3099 43.93 24.3099 44.23Z" fill="#E3B15F"/>
                <path d="M25.64 47.54C25.64 46.04 26.58 45.49 27.45 45.49C28.32 45.49 29.26 46.03 29.26 47.54C29.26 49.05 28.4 49.59 27.45 49.59C26.43 49.59 25.64 48.89 25.64 47.54ZM28.2 47.48C28.2 45.76 27.87 45.62 27.43 45.62C26.9 45.62 26.69 45.97 26.69 47.59C26.69 49.21 26.99 49.47 27.44 49.47C27.97 49.47 28.19 49.15 28.19 47.48H28.2Z" fill="#E3B15F"/>
                <path d="M31.49 45.62V46.32C31.79 45.93 32.1401 45.49 32.7901 45.49C33.4401 45.49 33.85 45.85 33.85 46.51V49.33H34.55V49.45H32.34V49.33H32.8801V46.52C32.8801 46.09 32.8801 45.75 32.4501 45.75C32.0701 45.75 31.7 46.19 31.47 46.52V49.33H32.08V49.45H29.8V49.33H30.51V45.72H29.8V45.61H31.47L31.49 45.62Z" fill="#E3B15F"/>
            </svg>
            <svg 
                class="hidden md:block" 
                width="42" height="50" 
                viewBox="0 0 42 50" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                @click="modalOpen = true; modalType = 'phone'"
            >
                <circle cx="21" cy="19" r="18" fill="#005E4D" fill-opacity="0.8"/>
                <path d="M21.8601 27.36L12.8501 18.35C10.6001 16.1 10.6001 12.44 12.8501 10.19L13.6201 9.42C14.0201 9.02 14.6701 9.02 15.0701 9.42L18.8301 13.18C19.2301 13.58 19.2301 14.23 18.8301 14.63L17.7901 15.67C17.3901 16.07 17.3901 16.72 17.7901 17.12L23.0801 22.41C23.4801 22.81 24.1301 22.81 24.5301 22.41L25.5701 21.37C25.9701 20.97 26.6201 20.97 27.0201 21.37L30.7801 25.13C31.1801 25.53 31.1801 26.18 30.7801 26.58L30.0101 27.35C27.7601 29.6 24.1001 29.6 21.8501 27.35L21.8601 27.36Z" fill="#E3B15F"/>
                <path d="M21.12 37.16C31.1054 37.16 39.2 29.0653 39.2 19.08C39.2 9.09469 31.1054 1 21.12 1C11.1347 1 3.04004 9.09469 3.04004 19.08C3.04004 29.0653 11.1347 37.16 21.12 37.16Z" stroke="#E3B15F" stroke-width="0.5" stroke-miterlimit="10"/>
                <path d="M4.07 48.44C3.91 48.82 3.57 49.59 2.51 49.59C2.17 49.59 0.75 49.45 0.75 47.58C0.75 45.59 2.27 45.49 2.6 45.49C3.42 45.49 3.93 45.91 3.93 46.45C3.93 46.67 3.79 46.99 3.37 46.99C2.95 46.99 2.83 46.69 2.83 46.49C2.83 46.19 3.02 46.08 3.17 46.01C3.2 45.99 3.23 45.97 3.23 45.92C3.23 45.79 2.98 45.6 2.66 45.6C2.09 45.6 1.81 45.98 1.81 47.53C1.81 49.08 2.03 49.37 2.76 49.37C3.42 49.37 3.7 48.87 3.98 48.35L4.08 48.42L4.07 48.44Z" fill="#E3B15F"/>
                <path d="M4.71997 47.54C4.71997 46.04 5.65997 45.49 6.52997 45.49C7.39997 45.49 8.33997 46.03 8.33997 47.54C8.33997 49.05 7.47997 49.59 6.52997 49.59C5.50997 49.59 4.71997 48.89 4.71997 47.54ZM7.27997 47.48C7.27997 45.76 6.94997 45.62 6.50997 45.62C5.97997 45.62 5.76997 45.97 5.76997 47.59C5.76997 49.21 6.06997 49.47 6.51997 49.47C7.04997 49.47 7.26997 49.15 7.26997 47.48H7.27997Z" fill="#E3B15F"/>
                <path d="M10.56 45.62V46.32C10.86 45.93 11.21 45.49 11.86 45.49C12.51 45.49 12.92 45.85 12.92 46.51V49.33H13.62V49.45H11.41V49.33H11.95V46.52C11.95 46.09 11.95 45.75 11.52 45.75C11.14 45.75 10.77 46.19 10.54 46.52V49.33H11.15V49.45H8.87V49.33H9.58V45.72H8.87V45.61H10.54L10.56 45.62Z" fill="#E3B15F"/>
                <path d="M15.6 45.62H16.46V45.74H15.6V48.75C15.6 48.92 15.6 49.26 15.97 49.26C16.34 49.26 16.48 48.91 16.55 48.75L16.65 48.8C16.59 48.98 16.38 49.58 15.52 49.58C15.13 49.58 14.64 49.44 14.64 48.75V45.74H13.9V45.62H14.64V44.36L15.6 44.29V45.62Z" fill="#E3B15F"/>
                <path d="M21.06 48.93C20.83 49.59 20.24 49.59 20.19 49.59C19.98 49.59 19.45 49.44 19.48 48.89C19.11 49.49 18.42 49.59 18.11 49.59C17.85 49.59 17.09 49.53 17.09 48.66C17.09 47.36 18.53 47.32 19.47 47.28V46.3C19.47 45.68 19.02 45.61 18.8 45.61C18.32 45.61 18.09 45.87 18.09 46.01C18.09 46.08 18.11 46.09 18.26 46.16C18.4 46.23 18.5 46.42 18.5 46.6C18.5 46.77 18.4 47.12 17.96 47.12C17.63 47.12 17.39 46.9 17.39 46.55C17.39 45.98 17.96 45.49 18.89 45.49C20.44 45.49 20.44 46.28 20.44 46.83V48.86C20.44 49.01 20.44 49.12 20.62 49.12C20.8 49.12 20.89 49 20.97 48.86L21.07 48.92L21.06 48.93ZM19.48 47.4C19.23 47.4 18.13 47.44 18.13 48.5C18.13 49.04 18.52 49.12 18.76 49.12C19.07 49.12 19.3 48.98 19.48 48.74V47.4Z" fill="#E3B15F"/>
                <path d="M24.96 48.44C24.8 48.82 24.46 49.59 23.4 49.59C23.06 49.59 21.64 49.45 21.64 47.58C21.64 45.59 23.16 45.49 23.49 45.49C24.31 45.49 24.82 45.91 24.82 46.45C24.82 46.67 24.68 46.99 24.26 46.99C23.84 46.99 23.72 46.69 23.72 46.49C23.72 46.19 23.91 46.08 24.06 46.01C24.09 45.99 24.12 45.97 24.12 45.92C24.12 45.79 23.87 45.6 23.55 45.6C22.98 45.6 22.7 45.98 22.7 47.53C22.7 49.08 22.92 49.37 23.65 49.37C24.31 49.37 24.59 48.87 24.87 48.35L24.97 48.42L24.96 48.44Z" fill="#E3B15F"/>
                <path d="M27.04 43.58V46.39C27.15 46.14 27.43 45.49 28.34 45.49C28.42 45.49 29.42 45.49 29.42 46.51V49.33H30.09V49.45H27.92V49.33H28.46V46.46C28.46 46.14 28.41 45.74 28.02 45.74C27.43 45.74 27.2 46.26 27.04 46.59V49.33H27.65V49.45H25.35V49.33H26.09V43.68H25.35V43.56H27.04V43.58Z" fill="#E3B15F"/>
                <path d="M34.7101 45.62V48.67C34.7101 49 34.7401 49.33 35.1501 49.33C35.6701 49.33 35.9701 48.97 36.1301 48.41V45.73H35.4301V45.61H37.0901V49.33H37.7901V49.45H36.1301V48.68C36.0301 48.93 35.7701 49.58 34.8601 49.58C33.7601 49.58 33.7601 48.83 33.7601 48.56V45.74H33.0601V45.62H34.7201H34.7101Z" fill="#E3B15F"/>
                <path d="M41.29 46.71H41.17C41 45.96 40.41 45.61 39.89 45.61C39.27 45.61 39.03 46.03 39.03 46.29C39.03 46.43 39.05 46.63 39.7 46.87C41.01 47.38 41.02 47.39 41.24 47.58C41.38 47.72 41.5 47.94 41.5 48.35C41.5 48.88 41.14 49.58 40.15 49.58C39.32 49.58 38.96 49.21 38.81 49.07L38.61 49.39H38.49V48.11H38.61C38.71 48.73 38.96 49.04 39.16 49.18C39.37 49.33 39.75 49.46 40.06 49.46C40.52 49.46 40.97 49.18 40.97 48.8C40.97 48.42 40.79 48.35 39.45 47.84C39 47.66 38.53 47.46 38.53 46.72C38.53 45.86 39.22 45.49 39.84 45.49C40.39 45.49 40.65 45.69 40.96 45.94L41.16 45.62H41.28V46.71H41.29Z" fill="#E3B15F"/>
            </svg>
            <svg 
                class="hidden md:block" 
                width="43" height="50" 
                viewBox="0 0 43 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                @click="modalOpen = true; modalType = 'fb'"
            >
                <circle cx="21" cy="19" r="18" fill="#005E4D" fill-opacity="0.8"/>
                <path d="M21.08 37.16C31.0653 37.16 39.16 29.0653 39.16 19.08C39.16 9.09469 31.0653 1 21.08 1C11.0947 1 3 9.09469 3 19.08C3 29.0653 11.0947 37.16 21.08 37.16Z" stroke="#E3B15F" stroke-width="0.5" stroke-miterlimit="10"/>
                <path d="M21.08 8.32001C15.21 8.32001 10.46 13.08 10.46 18.94C10.46 22.14 11.88 25.01 14.12 26.96L14.32 29.84L17.23 28.84C18.43 29.31 19.73 29.57 21.09 29.57C26.96 29.57 31.71 24.81 31.71 18.95C31.71 13.09 26.95 8.33001 21.09 8.33001L21.08 8.32001ZM27.57 16.21L24.78 20.96C24.08 22.16 22.47 22.44 21.41 21.55L19.52 19.97C19.29 19.78 18.95 19.77 18.71 19.94L15.37 22.38C14.89 22.73 14.27 22.15 14.6 21.65L17.81 16.68C18.37 15.82 19.55 15.63 20.34 16.27L22.35 17.89C22.65 18.14 23.09 18.15 23.4 17.92L26.78 15.48C27.25 15.14 27.86 15.69 27.56 16.19L27.57 16.21Z" fill="#E3B15F"/>
                <path d="M2.41 44.62V45.2C2.57 44.99 2.96 44.5 3.63 44.5C3.82 44.5 4.46 44.58 4.57 45.2C4.94 44.75 5.34 44.5 5.79 44.5C6.78 44.5 6.78 45.24 6.78 45.45V48.34H7.48V48.46H5.82V45.24C5.82 45.08 5.82 44.82 5.42 44.82C5.02 44.82 4.71 45.2 4.58 45.41V48.34H5.28V48.46H3.62V45.21C3.62 44.98 3.49 44.81 3.24 44.81C2.82 44.81 2.55 45.2 2.41 45.4V48.33H3.11V48.45H0.75V48.33H1.45V44.73H0.75V44.61H2.41V44.62Z" fill="#E3B15F"/>
                <path d="M9.07001 46.5C9.07001 46.94 9.13001 47.6 9.17001 47.83C9.25001 48.17 9.55001 48.41 10.02 48.41C10.49 48.41 11.15 48.16 11.51 47.43L11.61 47.49C11.17 48.36 10.49 48.58 9.88001 48.58C8.39001 48.58 8.01001 47.46 8.01001 46.53C8.01001 45.02 9.06001 44.49 9.83001 44.49C10.39 44.49 10.9 44.75 11.21 45.14C11.5 45.51 11.62 46.08 11.62 46.5H9.06001H9.07001ZM10.53 46.38C10.53 45.44 10.5 44.61 9.82001 44.61C9.44001 44.61 9.11001 44.75 9.08001 46.38H10.54H10.53Z" fill="#E3B15F"/>
                <path d="M15.4 45.71H15.28C15.11 44.96 14.52 44.61 14 44.61C13.38 44.61 13.14 45.03 13.14 45.29C13.14 45.43 13.16 45.63 13.81 45.87C15.12 46.38 15.13 46.39 15.35 46.58C15.49 46.72 15.61 46.94 15.61 47.35C15.61 47.88 15.25 48.58 14.26 48.58C13.43 48.58 13.07 48.21 12.92 48.07L12.72 48.39H12.6V47.11H12.72C12.82 47.73 13.07 48.04 13.27 48.18C13.48 48.33 13.86 48.46 14.17 48.46C14.63 48.46 15.08 48.18 15.08 47.8C15.08 47.42 14.9 47.35 13.56 46.84C13.11 46.66 12.64 46.46 12.64 45.72C12.64 44.86 13.33 44.49 13.95 44.49C14.5 44.49 14.76 44.69 15.07 44.94L15.27 44.62H15.39V45.71H15.4Z" fill="#E3B15F"/>
                <path d="M19.4 45.71H19.28C19.11 44.96 18.52 44.61 18 44.61C17.38 44.61 17.14 45.03 17.14 45.29C17.14 45.43 17.16 45.63 17.81 45.87C19.12 46.38 19.13 46.39 19.35 46.58C19.49 46.72 19.61 46.94 19.61 47.35C19.61 47.88 19.25 48.58 18.26 48.58C17.43 48.58 17.07 48.21 16.92 48.07L16.72 48.39H16.6V47.11H16.72C16.82 47.73 17.07 48.04 17.27 48.18C17.48 48.33 17.86 48.46 18.17 48.46C18.63 48.46 19.08 48.18 19.08 47.8C19.08 47.42 18.9 47.35 17.56 46.84C17.11 46.66 16.64 46.46 16.64 45.72C16.64 44.86 17.33 44.49 17.95 44.49C18.5 44.49 18.76 44.69 19.07 44.94L19.27 44.62H19.39V45.71H19.4Z" fill="#E3B15F"/>
                <path d="M21.52 46.5C21.52 46.94 21.58 47.6 21.62 47.83C21.7 48.17 22 48.41 22.47 48.41C22.94 48.41 23.6 48.16 23.96 47.43L24.06 47.49C23.62 48.36 22.94 48.58 22.33 48.58C20.84 48.58 20.46 47.46 20.46 46.53C20.46 45.02 21.51 44.49 22.28 44.49C22.84 44.49 23.35 44.75 23.66 45.14C23.95 45.51 24.07 46.08 24.07 46.5H21.51H21.52ZM22.98 46.38C22.98 45.44 22.95 44.61 22.27 44.61C21.89 44.61 21.56 44.75 21.53 46.38H22.99H22.98Z" fill="#E3B15F"/>
                <path d="M26.31 44.62V45.32C26.61 44.93 26.96 44.49 27.61 44.49C28.26 44.49 28.67 44.85 28.67 45.51V48.33H29.37V48.45H27.16V48.33H27.7V45.52C27.7 45.09 27.7 44.75 27.27 44.75C26.89 44.75 26.52 45.19 26.29 45.52V48.33H26.9V48.45H24.62V48.33H25.33V44.72H24.62V44.61H26.29L26.31 44.62Z" fill="#E3B15F"/>
                <path d="M30.16 45.74C30.16 45.29 30.42 44.49 31.59 44.49C31.8 44.49 32.42 44.51 32.7 44.89C32.87 44.67 33 44.51 33.34 44.51C33.39 44.51 33.8 44.51 33.8 44.88C33.8 45.14 33.6 45.26 33.42 45.26C33.14 45.26 33.12 45.07 33.1 44.92C33.1 44.87 33.06 44.84 33.01 44.84C32.95 44.84 32.84 44.9 32.77 44.98C33.01 45.19 33.01 45.67 33.01 45.73C33.01 46.88 31.81 46.93 31.62 46.93C31.56 46.93 31.31 46.91 31.26 46.91C30.84 46.91 30.32 47.08 30.32 47.28C30.32 47.42 30.63 47.48 30.87 47.48C31.11 47.48 32.19 47.43 32.34 47.43C32.82 47.43 33.61 47.46 33.61 48.39C33.61 49.67 32.06 49.74 31.51 49.74C30.31 49.74 29.96 49.44 29.96 49C29.96 48.63 30.25 48.4 30.6 48.26C30.38 48.17 29.97 48 29.97 47.6C29.97 46.99 30.78 46.87 30.94 46.85C30.76 46.77 30.16 46.52 30.16 45.75V45.74ZM30.54 48.83C30.54 49.57 31.34 49.62 31.71 49.62C32.36 49.62 33.11 49.43 33.11 48.71C33.11 48.38 32.9 48.33 32.49 48.33C32.34 48.33 31.65 48.36 31.43 48.36C30.97 48.36 30.87 48.34 30.77 48.3C30.59 48.4 30.54 48.64 30.54 48.84V48.83ZM32.04 45.74C32.04 44.72 31.9 44.61 31.59 44.61C31.3 44.61 31.14 44.7 31.14 45.71C31.14 46.72 31.3 46.81 31.59 46.81C31.72 46.81 32.03 46.81 32.03 46.08C32.03 46.01 32.03 45.81 32.03 45.74H32.04Z" fill="#E3B15F"/>
                <path d="M35.45 46.5C35.45 46.94 35.51 47.6 35.55 47.83C35.63 48.17 35.93 48.41 36.4 48.41C36.87 48.41 37.53 48.16 37.89 47.43L37.99 47.49C37.55 48.36 36.87 48.58 36.26 48.58C34.77 48.58 34.39 47.46 34.39 46.53C34.39 45.02 35.44 44.49 36.21 44.49C36.77 44.49 37.28 44.75 37.59 45.14C37.88 45.51 38 46.08 38 46.5H35.44H35.45ZM36.91 46.38C36.91 45.44 36.88 44.61 36.2 44.61C35.82 44.61 35.49 44.75 35.46 46.38H36.92H36.91Z" fill="#E3B15F"/>
                <path d="M40.2901 44.62V45.66C40.3801 45.38 40.4601 45.12 40.7401 44.86C41.0001 44.62 41.3201 44.49 41.6301 44.49C41.9101 44.49 42.3101 44.64 42.3101 45.11C42.3101 45.47 42.0501 45.69 41.7601 45.69C41.5001 45.69 41.2201 45.49 41.2201 45.19C41.2201 45.15 41.2701 44.97 41.2701 44.93C41.2701 44.85 41.2101 44.81 41.1001 44.81C40.8001 44.81 40.2901 45.39 40.2901 46.35V48.32H41.1101V48.44H38.5601V48.32H39.3301V44.72H38.5601V44.6H40.2901V44.62Z" fill="#E3B15F"/>
            </svg>

        </div>
    </div>

    <input type="checkbox" v-model="modalOpen" id="contact-modal2" class="modal-toggle" />
    <div class="modal -mt-20 md:-mt-72">
        <div class="modal-box py-12 relative flex flex-col items-center justify-center">
            <label for="contact-modal2" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
            <!-- icon -->
            <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="達麗天蒔" srcset="" />
            <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="達麗天蒔" srcset="" />
            <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="達麗天蒔" srcset="" />
            <!-- title -->
            <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
                '接待會館'
            }}</div>
            <!-- content -->
            <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
                `接待中心：${info.address}`
            }}</div>
            <!-- btn -->
            <div class="btn btn-lg bg-color1  border-0 text-white mt-12 hover:bg-color2" @click="go()" v-bind:class="{
                'hidden': modalType == 'phone' && !$isMobile(),
                'btlead': modalType == 'fb',
                'btsearch': modalType == 'gmap',
                'btcontac': modalType == 'phone'
            }">
                {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
                    '開啟導航'
                }}</div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.topnav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(52);
    padding: 0 size-m(18) 0 size-m(18);
    font-family: 'Noto Serif TC';
    background: rgba(1, 52, 43, 0.6);
    border-bottom: size-m(1) solid #E3B15F;
    z-index: 98;
    display: flex;
    justify-content: space-between;
    backdrop-filter: saturate(150%) blur(20px);
    font-weight: 700;
    align-items: center;
    @media screen and (min-width:768px) {
        height: size(87);
        padding: 0 size(37) 0 size(37);
        border-bottom: size(1) solid #E3B15F;
        font-size: size(17);
    }

    .top-logo {
        width: size-m(153);

        @media screen and (min-width:768px) {
            width: size(267.55);
            height: auto;
        }
    }

    .top-btns {
        width: size-m(120.7);
        @media screen and (min-width:768px) {
            width: size(973.56);
        }

        img, svg {
            width: size-m(21.7);
            cursor: pointer;
            @media screen and (min-width:768px) {
                width: auto;
                height: auto;
            }

            circle {
                opacity: 0;
                transition: all .2s;
            }

            &:hover circle {
                opacity: 1;
            }
        }
    }

    .item {
        color: #E3B15F;
        cursor: pointer;
        position: relative;
        transition: all .2s;

        &:after {
            content: "";
            position: absolute;
            bottom: size(-5);
            left: 0;
            width: 100%;
            height: size(2);
            background: #007C70;
            transform: scaleX(0);
            transform-origin: left;
            transition: all .2s;
        }

        &:hover {
            // color: #fff;

            &:after {
                transform: scaleX(1);
            }
        }

        &.active {
            color: #fff;

            &:after {
                transform: scaleX(1);
            }
        }
    }
}

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 34, 31, 0.9);
    z-index: 99;
    display: flex;
    font-family: 'Noto Serif TC';
    transform: translateX(-100%);
    transition: all .5s;
    display: flex;
    backdrop-filter: saturate(180%) blur(4px);
    @media screen and (min-width:768px) {
        display: none;
    }

    .menu-inner {
        width: size-m(128);
        margin: 0 auto;
    }

    .close {
        width: size-m(40);
        height: size-m(40);
        cursor: pointer;
        margin: 0 auto size-m(26) auto;
    }

    .menu-item {
        padding: size-m(13) 0;
        position: relative;
        text-align: center;
        
        span {
            font-size: size-m(16);
            white-space: nowrap;
            font-weight: 600;
            position: relative;

            &:after {
                content: "";
                position: absolute;
                bottom: size-m(-4);
                left: 0;
                width: 100%;
                height: size-m(2);
                background: #E3B15F;
                transform: scaleX(0);
                transform-origin: left;
                transition: all .2s;
            }

            &:hover:after {
                transform: scaleX(1);
            }
        }

        &.active span:after {
            transform: scaleX(1);
        }
    }

    &.open {
        transform: translateX(0);
    }
}
</style>

<script setup>
import { inject, getCurrentInstance, onMounted, ref, nextTick } from 'vue';
import info from "@/info"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}

const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const higherScreen = ref(false)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    if (!globals.$isMobile() && ratio > 0.46875) {
        higherScreen.value = true
    }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });

    nextTick(() => {
        const panels = ['.s2', '.s3', '.s4', '.s5', '.s6', '.s7', '.s8', '.s9']; 
        const navLinks = document.querySelectorAll('.topnav .top-btns .item');
        const navLinksM = document.querySelectorAll('.menu .menu-item');
        panels.forEach((panel, i) => {
            if(document.querySelector(panel)){
                ScrollTrigger.create({
                    trigger: panel,
                    // start: "top bottom",
                    // end: "bottom bottom",
                    start: "top bottom",
                    // markers: true,
                    onEnter: () => {
                        navLinks.forEach((e) => {
                            e.classList.remove("active");
                        });
                        navLinks[i].classList.add("active");

                        navLinksM.forEach((e) => {
                            e.classList.remove("active");
                        });
                        navLinksM[i].classList.add("active");
                        // console.log(panel, 'onEnter')
                    },
                    onEnterBack: () => {
                        navLinks.forEach((e) => {
                            e.classList.remove("active");
                        });
                        navLinks[i].classList.add("active");
                        
                        navLinksM.forEach((e) => {
                            e.classList.remove("active");
                        });
                        navLinksM[i].classList.add("active");
                        // console.log(panel, 'onEnterBack')
                    },
                    onLeave: () => {
                        if(panel == '.s9') {
                            console.log('s9 leave')
                            navLinks[7].classList.remove("active");
                            navLinksM[7].classList.remove("active");
                        }
                        // console.log(panel, 'onLeave')
                    },
                    onLeaveBack: () => {
                        if(panel == '.s2') {
                            navLinks[0].classList.remove("active");
                            navLinksM[0].classList.remove("active");
                        }
                        // console.log(panel, 'onLeaveBack')
                    }
                });
            }
        });
    });
})

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
    menuOpen.value = false;
}
</script>