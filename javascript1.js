const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);

const themeStore = useThemeStore();
if(themeStore.theme){
  const bodyElement = document.body;
  bodyElement.setAttribute('data-bs-theme', themeStore.theme)
}
