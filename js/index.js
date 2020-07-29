window.onload = () =>{
    var firebaseConfig = {
        apiKey: "AIzaSyCUnRezxIt_x7UzHgAmrmGvLfytms7hQBc",
        authDomain: "sneaker-store-54721.firebaseapp.com",
        databaseURL: "https://sneaker-store-54721.firebaseio.com",
        projectId: "sneaker-store-54721",
        storageBucket: "sneaker-store-54721.appspot.com",
        messagingSenderId: "556876670312",
        appId: "1:556876670312:web:8c37d9b77a95395cb0a2dd"
      };
    firebase.initializeApp(firebaseConfig);
    // firebase.auth().onAuthStateChanged((user) => {
    //     // console.log(user)
    //     if(user) {
    //       if (user.emailVerified) {
    //         model.currentUser = {
    //           displayName: user.displayName,
    //           email: user.email
    //         }
    //         view.setActiveScreen('home')
    //       } else {
    //         view.setActiveScreen('home')
    //         // alert('Please verify your email')
    //       }
    //     } else {
    //       view.setActiveScreen('home')
    //     }
    //   })
      // templateQueryDataBase();
      view.setActiveScreen(`home`);
}
templateQueryDataBase = () =>{
      firebase.firestore().collection(model.collectionName).get().then(res => {
      const data = utils.getDataFromDocs(res.docs)
      model.sneakers = data;
      if (data.length > 0) {
        model.currentSneaker = data[0]
        // view.showCurrentConversation();
      }
      view.showSneakers(data);
    })
}
templateQueryDataBase1 = () =>{
//   firebase.firestore().collection(model.collectionName).get().then(res => {
//   const data = utils.getDataFromDocs(res.docs)
//   model.sneakers = data;
//   if (data.length > 0) {
//     model.currentSneaker = data[0]
//     // view.showCurrentConversation();
//   }
//   view.find(data);
//   // view.setActiveScreen(`searchScreen`);
//   // view.showInfoSneakers();
// })
}
templateQueryDataBase2 = (name) =>{
  firebase.firestore().collection(model.collectionName).get().then(res => {
  const data = utils.getDataFromDocs(res.docs)
  model.sneakers = data;
  if (data.length > 0) {
    model.currentSneaker = data[0]
    // view.showCurrentConversation();
  }
  // view.find(data);
  // view.setActiveScreen(`searchScreen`);
  view.showInfo(name, data);
  console.log(name);
})
}
templateQueryDataBase3 = (id) =>{
  firebase.firestore().collection(model.collectionName).get().then(res => {
  const data = utils.getDataFromDocs(res.docs)
  model.sneakers = data;
  if (data.length > 0) {
    model.currentSneaker = data[0]
    // view.showCurrentConversation();
  }
  view.showFormBrand(data, id);
})
}

