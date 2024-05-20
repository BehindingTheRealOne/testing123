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
        icon: "/assets/images/google.ico"
    },
    docs: {
        name: "Google Docs",
        icon: "/assets/images/docs.ico"
    },
    drive: {
        name: "Home - Google Drive",
        icon: "/assets/images/drive.png" 
    },
    classroom: {
        name: "Home",
        icon: "/assets/images/classroom.png"
    },
    artclass: {
        name: "Art Class",
        icon: "/assets/images/artclass.png"
    },
    ubhtps: {
        name: "UnblockedGamesHTPS",
        icon: "/assets/images/favicon.png"
    },
    original: {
        name: "New Tab",
        icon: "/assets/images/newtab.png"
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
