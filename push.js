var webPush = require('web-Push');

const vapidKeys = {
    publiKey: "BLYuC3f91LDRsXLPYl5FHfqUyqhH0XGCT7WmfsY1uxjEEMDvrpPlcpq3i8qcvZZXp8w7ndaNSVQ2nbBK6FcgqeI",
    privateKey: "cHCToU6zGzekDeIQbsLzB1GBGcjreUCY4cU_NBLjF4M"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org', 
    vapidKeys.publiKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    endpoint: " https://fcm.googleapis.com/fcm/send/e8i_wOHduNI:APA91bG_jkGfuVB6UKp7g3MzY-Fz7mbxAf4HLcoM2J4ELV-R1QLvbET8iaVBf-PPhRERNicWqHgIeeGUBRNr8bHdCThzpWNs_mwWYtu6H36olMbs4Yo_BnIyEDyEu0pNpWNwhGyZeMab",
    keys: {
        p256dh: "BDFaCSNbR7w3sv0n1byUkX3zvLZ1lkAp3nMFwi7HesM2xlbz0wJGUO00MdMJ9WZHs8AX4ByikLkpTa8Kwp6hnCE=",
        auth: "9+ho9GtNebXIslK2GwHXMQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notif';
var options = {
    gcmAPIKey: '264201151654',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);