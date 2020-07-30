const view = {};
view.setActiveScreen = (screenName) =>{
    switch(screenName){
        case `home`:
            document.getElementById(`app`).innerHTML = components.home;
            model.loadSneakers();
            break;
        case `searchScreen`:
            document.getElementById(`app`).innerHTML = components.search;
            view.userChange();
            break;
        case `loginScreen`: 
            document.getElementById(`app`).innerHTML = components.loginScreen;
            const loginForm = document.getElementById(`form-register`);
             loginForm.addEventListener(`submit`, (e) => {
            e.preventDefault();
            const loginInfo = {
             email: loginForm.email.value,
            password: loginForm.password.value,
        };
        controller.login(loginInfo);
        });
        const newUser = document.getElementById(`dangky`);
        newUser.addEventListener(`click`, (e) =>{
            view.setActiveScreen(`registerScreen`);
        });

        break;
        case `registerScreen`:
            document.getElementById(`app`).innerHTML = components.registerScreen;
            const registerForm = document.getElementById(`form-register`);
            registerForm.addEventListener(`submit`, (e) => {
            e.preventDefault();
            const registerInfo = {
            firstName: registerForm.firstName.value,
            lastName: registerForm.lastName.value,
            email: registerForm.email.value,
            password: registerForm.password.value,
            confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(registerInfo);
      });
            const userLogin = document.getElementById(`dangnhap`);
            userLogin.addEventListener(`click`, (e) =>{
            view.setActiveScreen(`loginScreen`);
        });
        break;
        case `cartScreen`:
            document.getElementById(`app`).innerHTML = components.cartScreen;
            view.userChange();
        break;
        case `payScreen`:
            document.getElementById(`app`).innerHTML = components.payScreen;
            view.userChange();
            break;
        case `sneakersScreen`:
            document.getElementById(`app`).innerHTML = components.sneakersScreen;
            view.userChange();
            break;
        case `itemsScreen`:
            document.getElementById(`app`).innerHTML = components.itemsScreen;
            view.userChange();
            break;
        case `finishScreen`:
            document.getElementById(`app`).innerHTML = components.finishScreen;
            break;
    }
}
view.setErrosMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message;
};
function giohang(){
    view.setActiveScreen(`cartScreen`);
}
function search(){
    model.find();
}
function search1(e){
    if(e.key === 'Enter'){
    let find = document.getElementById(`find`).value;
    search();
    e.preventDefault();
    }
}
function login(){
   view.setActiveScreen(`loginScreen`);
}
function user(){
    view.setActiveScreen(`itemsScreen`);
}
function register(){
    view.setActiveScreen(`registerScreen`)
}
function home(){
    view.setActiveScreen(`home`);
}
function sneakers(id){
    model.showFormBrand(id);
}
function addHang(id){
    let soLuong = document.getElementById(`soluong`).value;
    let size = document.getElementById(`size`).value;
    // let price = document.getElementsByClassName(`price1`).value;
    controller.addHang(id, soLuong, size);
}
function thanhtoan(id){
    let soLuong = document.getElementById(`soluong`).value;
    let size = document.getElementById(`size`).value;
    controller.thanhtoan(id, soLuong, size);
}
function logout(){
    firebase.auth().signOut();
    document.getElementById(`logout`).style = `display: none`;
    document.getElementById(`login`).innerHTML = `Đăng nhập`
}
function xacnhan(){
    let name = document.getElementById(`name-user`).value;
    let email = document.getElementById(`email-user`).value;
    let phone = document.getElementById(`phone-user`).value;
    let address = document.getElementById(`address-user`).value;
    let country = document.getElementById(`country-user`).value;
    controller.xacnhan(name, email, phone, address, country);
}
view.showSneakers = (data) =>{
   let img =  document.getElementsByClassName(`img`);
   let name = document.getElementsByClassName(`name`);
   let price = document.getElementsByClassName(`price`);
   for(let i=0;i<img.length;i++){
        name[`${i}`].innerText = `${data[`${i}`].name}`
        name[i].addEventListener(`click`, ()=>{
            model.infoSneaker(data[i].name);
        })
        img[`${i}`].innerHTML = `<img src="${data[`${i}`].img}" alt="">`
        img[i].addEventListener(`click`, ()=>{
            model.infoSneaker(data[i].name);
        })
        price[`${i}`].innerHTML = vnd(data[i].price.toString()) + ` VND`;
        // console.log(vnd(data[i].price));
   }
}
view.find = (data) =>{
    let find = document.getElementById(`find`).value;
    console.log(find);
    let dem = 0;
    let a = [];
    for(let i=0;i<data.length;i++)
    {
        if(data[i].name.toLowerCase().includes(find.trim().toLowerCase()) && find.trim() !== ``){
            a.push(data[i]);
            dem++;
        }
    }
    view.setActiveScreen(`searchScreen`);
    let showInfo = document.getElementById(`show-info-sneakers`);
    showInfo.innerHTML = `<div class="title-login">
    <div class="col">
        <ul>
            <li><a href="../html/index.html">Trang chủ</a></li>
            <li>></li>
            <li>Kết quả tìm kiếm với từ khóa "${find}"</li>
        </ul>
    </div>
    </div>
    <div class="show-info-container">
        <div class="title-show"><h2>Tìm thấy ${dem} kết quả cho "${find}"</h2></div>
    </div>
    <div class="list-seller">
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
</div>
    `
    let img =  document.getElementsByClassName(`img`);
    let name = document.getElementsByClassName(`name`);
    let price = document.getElementsByClassName(`price`);
    
    for(let i=0;i<a.length;i++){
        name[`${i}`].innerHTML = `${a[`${i}`].name}`
        name[i].addEventListener(`click`, ()=>{
            model.infoSneaker(a[i].name);
        })
        img[`${i}`].innerHTML = `<img src="${a[`${i}`].img}" alt="">`
        img[i].addEventListener(`click`, ()=>{
            model.infoSneaker(a[i].name);
        })
        price[`${i}`].innerHTML = vnd(a[i].price.toString()) + ` VND`;
   }
}
view.showInfo = (name, data) =>{
  view.setActiveScreen(`sneakersScreen`);
  let a = []
    for(let i=0;i<data.length;i++)
    {
        if(name === data[i].name){
            a.push(data[i])
        }
    }
    let showInfo = document.getElementById(`show-info-sneakers`);
    showInfo.innerHTML = `<div class="title-login">
    <div class="col">
        <ul>
            <li><a href="../html/index.html">Trang chủ</a></li>
            <li>></li>
            <li>Giày ${a[0].brand} chính hãng</li>
            <li>></li>
            <li>${a[0].name}</li>
        </ul>
    </div>
    </div>
    </div>
    <div class="info-detail">
        <div id="img-sneaker">
            <img src="${a[0].img}" alt="">
        </div>
        <div class="info">
            <h3 class="name1">${a[0].name}</h3>
            <div class="price1">${vnd(a[0].price.toString())} VND</div>
            <div class="detail">${a[0].detail}</div>
            <div class="size-many">
                <div class="size">
                <label for="size">Size:</label>

                <select id="size">
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
            </select>
                </div>
                <div class="many">
                <label for="many">Số lượng:</label>
                <input id="soluong" type="text" placeholder="Nhập số lượng">
                <div class="erros" id="erros-soluong"></div>
                </div>
            </div>
            <div class="menu-pay">
            <div class="add-gio-hang">
            <button onclick="addHang('${a[0].name}')">THÊM VÀO GIỎ HÀNG</button>
            </div>
            <div class="pay">
            <button onclick="thanhtoan('${a[0].name}')">MUA HÀNG</button>
            </div>
            </div>
        </div>
    </div>
    `
    let img =  document.getElementsByClassName(`img`);
    let name1 = document.getElementsByClassName(`name`);
    let price = document.getElementsByClassName(`price`);
    let b = [];
    for(let i=0;i<data.length;i++)
    {
        if(data[i].brand === a[0].brand)
        {
            b.push(data[i]);
        }
    }
    console.log(b);
    for(let i=0;i<img.length;i++){
        name1[`${i}`].innerHTML = `${b[i].name}`
        name1[i].addEventListener(`click`, ()=>{
            model.infoSneaker(b[i].name);
        })
        img[`${i}`].innerHTML = `<img src="${b[i].img}" alt="">`
        img[i].addEventListener(`click`, ()=>{
            model.infoSneaker(b[i].name);
        })
        price[`${i}`].innerHTML = vnd(b[i].price.toString()) + ` VND`;
   }
}
view.pay = () =>{
    let size = document.getElementById(`size`).value;
    let many = document.getElementsByClassName(`many`).value;
    let name = document.getElementsByClassName(`name1`).value;
    controller.pay(many);
    // view.setActiveScreen(`cartScreen`)
}
view.showFormBrand = (data, id) =>{
    console.log(id);
    view.setActiveScreen(`itemsScreen`);
    let show = document.getElementById(`show-items`);
    show.innerHTML = `
    <div class="title-login">
    <div class="col">
        <ul>
            <li><a href="../html/index.html">Trang chủ</a></li>
            <li>></li>
            <li>${id}</li>
        </ul>
    </div>
    </div>
    <div class="show-info-container">
        <div class="title-show1"><h1>${id.toUpperCase()}</h1></div>
    </div>
    <div class="list-seller">
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
    <div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
    </div>
</div>
    `
    let a = [];
    console.log(data[3]);
    for(let i=0;i<data.length;i++)
    {
        if(data[i].name.toLowerCase().includes(id.trim().toLowerCase()) || data[i].brand.toLowerCase().includes(id.trim().toLowerCase()
        || data[i].toLowerCase().user.indexOf(id)>0)){
            a.push(data[i]);
        }
    }
    console.log(a);
    let img =  document.getElementsByClassName(`img`);
    let name1 = document.getElementsByClassName(`name`);
    let price = document.getElementsByClassName(`price`);
    for(let i=0;i<a.length;i++){
        name1[i].innerHTML = `${a[i].name}`
        name1[i].addEventListener(`click`, ()=>{
            model.infoSneaker(a[i].name);
        })
        img[`${i}`].innerHTML = `<img src="${a[i].img}" alt="">`
        img[i].addEventListener(`click`, ()=>{
            model.infoSneaker(a[i].name);
        })
        price[`${i}`].innerHTML = vnd(a[i].price.toString()) + ` VND`;
   }
}
function vnd(a){
    let b = a.split(``);
    if(b.length >=4 && b.length <=6){
    b.splice(b.length-3, 0, `.`)
    }else if(b.length >=7 && b.length<=9)
    {
    b.splice(b.length-3, 0, `.`);
    b.splice(b.length-7, 0, `.`);
    }
    let c = b.join(``);
    return c;
}
view.userChange = () =>{
    firebase.auth().onAuthStateChanged((user) => {
        // console.log(user)
        if(user) {
          if (user.emailVerified) {
            model.currentUser = {
              displayName: user.displayName,
              email: user.email
            }
            document.getElementById(`loginout`).style = `display: none`
            document.getElementById(`user`).style = `display: none`
            document.getElementById(`logout`).style = `display: block`
          } else {
            document.getElementById(`loginout`).style = `display: block`
            // view.setActiveScreen('home')
            // alert('Please verify your email')
          }
    }
    })
}
view.thanhtoan = (data, id, soLuong, size) =>{
    let a = [];
    for(let i=0;i<data.length;i++)
    {
        if(data[i].name === id)
        {
            a.push(data[i]);
        }
    }
    console.log(a);
    view.setActiveScreen(`payScreen`);
    let name = document.getElementsByClassName(`name`);
    let img = document.getElementsByClassName(`img`);
    let price = document.getElementsByClassName(`tong-tien`);
    let many = document.getElementById(`soluong`);
    let size1 = document.getElementById(`size`);
    img[0].innerHTML = `<img src="${a[0].img}" alt="">`
    name[0].innerHTML = `Sản phẩm: ` + id
    price[0].innerHTML = `Tổng tiền: ` + vnd((a[0].price*soLuong).toString()) + ` VND`;
    many.innerHTML = `Số lượng: `+ soLuong;
    size1.innerHTML = `Size: ` + size;

}