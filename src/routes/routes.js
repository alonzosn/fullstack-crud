// import VueRouter from 'vue-router'
import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add_contact',
        component: AddContact
    },
    {
        name: 'EditContact',
        path: '/contact/edit/:id?',
        component: EditContact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
// Vue.use(ContactList)
// var router = new ContactList({
//     routes: [
//         {
//             path: '/',
//             component: ContactList
//         }
//     ],
//     router: createRouter({
//         history: createWebHistory(),
//         routes
//     })
// })

// export default router;