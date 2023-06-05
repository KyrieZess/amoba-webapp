import Vue from 'vue'
import VueI18n from 'vue-i18n'

import hu from "./HU"

Vue.use(VueI18n)

const dictionaries = {
    hu: hu,
};

const fallbackLocales = {
    hu: ["hu", "HUN", "hu-HU", "hu-hu", "hu-HUN"],
};

function getLocale() {
    var browseLocale = "hu";

    Object.entries(fallbackLocales).forEach(([loc, fallbackLocs]) => {
        if (
            fallbackLocs.includes(navigator.language || navigator.userLanguage)
        ) {
            browseLocale = loc;
        }
    });
    return browseLocale;
}

const i18n = new VueI18n({
    locale: getLocale(),
    messages: dictionaries,
});

export default i18n;