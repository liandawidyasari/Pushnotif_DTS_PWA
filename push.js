var webPush = require('web-Push');

const vapidKeys = {
    "publiKey": "<BLYuC3f91LDRsXLPYl5FHfqUyqhH0XGCT7WmfsY1uxjEEMDvrpPlcpq3i8qcvZZXp8w7ndaNSVQ2nbBK6FcgqeI>",
    "privateKey": "<cHCToU6zGzekDeIQbsLzB1GBGcjreUCY4cU_NBLjF4M>"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org', 
    vapidKeys.publiKey,
    vapideys.provateKey
)
var pushSubscription = {
    "endpoint": "<Endpoint URL>",
    "keys": {
        "p256dh": "<p256dh Key>",
        "auth": "<Auth key>"
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