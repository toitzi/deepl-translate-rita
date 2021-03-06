/**
 *
 * Source: https://support.deepl.com/hc/en-us/articles/360019925219-Languages-included-in-DeepL-Pro
 *
 * The languages that DeepL Translate supports (as of 5/15/16) alongside with their ISO 639-1 codes
 * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */

const langs = {
    auto: 'Automatic',
    bg: 'Bulgarian',
    zh: 'Chinese',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    et: 'Estonian',
    fi: 'Finnish',
    fr: 'French',
    de: 'German',
    el: 'Greek',
    hu: 'Hungarian',
    it: 'Italian',
    ja: 'Japanese',
    lv: 'Latvian',
    lt: 'Lithuanian',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    es: 'Spanish',
    sv: 'Swedish',
};

/**
 * Returns the ISO 639-1 code of the desiredLang – if it is supported by DeepL
 * @param {string} desiredLang – the name or the code(case sensitive) of the desired language
 * @returns {string|boolean} The ISO 639-1 code of the language or false if the language is not supported
 */
function getCode(desiredLang) {
    if (!desiredLang) {
        return false;
    }

    if (langs[desiredLang]) {
        return desiredLang;
    }

    const key = Object.keys(langs).find(key => langs[key]?.toString()?.toLowerCase() === desiredLang.toLowerCase());

    return key || false;
}

/**
 * Returns true if the desiredLang is supported by DeepL Translate and false otherwise
 * @param desiredLang – the ISO 639-1 code or the name of the desired language
 * @returns {boolean}
 */
function isSupported(desiredLang) {
    return Boolean(getCode(desiredLang));
}

module.exports = langs;
module.exports.isSupported = isSupported;
module.exports.getCode = getCode;
