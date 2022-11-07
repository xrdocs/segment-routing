console.log("reached cookie-consent", window.cookieconsent);
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#149ed9"
    }
  },
  "type": "opt-in",
  onInitialise: function(status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    console.log("onInitialise ", type, " ", didConsent);
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      deleteAllCookies();
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    console.log("onStatusChange ", type, " ", didConsent);
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      deleteAllCookies();
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    console.log("onRevokeChoice ", type);
    if (type == 'opt-in') {
      // disable cookies
      deleteAllCookies();
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAonConsent();
    }
  }
});
