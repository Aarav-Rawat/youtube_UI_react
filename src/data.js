export const viewsConverter = (views) => {
     if (views >= 1000000000) {
        return Math.floor(views / 1000000000) + 'Arab';
    } 
    else if (views >= 10000000) {
        return Math.floor(views / 10000000) + 'Crore';
    } 
    else if (views >= 100000) {
        return Math.floor(views / 100000) + 'Lakh';
    } 
    else if (views >= 1000) {
        return Math.floor(views / 1000) + 'Hazar';
    }
    else {
        return views;
    }
};

export const API_KEY_URL = "AIzaSyAch7F7bldGTgFu2GV9Y-rEEk4sZi5VqKI";