import React from "react";
import { Card, Row, Col, Button, Form, Container, ToggleButton, ButtonGroup } from "react-bootstrap";

function Homepage() {
    return (
    <div class="container">
        <div class="home__container bd-container bd-grid row flex-lg-row-reverse align-items-center g-5 py-5 px-auto">
            <div class="col-15 col-sm-8 col-lg-6">
                <img src="/images/saucemoe.png" class="d-block mx-lg-auto img-fluid" alt="logo" loading="lazy"/>
            </div>
            <div class="col-lg-6">
                <h1 class="display-1 fw-bold lh-1 mb-3">Tasty food</h1>
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Xem thực đơn</button>
                </div>
            </div>
        </div>

        <div class="row featurette text-lg-start">
            <div class="col-md-7 order-md-2 text-lg-start" >
                <h2 class="featurette-heading display-4 fw-bold lh-1 mb-3">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div class="col-md-4 order-md-1">
                <img src="/images/sushi01.png" alt="gr"/>
            </div>
        </div>

        <div class="container px-4 py-5" id="hanging-icons">
            <h2 class="pb-2 border-bottom">Món mới sắp ra mắt</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                <div class="col d-flex align-items-start">
                    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/images/new1.jpg" width="192" alt="logo"/>
                    </div>
                    <div>
                        <h2>Trà chanh giải nghiệp</h2>
                        <p display-2 class="lead">Chính thức mở bán vào ngày 31/11/2021.</p>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/images/new2.jpg" width="192" alt="logo"/>
                    </div>
                    <div>
                        <h2>Muffin trái cây</h2>
                        <p display-2 class="lead">Chính thức mở bán vào ngày 31/11/2021.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div class="col d-flex align-items-start">
                <div class="px-4 py-5 my-5 text-center">
                    <img width="50" src="/images/fork.svg" alt="" />
                    <h1 class="display-5 fw-bold">Món ăn hảo hạng</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Nhà hàng đảm bảo về vấn đề an toàn vệ sinh thực phẩm, cam kết về chất lượng món ăn.</p>
                    </div>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="px-4 py-5 my-5 text-center">
                    <img width="62" src="/images/service.svg" alt="" />
                    <h1 class="display-5 fw-bold">Phục vụ tận tình</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Luôn sẵn lòng phục vụ quý khách với quan điểm "vui lòng khách đến, vừa lòng khách đi".</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row featurette">
            <div class="col-md-7">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Trong trường hợp quý khách có nhu cầu đặt trước bàn ăn hoặc phản ánh về chất lượng món ăn, thái độ phục vụ của nhân viên, hoặc bất cứ bất cập nào quý khách gặp phải, vui lòng liên liên hệ nhà hàng.</span>
                    <ul>
                    <li>Address: Ho Chi Minh City - Vietnam</li>
                    <li>Discord: noichaoheo#7605</li>
                    <li>Phone number: 666 - 3629</li>
                    <li>Email: nchrestaurant@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-5">
            <div class="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <button type="button" class="btn btn-warning">Liên hệ</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage;
