var apn = require('apn');
 
var token = "0d4a70e9cefda4209d183b50581191978d4950b051abfbf770ca0c864bc6fe5a";
var device = new apn.Device(token);
 
var notification = new apn.Notification();
notification.expiry = Math.floor(Date.now() / 1000) + 3600;
notification.badge = 3;
notification.alert = "Now this is also important notification.";
notification.payload = {'prop': 'special value'};
notification.device = device;
 
var options = {
 gateway: 'gateway.sandbox.push.apple.com',
 cert: 'assets/PushNotificationsCer.pem',
 key: 'assets/PushNotificationsKey.pem',
 passphrase: 'ferrari1234'
}
var apnsConnection = new apn.Connection(options);
apnsConnection.pushNotification(notification, device);