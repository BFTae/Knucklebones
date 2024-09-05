

import { createApp } from 'vue'
import App from './App.vue'
import PlayerBoard from './components/PlayerBoard.vue'
import ColumnPoints from './components/ColumnPoints.vue'

const app = createApp(App)
app.component('player-board',PlayerBoard)
app.component('column-points',ColumnPoints)
app.mount('#app')