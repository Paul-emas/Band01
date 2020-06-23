import Home from './components/Home.vue';
import HomeBusiness from './components/Home-Business.vue';
import Freelance from './components/Freelancer/SectionFreelancer.vue';


export const routes = [
    { path: '', component: Home},
    { path: '/business', component: HomeBusiness},
    { path: '/freelancer', component: Freelance}
]