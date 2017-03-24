(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteServer(url){
    if (!url) {
            throw new Error('No remote url supplied.');
        }
        this.serverUrl = url;
  }

  RemoteServer.prototype.getAll = function(cb){

      return $.get(this.serverUrl, function (serverResponse){
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
    };

    RemoteServer.prototype.getQuestion = function(key) {
        var questionnireResult= $.get(this.serverUrl, function (res) {
            console.log(res);
        });
        questionnireResult.forEach(function(key){
          console.log(qa[key].question);

        });

    };
App.RemoteServer = RemoteServer;
window.App = App;
})(window);
