function checkSecurly() {
    fetch("clients2.google.com/service/update2/crx?response=redirect&os=cros&arch=x86-64&os_arch=x86-64&nacl_arch=x86-64&prod=chromiumcrx&prodchannel=unknown&prodversion=121.0.6167.212&acceptformat=crx2,crx3&x=id%3Diheobagjkfklnlikgihanlhcddjoihkg%26uc")
        .then(() => {
            alert("Securly is installed and detected (Bad)");
        })
        .catch(() => {
            alert("Securly not installed and not detected (Which is a good thing)");
        });
}

function tabName() {
    var name = document.getElementById("#tabname").value
    document.title = name
}

function tabName2() {
    var name2 = prompt("Tab name changer", placeholder="Name goes here")
    document.title = name2
}

function tabIcon() {
    var icon = document.getElementById("tabicon").value
    document.getElementById("favicon").href = icon
}

var tabpresets = {
    google: {
        name: "Google",
        icon: "/testing123/assets/images/google.ico"
    },
    docs: {
        name: "Google Docs",
        icon: "/testing123/assets/images/docs.ico"
    },
    drive: {
        name: "Home - Google Drive",
        icon: "/testing123/assets/images/drive.png" 
    },
    classroom: {
        name: "Home",
        icon: "/testing123/assets/images/classroom.png"
    },
    artclass: {
        name: "Art Class",
        icon: "/testing123/assets/images/artclass.png"
    },
    ubhtps: {
        name: "UnblockedGamesHTPS",
        icon: "/testing123/assets/images/favicon.png"
    },
    original: {
        name: "New Tab",
        icon: "/testing123/assets/images/newtab.png"
    },
}

    function tabPreset(preset) {
        var name = tabpresets[preset].name;
        var icon = tabpresets[preset].icon;

        document.title = name;
        document.getElementById("tabicon").value = document.getElementById("favicon").href = icon;
    }

function m1() {
    var cauDNS = window.open("https://2ledev.github.io/cauDNS", "_blank");
    cauDNS.focus();
}

function m2() {
    var chromenetwrk = window.open("chrome://network", "_blank");
    if (chromenetwrk) chromenetwrk.focus();
}

function abtblank() {
  javascript: (function() {
    var url = prompt("MADE BY UNBLOCKEDGAMESHTPS (Make sure you have popups enabled)", "https://");
    var urlObj = new window.URL(window.location.href);
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url.toString();
    win.document.body.appendChild(iframe);
    var script = win.document.createElement("script");
    script.src = "https://3kh0.github.io/js/main.js";
    win.document.body.appendChild(script);
})();
}

function fentmax() {
    let newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document.write(<script src="https://cdn.jsdelivr.net/gh/dragon731012/caudns/jszip.js' defer></script> <script src='https://cdn.jsdelivr.net/gh/dragon731012/caudns/filesaver.js' defer></script> <script src='https://caudns.vercel.app/main.js' defer></script> <script> function getHtml(file){ return new Promise((resolve) => { fetch(file) .then((response) => { return response.text(); }) .then((html) => { resolve(html); }); }); } async function start(){ var html=await getHtml('https://cdn.jsdelivr.net/gh/dragon731012/caudns/data.txt'); html=html.toString(); console.log(html); document.body.innerHTML=html; } start(); </script>");
      newWindow.document.close();
    } else {
      alert('Please allow pop-ups for this site to open the unblocked games.');
    }
}
