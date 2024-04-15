import { Home, BookOpenText, Search,Ticket,Map,PlaneLanding } from "lucide-react";


const routes = [
    {
        label: 'Home',
        icon: Home,
        href: '/home',
        color: '#4CAF50'
    },
    {
        label: 'Tracker',
        icon: Search,
        href: '/tracker',
        color: '#4CAF50'
    },
    {
        label: 'Best Offers',
        icon: Ticket,
        href: '/bestoffer',
        color: '#4CAF50'
    },
    {
        label: 'Routes',
        icon: Map,
        href: '/routes',
        color: '#4CAF50'
    },
    {
        label: 'Airport',
        icon: PlaneLanding,
        href: '/airports',
        color: '#4CAF50'
    },
    
    {
        label: 'About',
        icon: BookOpenText,
        href: '/about',
        color: '#4CAF50'
    },
    


]
export default routes