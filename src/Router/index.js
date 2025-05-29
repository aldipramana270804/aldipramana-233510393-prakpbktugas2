// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import AtributsBinding from '../components/AtributsBinding.vue';
import ComputedProperty from '../components/ComputedProperty.vue';
import ConditionalRendering from '../components/ConditionalRendering.vue';
import DeclarativeRendering from '../components/DeclarativeRendering.vue';
import EventListeners from '../components/EventListeners.vue';
import FromBindings from '../components/FromBindings.vue';
import LifecycleHook from '../components/LifecycleHook.vue';
import ListRendering from '../components/ListRendering.vue';
import Watchers from '../components/Watchers.vue';

const routes = [
  { path: '/', component: DeclarativeRendering },
  { path: '/atributs-binding', component: AtributsBinding },
  { path: '/computed-property', component: ComputedProperty },
  { path: '/conditional-rendering', component: ConditionalRendering },
  { path: '/declarative-rendering', component: DeclarativeRendering },
  { path: '/event-listeners', component: EventListeners },
  { path: '/from-bindings', component: FromBindings },
  { path: '/lifecycle-hook', component: LifecycleHook },
  { path: '/list-rendering', component: ListRendering },
  { path: '/watchers', component: Watchers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
