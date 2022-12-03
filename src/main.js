import { createApp} from 'vue'
import { defineComponent } from "vue";
import { useToast } from "primevue/usetoast";

import App from './App.vue'
import VueMask from 'v-mask'
import router from './router'
import PrimeVue from 'primevue/config'
import Sidebar from 'primevue/sidebar'
import TabMenu from 'primevue/tabmenu'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice';
import KeenSlider from 'keen-slider'


import 'keen-slider/keen-slider.min.css' // carousel
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'       //core css
import 'primeicons/primeicons.css'       //icons


const apps = createApp(App)

apps.use(router)
apps.use(TabMenu)
apps.use(ConfirmationService)
apps.use(PrimeVue)
apps.use(ToastService)
apps.use(Sidebar)
apps.mount('#app')
apps.use(KeenSlider)
apps.use(VueMask)

export default defineComponent({
    setup() {
        const toast = useToast();
        toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }
})
