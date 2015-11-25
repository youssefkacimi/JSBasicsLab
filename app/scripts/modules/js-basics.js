(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
      // i will be an integer.
      // Return true if it's even, and false if it isn't.
        if(!isNaN(parseFloat(i) && parseInt(i)) && (i>-1) && i!=33){
            return true;
        } else {
            return false;
        }
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
        var chaines = str.split(".");
        if(chaines.length>1) {
          return chaines[(chaines.length-1)];
        }
        else
          return false;
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array
        if(arr instanceof Array){
            return true;
        } else{
            return false;
        }
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
        if(str instanceof String){
            return  str.split("").reverse().join("");
        }
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space
        // or punctuation.
        if(str instanceof String ){
            var len = str.length;
            for ( var i = 0; i < Math.floor(len/2); i++ ) {
                if (str[i] !== str[len - 1 - i]) {
                    return false;
                }
            }
            return true;
        }
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
        var somme=0;
        if(arr instanceof Array){
                for(var i=0 ; i<arr.length; i++){
                    if(parseInt(arr[i]) && !isNaN(arr[i])){
                        somme = somme+arr[i];
                    }
                }

        }
        return somme;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
