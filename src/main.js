import { createApp} from 'vue'
import { defineComponent } from "vue";
import { useToast } from "primevue/usetoast";

import App from './App.vue'
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


const app = createApp(App)

app.use(router)
app.use(TabMenu)
app.use(ConfirmationService)
app.use(PrimeVue)
app.use(ToastService)
app.use(Sidebar)
app.use(KeenSlider)
app.mount('#app')


export default defineComponent({
    setup() {
        const toast = useToast();
        toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }
})
