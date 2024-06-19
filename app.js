console.log("Carregando configuração do Firebase...");

const firebaseConfig = {
  apiKey: "AIzaSyDsi3quAxlYIL4HKpijhj8e0qCclPXPuVo",
  authDomain: "github-c0ac9.firebaseapp.com",
  databaseURL: "https://github-c0ac9-default-rtdb.firebaseio.com",
  projectId: "github-c0ac9",
  storageBucket: "github-c0ac9.appspot.com",
  messagingSenderId: "886174193200",
  appId: "1:886174193200:web:3b831982fdd395b301fff5",
  measurementId: "G-C3Q3NWY5JS"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase inicializado"); // Debug após a inicialização
} else {
  firebase.app(); // if already initialized, use that one
}

console.log("Firebase carregado");
