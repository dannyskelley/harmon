module.exports = {
    name: "Providence Properties, Realty & Management",
    email: "Victoria@providencemichigan.com",
    phoneForTel: "833 776-6348",
    phoneFormatted: "833 776-6348",
    address: {
        lineOne: "14350 Eureka Rd",
        lineTwo: "",
        city: "Southgate",
        state: "MI",
        zip: "48195",
        country: "US",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.699858071792!2d-83.1980291!3d42.1994846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b377a875bcc87%3A0x7aee19f28e9c0be3!2sProvidence%20Properties%2C%20Realty%20%26%20Management!5e0!3m2!1sen!2sus!4v1750338203909!5m2!1sen!2sus",
    },
    socials: {
        facebook: "https://www.facebook.com/Providencemichigan/",
        instagram: "https://www.instagram.com/providencemichigan/",
        google: "https://g.co/kgs/n4aSPHz",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
