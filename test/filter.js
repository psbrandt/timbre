tests = (function() {
    "use strict";
    
    var i = 0, tests = [];
    
    tests[i] = function() {
        return T("audio", "/public/audio/sample.ogg", true).load();
    }; tests[i++].desc = "audio source";
    
    tests[i] = function() {
        var synth = T("filter");
        synth.onplay = function() {
            synth.args[0] = s[0].clone();
        };
        return synth;
    }; tests[i++].desc = "filter";
    
    return tests;
}());
