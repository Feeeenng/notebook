var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+proxy", {
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^[^:]+:\/\/localhost:8000\/#\/cost\/rule\//.test(url) || /^172\.17\..*\./.test(host) || /\.njxtc\.com$/.test(host) || /^10\.10\..*\./.test(host) || /^dockerhub\.kubekey\.local$/.test(host) || /\.yuque\.com$/.test(host) || /\.apifox\.com$/.test(host) || /^202\.195\./.test(host) || /^[^:]+:\/\/productpage\.demo-pj\.172\.20\.10\.21\.nip\.io:32464\/\//.test(url) || /^login\.hpc\.nuist\.edu\.cn$/.test(host) || /\.zhihu\.com$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:10808";
    }
});