import * as AppConfig from '@AppConfig';
var encodeUrl = require('encodeurl')

export const fetchDataFromServer = (URL, methodType, postData, authToken) => {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.timeout = 10000; // time in milliseconds
           // get encoded form of inbound url
         var url = encodeUrl(URL)
        xhr.open(methodType, url);
        xhr.setRequestHeader("cache-control", "no-cache");
        if (authToken) {
            xhr.setRequestHeader("authorization", authToken);
        }
    
      
        console.log('xhr ' + url)
        console.log('xhr authToken == ' + authToken)
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log('xhr Result ' + xhr.response);
                resolve(xhr.response);
            }else if(xhr.status == 401){
                reject(AppConfig.API_UNAUTHORIZED);
            } else {
                console.log('xhr error ' + JSON.stringify(xhr._response));
                if (xhr.statusText) {
                    reject(xhr.statusText)
                }else if(xhr._response){
                    reject(xhr._response);
                } else {
                    reject(AppConfig.API_ERROR);
                }
            }
        };
        xhr.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            reject(AppConfig.API_ERROR);
       };
        // Handle network errors
        xhr.onerror = function () {
            //console.log('xhr.onerror' + JSON.stringify(xhr))
            if(xhr.status === 0){
                reject(AppConfig.NO_INTERNET);
            }else{
                reject(AppConfig.API_ERROR);
            }
         
        };

        if (postData) {
            let formdata = new FormData();
            for (let key in postData) {
                formdata.append(key, postData[key]);
            }
           console.log('xhr Data' + JSON.stringify(formdata));
            xhr.send(formdata);
        } else {
            xhr.send();
        }

    });
}