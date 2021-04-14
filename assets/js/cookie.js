"use strict";

var cookie_popup_html = `
<div id="cookie-popup">
  <div class="cookie-popup__c-p-card cookie-popup__card">
    <div class="cookie-popup__c-p-close cookie-popup--close"></div>
    <div class="cookie-popup__content">
      <h3 class="white">Your privacy and our use of cookies:</h3>
      <p class="white">We use cookies on our site, which may be tracked to improve your experience and manage our marketing/analytics. To  accept cookies, and continue viewing this website, please click ACCEPT.</p>
      <button class="cookie-popup__c-p-button">Accept</button>
    </div>
  </div>
</div>
`;

var cookie_popup_css = document.createElement("style");
cookie_popup_css.innerHTML = `
#cookie-popup {
  position: fixed;
  width: 100%;
  bottom: 0vh;
}

#cookie-popup .cookie-popup__card {
  background: #1850A3;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 285px;
  line-height: 1.5;
}

#cookie-popup .cookie-popup--closed {
  -webkit-animation: cookie-popup--close 0.4s ease-in-out forwards;
          animation: cookie-popup--close 0.4s ease-in-out forwards;
}

#cookie-popup .cookie-popup--opened {
  -webkit-animation: cookie-popup--open 0.4s ease-in-out forwards;
          animation: cookie-popup--open 0.4s ease-in-out forwards;
}

#cookie-popup .cookie-popup__content {
  max-width: 80%;
  margin: auto;
}

#cookie-popup p {
  font-size: 14px;
  margin: 20px 0;
  line-height: 1.5;
}

#cookie-popup .cookie-popup--close:after {
  color: #fff;
  content: "X";
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: 0.8em ;
  top: 0.5em;
  -webkit-transform: scaleX(1.25);
          transform: scaleX(1.25);
  transition: color 0.3s ease;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

@keyframes cookie-popup--close {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  20% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
}

@keyframes cookie-popup__open {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  80% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`;

function SetCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function GetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function CheckCookie() {
    var cookie_popup_visited=GetCookie("cookie_pop_visited");
    if (cookie_popup_visited != "") {
      console.log("Cookie popup visited: " + cookie_popup_visited);
    } else {
      setTimeout(function () {
        
        var cookie_popup_span = document.createElement('span');
        cookie_popup_span.innerHTML = cookie_popup_html;
        document.body.appendChild(cookie_popup_span);
        document.body.appendChild(cookie_popup_css);
                    
        var close = document.getElementsByClassName('cookie-popup__c-p-close')[0];
        var card = document.getElementsByClassName('cookie-popup__c-p-card')[0];
        var button = document.getElementsByClassName('cookie-popup__c-p-button')[0];

        card.classList.add('cookie-popup--opened');
        card.classList.remove('cookie-popup--closed');

        card.addEventListener('click', function (e) {
          if (e.target === close | e.target === button) {
            card.classList.remove('cookie-popup--opened');
            card.classList.add('cookie-popup--closed');
            document.getElementById('cookie-popup').remove();
            SetCookie("cookie_pop_visited", true, 365);
          }
        });
      }, 1000);
    }
};

setTimeout(function () {
  CheckCookie();
}, 1000); // 1 sec