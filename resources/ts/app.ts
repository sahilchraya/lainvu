import "../css/app.css";
import { createApp, h } from "vue";
import { Link, createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    resolve: async (name) => {
        let page = null;
        const splitName = name.split("/");
        if (splitName.length === 1) {
            return (page = (await import(`../views/Pages/${splitName[0]}.vue`))
                .default);
        }
        if (splitName.length === 2) {
            return (page = (
                await import(
                    `../views/Pages/${splitName[0]}/${splitName[1]}.vue`
                )
            ).default);
        }
        if (splitName.length === 3) {
            return (page = (
                await import(
                    `../views/Pages/${splitName[0]}/${splitName[1]}/${splitName[2]}.vue`
                )
            ).default);
        }
        if (splitName.length === 4) {
            return (page = (
                await import(
                    `../views/Pages/${splitName[0]}/${splitName[1]}/${splitName[2]}/${splitName[3]}.vue`
                )
            ).default);
        }
        if (splitName.length === 5) {
            return (page = (
                await import(
                    `../views/Pages/${splitName[0]}/${splitName[1]}/${splitName[2]}/${splitName[3]}/${splitName[4]}.vue`
                )
            ).default);
        }
        return page;
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .component("Link", Link)
            //TODO Link is now registered globally, To add more components, just add them here.
            .mount(el);
    },
});
InertiaProgress.init({
    color: "red",
    includeCSS: true,
    showSpinner: true,
});
