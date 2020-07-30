const model = {}
model.currentUser = undefined;
model.collectionName = `sneakers`;
model.currentSneaker = undefined;
model.sneakers = undefined;
model.register = (firstName, lastName, email, password) =>{
firebase.auth().createUserWithEmailAndPassword(email, password).then((user) =>{
        console.log(user);
        firebase.auth().currentUser.sendEmailVerification();
        firebase.auth().currentUser.updateProfile({
            displayName: firstName + `` + lastName
        })
        view.setActiveScreen(`loginScreen`);
        alert(`Register success`);
    }).catch((err) => {
        alert(err.message);
    })
}
model.createUser = (email, name) =>{
    let user = {email, name}
     firebase.firestore().collection(`cart`).add(user).then(res =>{
        alert(`Added!`);
    })
}
model.login = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) =>{
        console.log(user);
        if(user.user.emailVerified){
            model.currentUser = {
                displayName: user.user.displayName,
                email: user.user.email,
            }
            view.setActiveScreen(`home`);
        }else alert(`Please verify your email`);
    }).catch((error) =>{}) 
}

model.loadSneakers = () => {
    templateQueryDataBase();
}
model.find = () =>{
    firebase.firestore().collection(model.collectionName).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        model.sneakers = data;
        if (data.length > 0) {
          model.currentSneaker = data[0]
          // view.showCurrentConversation();
        }
        view.find(data);
        // view.setActiveScreen(`searchScreen`);
        // view.showInfoSneakers();
      })
}
model.infoSneaker = (name) =>{
    templateQueryDataBase2(name);
}
model.showFormBrand = (id) =>{
    templateQueryDataBase3(id);
}
model.addHang = (user) =>{ 
      firebase.firestore().collection(`cart`).doc(`cc5XcxAbTTRv5DZfAqFn`).update(user).then(res =>{
        alert(`Thêm vào giỏ hàng thành công`);
    })
}
model.thanhtoan = (id, soLuong, size) =>{
    firebase.firestore().collection(model.collectionName).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        model.sneakers = data;
        if (data.length > 0) {
          model.currentSneaker = data[0]
          // view.showCurrentConversation();
        }
        view.thanhtoan(data, id, soLuong, size);
        // view.setActiveScreen(`searchScreen`);
        // view.showInfoSneakers();
      })
}
model.xacnhan = () =>{
    view.setActiveScreen(`finishScreen`);
}
