import CryptoJS from "crypto-js";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Encryption = (data) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        process.env.REACT_APP_SECRET_KEY
    ).toString();
};

export const Decryption = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);

    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        return []
    }
};
export const openInNewTab = (URL) => {
    const newWindow = window.open(URL, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
export const logout = (e) => {
    if(e) e.preventDefault();
    // eslint-disable-next-line
    document.cookie = "SundanceNewUser" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    cookies.remove("SundanceNewUser", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    cookies.remove("sd_prev", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    cookies.remove("CartCount", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    cookies.remove("sd_screening", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});

     let Zone = localStorage.getItem('TIMEZONE')
    localStorage.clear();
    if(Zone) localStorage.setItem('TIMEZONE' , Zone)
    window.open(process.env.REACT_APP_HOME_URL + "sign-in", "_self");
}
export const logoutWithPrev = (e) => {
    if(e) e.preventDefault();
    // eslint-disable-next-line
    document.cookie = "SundanceNewUser" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    cookies.remove("SundanceNewUser", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    cookies.remove("CartCount", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    cookies.remove("sd_screening", {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});

     let Zone = localStorage.getItem('TIMEZONE')
    localStorage.clear();
    if(Zone) localStorage.setItem('TIMEZONE' , Zone)
    cookies.set("sd_prev", window.location.href, {domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/",});
    window.open(process.env.REACT_APP_HOME_URL + "sign-in", "_self");
}