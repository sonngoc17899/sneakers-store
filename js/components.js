const components = {};
let header = `<div class="header">
<ul class="menu">
    <li><div onclick="love()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>Yêu thích</div></li>
    <li><div id="loginout" onclick="login()">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          </svg>Đăng nhập</div></li>
    <li><div onclick="giohang()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
        <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
      </svg>Giỏ hàng</div></li>
      <li><div id="logout" onclick="logout()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>
      <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z"/>
    </svg>Đăng xuất</div></li>
</ul>
</div>
<div class="navbar">
<div class="logo"><a href="../html/index.html"><img src="../images/logo-giay.jpg" alt="" style="width: 250px; height: 130px;"></a></div>
<div class="navbar-menu">
<ul class="nav-navbar">
    <li class="dropdown">
        <div class="title-dropdown" onclick="sneakers(' ')">SẢN PHẨM</div>
        <ul class="dropdown-hover">
            <li class="sneakers" id="sneakerMan" onclick="sneakers('nam')">Cho nam</li>
            <li class="sneakers" id="sneakerWomen" onclick="sneakers('nữ')">Cho nữ</li>
        </ul>
    </li>
    <li class="line"></li>
    <li class="dropdown">
        <div class="title-dropdown" onclick="sneakers('Converse')">CONVERSE</div>
            <ul class="dropdown-hover">
            <li class="sneakers" onclick="sneakers('1970s')">1970s</li>
            <li class="sneakers" onclick="sneakers('Chuck Taylor')">Chuck Taylor</li>
            </ul>
    </li>
    <li class="line"></li>
    <li class="dropdown">
        <div class="title-dropdown" onclick="sneakers('Vans')">VANS</div>
        <ul class="dropdown-hover">
            <li class="sneakers" onclick="sneakers('Old Skool')">Old Skool</li>
            <li class="sneakers" onclick="sneakers('AUTHENTIC')">AUTHENTIC</li>
        </ul>
    </li>
</ul>
</div>
<div class="search">
    <form class="form-group" autocomplete="off">
            <input required onkeypress="search1(event)" id="find" type="text" class="input" placeholder="Tìm kiếm">
            <svg onclick="search()" style="color: blue;" width="1.5rem" height="38px" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
    </form>
</div>
</div>`
let item = `<div class="item">
<div class="img"></div>
<div class="info-seller">
  <h3 class="name"></h3>
  <div class="price"></div>
</div>
</div>`
let footer = `<div class="footer">
<div class="footer-info">
  <div class="title-menu">GIỚI THIỆU</div>
  <ul class="list-menu">
    <li onclick="home()">Trang chủ</li>
    <li onclick="sneakers(' ')">Sản Phẩm</li>
  </ul>
</div>
<div class="customer">
  <div class="title-menu">HỖ TRỢ KHÁCH HÀNG</div>
  <ul class="list-menu">
    <li onclick="login1()">Đăng nhập</li>
    <li onclick="register()">Đăng kí</li>
    <li onclick="giohang()">Giỏ hàng</li>
  </ul>
</div>
<div class="link">
  <div class="title-menu">KẾT NỐI VỚI CHÚNG TÔI</div>
  <ul class="list-menu">
    <li><a href=""><i class="fa fa-facebook-official" style="font-size:36px; color: #4267b2;"></i></a></li>
    <li><a href=""><i class="fa fa-instagram" style="font-size:36px;color: #c69c6d"></i></a></li>
    <li><a href=""><i class="fa fa-youtube-play" style="font-size:36px;color:red"></i></i></a></li>
  </ul>
</div>
<div class="hot-line">
  <div class="title-menu">LIÊN HỆ VỚI CHÚNG TÔI</div>
  <h5>0868146520</h5>
</div> 
</div>  `
components.home = `${header}
<div class="item">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../images/slider_1.png" alt="First slide" style="height: 400px;">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/banner-slide-FOG.jpg" alt="Second slide" style="height:400px;">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/SB2019-x-Converse-poster.jpg" alt="Third slide" style="height: 400px;">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
<div class="home-collection">
<div class="title">DANH MỤC MUA HÀNG</div>
<div class="row">
    <div class="col">
      <div class="item-bg">
        <div class="item-group" onclick="click()">
          GIÀY NAM
        </div>
        <img src="../images/sneaker-man.jpg" alt="" style="height: 220px; width: 100%;">
      </div>
    </div>
    <div class="col">
      <div class="item-bg">
        <div class="item-group">
          GIÀY NỮ
        </div>
        <img src="../images/sneaker-women.jpg" alt="" style="height: 220px; width: 100%;">
      </div>
    </div>
    <div class="col">
      <div class="item-bg">
        <div class="item-group">
          DÒNG SẢN PHẨM
        </div>
        <img src="../images/Tiger_Patchwork_Thumbnail.png" alt="" style="height: 220px; width: 100%;">
      </div>
    </div>
</div>
</div>
<div class="home-collection1">
<div class="title">BEST SELLER</div>
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
</div>
</div>
</div>
</div>
${footer}
`
components.search = `
${header}
<div id="show-info-sneakers"></div>
${footer}
` 
components.cartScreen = `
${header}
${footer}
`
components.itemsScreen = `
${header}
<div id="show-items"></div>
${footer}
`
components.loveScreen = `
${header}
${footer}
`
components.sneakersScreen = `
${header}
<div id="show-info-sneakers"></div>
<div class="title">SẢN PHẨM LIÊN QUAN</div>
<div class="one-more-sneakers">
<div class="list-seller">
<div class="item-seller">
    ${item}
    ${item}
    ${item}
    ${item}
</div>
</div>
</div>
${footer}
`
components.loginScreen = `
${header}
<div class="title-login">
        <div class="col">
            <ul>
                <li><a href="../html/index.html">Trang chủ</a></li>
                <li>></li>
                <li>Đăng nhập tài khoản</li>
            </ul>
        </div>
</div>
<div class="container-login">
<div class="login-title-first">
    <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
    <span>Nếu đã có tài khoản đăng nhập tại đây</span>
</div>
</div>
<div class="login-container">
        <div class="login-form">
            <div class="login-title">Email*</div>
            <form id="form-register">
                <div class="input-wrapper">
                    <input type="text" name="email" placeholder="Email">
                    <div class="erros" id="erros-email-name"></div>
                </div>
            <div class="login-title">Password*</div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                    <div class="erros" id="erros-password-name"></div>
                </div>
                <div class="submit-wrapper">
                    <button class="btn" type="submit">Đăng nhập</button>
                    <div id="dangky">Đăng ký</div>
                </div>
                
            </form>
        </div>
</div>
${footer}
`
components.registerScreen = `
${header}
<div class="title-login">
        <div class="col">
            <ul>
                <li><a href="../html/index.html">Trang chủ</a></li>
                <li>></li>
                <li>Đăng ký tài khoản</li>
            </ul>
        </div>
</div>
<div class="container-login">
<div class="login-title-first">
    <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
    <span>Nếu chưa có tài khoản vui lòng đăng ký tại đây</span>
</div>
</div>
<div class="register-container">
<div class="register-form">
    <form id="form-register">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <div>Họ*</div>
                <input type="text" name="firstName" placeholder="First name...">
            <div class="erros" id="erros-first-name"></div>
            </div>
            <div class="input-wrapper">
                <div>Tên*</div>
                <input type="text" name="lastName" placeholder="Last name...">
                <div class="erros" id="erros-last-name"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <div>Email*</div>
            <input type="text" name="email" placeholder="Email..">
            <div class="erros" id="erros-email-name"></div>
        </div>
        <div class="input-wrapper">
            <div>Mật khẩu*</div>
            <input type="password" name="password" placeholder="Password..">
            <div class="erros" id="erros-password-name"></div>
        </div>
        <div class="input-wrapper">
            <div>Nhập lại mật khẩu*</div>
            <input type="password" name="confirmPassword" placeholder="Confirm password..">
            <div class="erros" id="erros-confirm-password"></div>
        </div>
        <div class="submit-wrapper">
            <button class="btn" type="submit">Đăng ký</button>
            <div id="dangnhap">Đăng nhập</div>
        </div>
    </form>
</div>
</div>
${footer}
`