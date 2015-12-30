/*
 * 存储工具类
 * jQuery 工具插件
 */
/**********************************************************************************
 * USAGE EXAMPLES:
 **********************************************************************************
 *  $.storage.get( key );     // get a value
 *  $.storage.set( key, value );  // saves a value
 *  $.storage.del( key );     // deletes key by value
 *  $.storage.flush();        // deletes all values
 **********************************************************************************
 */
(function($, undefined){
  $.storage = {
    available: function(){
      try {
        // Firefox won't allow localStorage if cookies are disabled
        if (!!window.localStorage) {
          // Safari's "Private" mode throws a QUOTA_EXCEEDED_ERR on setItem
          window.localStorage.setItem("jQuery Store Availability test", true);
          window.localStorage.removeItem("jQuery Store Availability test");
          return true;
        }
        return false;
      }
      catch (e) {
        return false;
      }
    },
    init: function(){
    },
    get: function(key){
      return window.localStorage.getItem(key);
    },
    set: function(key, value){
      window.localStorage.setItem(key, value);
    },
    del: function(key){
      window.localStorage.removeItem(key);
    },
    flush: function(){
      window.localStorage.clear();
    }
  };

})($);
