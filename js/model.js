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
    templateQueryDataBase1();
}
model.infoSneaker = (name) =>{
    templateQueryDataBase2(name);
}
model.showFormBrand = (id) =>{
    templateQueryDataBase3(id);
}
