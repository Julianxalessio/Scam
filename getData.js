let platformData = {
    name: platform.name,
    version: platform.version,
    layout: platform.layout,
    os: platform.os,
    description: platform.description
};
let templateParams = {};
let dateNow = new Date();

emailjs.init("zM45sD-mfpvGvAZ_v"); // Ersetze mit deinem Public Key von emailjs.com
let EMAILJS_SERVICE_ID = "service_sas30ng";
let EMAILJS_TEMPLATE_ID_MAIN = "template_kriko7m";

fetch('https://ipapi.co/json/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        templateParams = {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            country_name: data.country_name,
            platform_name: platformData.name,
            platform_version: platformData.version,
            platform_layout: platformData.layout,
            platform_os: platformData.os.toString(),
            platform_description: platformData.description,
            date: dateNow.toString()
        };
        try {
            const response = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_MAIN, templateParams);
        } catch (error) {
            console.error("EmailJS error:", error);
        }
    })
    .catch(function (error) {
        console.error('Error fetching IP data:', error);
    });