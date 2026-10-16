// ===== Ronch Trace · settings =====
// Same Firebase project as Ronch CRM (ronch-crm), so both apps share one
// database and one set of logins. Trace uses its own tr_* collections and
// reads the CRM's work orders (pf_wos) to link MI Line scans to a WO.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBK8qoz7QZlG7kSnjYiZxBGFFlW9B6Nj0M",
  authDomain: "ronch-crm.firebaseapp.com",
  projectId: "ronch-crm",
  storageBucket: "ronch-crm.firebasestorage.app",
  messagingSenderId: "253604041643",
  appId: "1:253604041643:web:56d234059c22eb5f5978ee"
};

window.APP_SETTINGS = {
  // Station PCs sign in as <name>@<loginDomain> — the same users as the CRM:
  //   production@   quality@   admin@
  loginDomain: "ronch-floor.app",

  // Accounts offered on the sign-in screen, in order.
  stationLogins: ["production", "quality", "admin"],

  // Prefix for this app's Firestore collections. Leave as "tr_".
  prefix: "tr_"
};
