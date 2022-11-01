function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
    
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
    document.getElementById('icona-tema').classList.remove("bxs-sun");
    document.getElementById('icona-tema').classList.add("bxs-moon");
} else {
    setTheme('theme-dark');
    document.getElementById('icona-tema').classList.remove("bxs-moon");
    document.getElementById('icona-tema').classList.add("bxs-sun");
}
}
    
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
    
    })();$(document).ready(function(){
    $(".menu").click(function(){
        $(".menu-list").toggleClass("active");
    });
});

$(document).ready(function(){ 
    $(".cm").click(function(){
        $(this).children().toggleClass("selected");
    });
});

/* FAQ */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});

/* MENU A DISCESA UTENTE */
$(document).ready(function(){ 
    $(".user img").click(function(){
        $(".shortcut").toggleClass("visible");
        $(".user-key").toggleClass("changeback");
    });
});

/* MENU PROFILO ANIMAZIONE */
$(document).ready(function(){ 
    $(".bxs-grid").click(function(){
        $("#mUser").removeClass("fadeout");
        $("#mUser").addClass("fadein");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $(".bx-x-circle").click(function(){
        $("#mUser").removeClass("fadein");
        $("#mUser").addClass("fadeout");
        $(".shortcut").removeClass("visible");
        $(".user-key").removeClass("changeback");
        enableScroll();
    });
});

/* POP UP */
const popup = document.querySelector("#popup");

if($('body').is('.sceltamatch')){
    window.onload = function(){
        /* forzatura scroll all'inizio */
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        $("#popup").addClass("show");
        $("#blur-match").addClass("blur");
        disableScroll();
    };
}

$(document).ready(function(){ 
    $("#close-pop").click(function(){
        $("#popup").removeClass("show");
        $("#blur-match").removeClass("blur");
        enableScroll();
    });
});

/* POP UP DISISCRIVITI */
$(document).ready(function(){ 
    $(".button-dis").click(function(){
        $("#popupdis").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $("#close-dis").click(function(){
        $("#popupdis").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

/* POP UP BUDGET */
$(document).ready(function(){ 
    $(".insertIn").click(function(){
        $("#popBudget").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $(".btn-popBudg").click(function(){
        $("#popBudget").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

/* MOSTRARE E NASCONDERE SALDO */
function changeIcon(anchor) {
    var icon = anchor.querySelector("#faPlus");
    icon.classList.toggle("bx-show");
    icon.classList.toggle("bx-hide");
    anchor.querySelector("#valoreSaldo").textContent = icon.matches('.bx-show') ? "****" : anchor.querySelector("#valoreSaldo").dataset.text;
}

/* VISUALIZZA BARRA "MODIFICA - RIMUOVI" PAGINA HISTORY */
$(document).ready(function(){ 
    $(".partitaHistory").click(function(){
        $(this).find("div#options").toggleClass("flex");
    });
});

/* POP UP AGGIUNGI BUDGET */
$(document).ready(function(){ 
    $("#addBudget-icon").click(function(){
        $("#popAdd").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $(".btn-popAdd").click(function(){
        $("#popAdd").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

// STOP AND GO SCROLL SCREEN
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

/* CHANGE ICON BELL */
function changeIconBell (iconID){
    if(document.getElementById(iconID).className=="bx bx-bell"){
        document.getElementById(iconID).className = "bx bxs-bell-ring";
    }else{
        document.getElementById(iconID).className = "bx bx-bell";
    }
}

/* CONTROLLO GOOGLE APPLE PAY */
(function (window) {
{
    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // Legacy Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
        browser = 'Microsoft Legacy Edge';
        version = nAgt.substring(verOffset + 5);
    } 
    // Edge (Chromium)
    else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 4);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [
        {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows Vista', r:/Windows NT 6.0/},
        {s:'Windows Server 2003', r:/Windows NT 5.2/},
        {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows 98', r:/(Windows 98|Win98)/},
        {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows CE', r:/Windows CE/},
        {s:'Windows 3.11', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Open BSD', r:/OpenBSD/},
        {s:'Sun OS', r:/SunOS/},
        {s:'Chrome OS', r:/CrOS/},
        {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'QNX', r:/QNX/},
        {s:'UNIX', r:/UNIX/},
        {s:'BeOS', r:/BeOS/},
        {s:'OS/2', r:/OS\/2/},
        {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Windows':
        case 'Android':
            document.getElementById("icon-pay").className = "bx bxl-google";
            break;

        case 'Mac OS':
        case 'Mac OS X':
        case 'iOS':
            document.getElementById("icon-pay").className = "bx bxl-apple";

            break;
    } 

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
    var flashVersion = 'no check';
    if (typeof swfobject != 'undefined') {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
        }
        else  {
            flashVersion = unknown;
        }
    }
}

window.jscd = {
    screen: screenSize,
    browser: browser,
    browserVersion: version,
    browserMajorVersion: majorVersion,
    mobile: mobile,
    os: os,
    osVersion: osVersion,
    cookies: cookieEnabled,
    flashVersion: flashVersion
};
}(this));

/*alert(
'OS: ' + jscd.os +' '+ jscd.osVersion + '\n' +
'Browser: ' + jscd.browser +' '+ jscd.browserMajorVersion +
    ' (' + jscd.browserVersion + ')\n' + 
'Mobile: ' + jscd.mobile + '\n' +
'Flash: ' + jscd.flashVersion + '\n' +
'Cookies: ' + jscd.cookies + '\n' +
'Screen Size: ' + jscd.screen + '\n\n' +
'Full User Agent: ' + navigator.userAgent
);*/