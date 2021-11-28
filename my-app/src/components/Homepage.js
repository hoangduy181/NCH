import React, {useEffect} from "react";
import { Card, Row, Col, Button, Form, Container, ToggleButton, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Homepage.css'
function Homepage() {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  
    return (
    <div className="container">
        <div className="home__container bd-container bd-grid row flex-lg-row-reverse align-items-center g-5 py-5 px-auto">
            <div className="col-15 col-sm-8 col-lg-6">
                <img src="./images/home1.png" className="d-block mx-lg-auto img-fluid rotate" style={{borderRadius: "50%"}} alt="logo" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-1 fw-bold lh-1 mb-3">Tasty food</h1>
                <p className="lead">We have some exciting ongoing offers as part of our introductory period in this neighborhood. Drop by anytime and check out our combinations that offer you a varied list of cuisines, all of the pizzas, with the awesome accompaniment of exotic sauces and grilled vegetables of a hundred different kinds.

                We have some of the finest workers and staff employed in our establishment, and we guarantee you the best experience of eating out—only at NCH!</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Link to = '/menu'>
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Xem thực đơn</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="row featurette text-lg-start py-5 px-auto" style={{overflow: "hidden"}}>
            <h2 className="pb-2 border-bottom">Ăn hoặc ăn đấm?</h2>
            <div className="col-md-7 order-md-2 text-lg-start p-2 d-flex flex-column-reverse " >
                <h2 className="featurette-heading display-4 fw-bold lh-1 mb-3 text-white">Service & Excellent.</h2>
                <p className="lead text-white">
                In our restaurant, you can try quality dishes cooked by the owner and his team. Fresh seasonal products are available on every menu.
                The restaurant is open from 08:00 to 23:00. Meals are served from 12:00 to 14:00 and from 18:30 to 21:00. The restaurant is closed on Mondays and Tuesdays and also on Sunday evenings in winter.</p>
            </div>
            <div className="col-md-5 order-md-1 p-1">
                <img src="./images/home2.jpg" alt="gr" style={{width: "90vw", objectFit: "cover"}} className='mx-auto'/>
            </div>
        </div>

        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Món mới sắp ra mắt</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/images/new1.jpg" width="192" alt="logo"/>
                    </div>
                    <div>
                        <h2>Trà chanh giải nghiệp</h2>
                        <p display-2 className="lead">Chính thức mở bán vào ngày 31/11/2021.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="/images/new2.jpg" width="192" alt="logo"/>
                    </div>
                    <div>
                        <h2>Muffin trái cây</h2>
                        <p display-2 className="lead">Chính thức mở bán vào ngày 31/11/2021.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div className="col d-flex align-items-start">
                <div className="my-5 text-center">
                    <img width="50" src="/images/fork.svg" alt="" />
                    <h1 className="display-5 fw-bold">Món ăn hảo hạng</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Nhà hàng đảm bảo về vấn đề an toàn vệ sinh thực phẩm, cam kết về chất lượng món ăn.</p>
                    </div>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="my-5 text-center">
                    <img width="62" src="/images/service.svg" alt="" />
                    <h1 className="display-5 fw-bold">Phục vụ tận tình</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Luôn sẵn lòng phục vụ quý khách với quan điểm "vui lòng khách đến, vừa lòng khách đi".</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row featurette">
            <div className="col-md-7 px-5">
                <div className="contact__data px-3">
                    <span className="section-subtitle contact__initial">Trong trường hợp quý khách có nhu cầu đặt trước bàn ăn hoặc phản ánh về chất lượng món ăn, thái độ phục vụ của nhân viên, hoặc bất cứ bất cập nào quý khách gặp phải, vui lòng liên liên hệ nhà hàng.</span>
                    <ul>
                    <li>Address: Ho Chi Minh City - Vietnam</li>
                    <li>Discord: noichaoheo#7605</li>
                    <li>Phone number: 666 - 3629</li>
                    <li>Email: nchrestaurant@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
            <div className="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <button type="button" className="btn btn-primary">Liên hệ</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage;
