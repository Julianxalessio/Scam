fetch('https://ipapi.co/json/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        dataNew = data;
    });
console.log(dataNew);

let platformData = {
    name: platform.name,
    version: platform.version,
    layout: platform.layout,
    os: platform.os,
    description: platform.description
};

let dateNow = new Date();

emailjs.init("zM45sD-mfpvGvAZ_v"); // Ersetze mit deinem Public Key von emailjs.com
const EMAILJS_SERVICE_ID = "service_sas30ng";
const EMAILJS_TEMPLATE_ID = "template_kriko7m";

const templateParams = {
    ip: dataNew.ip,
    city: dataNew.city,
    region: dataNew.region,
    country: dataNew.country,
    country_name: dataNew.country_name,
    platform_name: platformData.name,
    platform_version: platformData.version,
    platform_layout: platformData.layout,
    platform_os: platformData.os.toString(),
    platform_description: platformData.description,
    date: dateNow.toString()
};
try {
    const response = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
} catch (error) {
    console.error("EmailJS error:", error);
}