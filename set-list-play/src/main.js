import { createApp } from 'vue'
import App from './App.vue'
import DatePicker from '@vuepic/vue-datepicker'
import { registerPlugins } from '@/plugins'
import './style.css'

const app = createApp(App)

registerPlugins(app)

app.component('DatePicker', DatePicker)
app.mount('#app')
