module.exports = {
    name: "Infinity Home Solutions LLC",
    email: "christina@infinityhomesolutionsllc.com",
    phoneForTel: "(866)705-8388",
    phoneFormatted: "(866)705-8388",
    address: {
        lineOne: "14350 Eureka Rd",
        lineTwo: "",
        city: "Southgate",
        state: "MI",
        zip: "48195",
        country: "US",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790071.09188617!2d-91.55337122721576!3d44.87892162525881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4caa3dc7ca0411%3A0x97dd48597a62c9b3!2sMichigan!5e0!3m2!1sen!2sus!4v1757533078489!5m2!1sen!2sus",
    },
    socials: {
        facebook: "https://www.facebook.com/Providencemichigan/",
        instagram: "https://www.instagram.com/providencemichigan/",
        google: "https://g.co/kgs/n4aSPHz",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://infinityhomesolutionsllc.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
