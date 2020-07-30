const controller = {};
controller.login = (loginInfo) =>{
    if (loginInfo.email === ``) {
        view.setErrosMessage(`erros-email-name`, `Please input email`);
      } else view.setErrosMessage(`erros-email-name`, ``);
      if (loginInfo.password === ``) {
        view.setErrosMessage(`erros-password-name`, `Please input password`);
      } else view.setErrosMessage(`erros-password-name`, ``);
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
        if(user.emailVerified){}
        // else alert(`Please verify your email`);
        }
      })
      model.login(loginInfo.email, loginInfo.password);
}
controller.register = (registerInfo) => {
    if (registerInfo.firstName === ``) {
      view.setErrosMessage(`erros-first-name`, `Please input first name`);
    } else view.setErrosMessage(`erros-first-name`, ``);
    if (registerInfo.email === ``) {
      view.setErrosMessage(`erros-email-name`, `Please input email `);
    } else view.setErrosMessage(`erros-email-name`, ``);
    if (registerInfo.password === ``) {
      view.setErrosMessage(`erros-password-name`, `Plase input password`);
    } else view.setErrosMessage(`erros-password-name`, ``);
    if (
      registerInfo.confirmPassword === `` ||
      registerInfo.password !== registerInfo.confirmPassword
    ) {
      view.setErrosMessage(
        `erros-confirm-password`,
        `Please input confirm password`
      );
    } else view.setErrosMessage(`erros-confirm-password`, ``);
    if (registerInfo.lastName === ``) {
      view.setErrosMessage(`erros-last-name`, `Plese input last name`);
    } else view.setErrosMessage(`erros-last-name`, ``);
    if (
      registerInfo.firstName !== `` &&
      registerInfo.email !== `` &&
      registerInfo.password !== `` &&
      registerInfo.confirmPassword !== `` &&
      registerInfo.lastName !== `` &&
      registerInfo.password === registerInfo.confirmPassword
    ) {
        // model.createUser(registerInfo.email, registerInfo.firstName);
        model.register(registerInfo.firstName, registerInfo.lastName, registerInfo.email, registerInfo.password);
      // view.setActiveScreen(`loginScreen`);
    }
  };
controller.addHang = (id, soLuong, size, price) =>{
  if(soLuong.trim() ===``){
    view.setErrosMessage(`erros-soluong`, `Nhập số lượng`);
  }else{  view.setErrosMessage(`erros-soluong`, ``);
  model.addHang({
    id,
    soLuong,
    size,
    creatAt: new Date().toISOString(),
  });
}
}
controller.thanhtoan = (id, soLuong, size) =>{
  if(soLuong.trim()===``){
    view.setErrosMessage(`erros-soluong`, `Nhập số lượng`);
  }else{
    view.setErrosMessage(`erros-soluong`, ``);
    model.thanhtoan(
    id,
    soLuong,
    size
  );
  }
}
controller.xacnhan = (name, email, phone, address, country) =>{
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  view.setErrosMessage(`erros-name`, name ===``  ? `Vui lòng nhập họ và tên` : ``);
  view.setErrosMessage(`erros-email-name`, !filter.test(email) ? `Email không hợp lệ` : ``);
  view.setErrosMessage(`erros-phone`, phone === `` ? `Vui lòng nhập số điện thoại` : ``);
  view.setErrosMessage(`erros-address`, address === `` ? `Vui lòng nhập địa chỉ` : ``);
  view.setErrosMessage(`erros-country`, country === `` ? `Vui lòng nhập tỉnh thành` : ``);
  if(name !== ``
  && email !== ``
  && phone !== ``
  && address !== ``
  && country !== ``
  ){
    view.setActiveScreen(`finishScreen`);
  }
}