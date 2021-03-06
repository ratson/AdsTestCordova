/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);


    // Admob App IDS 
    // Android APP ID: ca-app-pub-5844412397685765~4004478982
    // iOS APP ID:     ca-app-pub-5844412397685765~9280856394

    // Reward Units
    // Android Reward Unit: ca-app-pub-5844412397685765/2163965468
    // iOS Reward Unit:     ca-app-pub-5844412397685765/2734811102

    // TEST UNITS
    // Android: ca-app-pub-3940256099942544/5224354917
    // ioS: ca-app-pub-3940256099942544/1712485313

    // PRE LOAD THE AD
    admob.setDevMode(true); // This variable does nothing until the app goes into production.

    admob.rewardVideo.load({
        id: {
          // replace with your ad unit IDs
          android: 'ca-app-pub-5844412397685765/2163965468',
          ios: 'ca-app-pub-3940256099942544/1712485313'
        }
    });
}


// ADS
document.addEventListener('admob.reward_video.load', () => {
    alert("Ad: load");
});

document.addEventListener('admob.reward_video.load_fail', () => {
    alert("Ad: load_fail");
});

document.addEventListener('admob.reward_video.open', () => {
    alert("Ad: open");
});

document.addEventListener('admob.reward_video.close', () => {
    alert("Ad: close");
});

document.addEventListener('admob.reward_video.start', () => {
    alert("Ad: start");
});

document.addEventListener('admob.reward_video.complete', () => {
    alert("Ad: complete");
});

document.addEventListener('admob.reward_video.reward', () => {
    alert("Ad: reward");
});

document.addEventListener('admob.reward_video.exit_app', () => {
    alert("Ad: exit_app");
});


document.getElementById('on_ad_click').onclick = function(){
    alert('clicked for ad');

    admob.rewardVideo.show();
}
