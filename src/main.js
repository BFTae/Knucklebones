

import { createApp } from 'vue'
import App from './App.vue'
import PlayerBoard from './components/PlayerBoard.vue'
import ColumnPoints from './components/ColumnPoints.vue'
import Roll from './components/Roll.vue'

const app = createApp(App)
app.component('player-board',PlayerBoard)
app.component('column-points',ColumnPoints)
app.component('roll',Roll)
app.mount('#app')