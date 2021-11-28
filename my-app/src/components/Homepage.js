import React from "react";
import { Card, Row, Col, Button, Form, Container, ToggleButton, ButtonGroup } from "react-bootstrap";

function Homepage() {
    return (

    <div class="container">
        <div class="home__container bd-container bd-grid row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="saucemoe.png" class="d-block mx-lg-auto img-fluid" alt="logo" loading="lazy"/>
            </div>
            <div class="col-lg-6">
                <h1 style={{fontSize: 90}} class="display-7 fw-bold lh-1 mb-3">Tasty food</h1>
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Xem thực đơn</button>
                </div>
            </div>
        </div>

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src="logo512.png" alt="gr"/>
            </div>
        </div>

        <div class="container px-4 py-5" id="hanging-icons">
            <h2 class="pb-2 border-bottom">Món mới tuần này</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                <div class="col d-flex align-items-start">
                    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="logo192.png" alt="logo"/>
                    </div>
                    <div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary">
                            Primary button
                        </a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="logo192.png" alt="logo"/>
                    </div>
                    <div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary">
                        Primary button
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div class="col d-flex align-items-start">
                <div class="px-4 py-5 my-5 text-center">
                <svg class="services__img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.3205 21.5702L44.6357 19.3163C43.7659 16.756 40.9852 15.3857 38.4249 
                    16.2556C36.9847 16.7449 35.8536 17.876 35.3643 19.3163L34.6795 21.5702C34.1032 
                    23.471 33.9823 25.4807 34.3264 27.4368C34.6403 29.0838 35.6859 30.4987 37.168 
                    31.2822L36.4011 48.4267C36.2984 49.3836 36.6088 50.339 37.2544 51.0528C38.6428 
                    52.5715 40.9996 52.6771 42.5183 51.2887C42.6004 51.2136 42.6791 51.135 42.7541 
                    51.0528C43.3853 50.3592 43.6952 49.4319 43.6075 48.4982L42.8363 31.28C44.3164 
                    30.4962 45.3603 29.0822 45.6736 27.4368C46.0177 25.4807 45.8968 23.471 45.3205 
                    21.5702ZM43.5723 27.0656C43.3413 28.2488 42.4981 29.2196 41.3589 29.6139C40.9265 
                    29.7764 40.648 30.1988 40.6688 30.6603L41.4795 48.6667C41.5168 49.0199 41.4003 
                    49.372 41.1595 49.6331C40.5172 50.269 39.4828 50.269 38.8405 49.6331C38.5877 
                    49.351 38.4729 48.9712 38.5269 48.5963L39.3312 30.6603C39.352 30.1988 39.0735 
                    29.7764 38.6411 29.6139C37.5019 29.2196 36.6587 28.2488 36.4277 27.0656C36.1424 
                    25.4416 36.2429 23.7732 36.7211 22.1952L37.4059 19.9403C37.9357 18.5076 39.5267 
                    17.7758 40.9595 18.3056C41.7169 18.5858 42.314 19.183 42.5941 19.9403L43.2789 
                    22.1952C43.7565 23.7734 43.8571 25.4416 43.5723 27.0656Z"/>
                    <path d="M28.8 16C28.2109 16 27.7333 16.4776 27.7333 17.0667V26.2251L24.8459 
                    29.1125C24.6323 29.3253 24.5187 29.6188 24.5333 29.92L25.4667 48.5867C25.4889 
                    48.9892 25.3428 49.3829 25.0635 49.6736C24.4796 50.2627 23.5287 50.2669 22.9395 
                    49.6829C22.9363 49.6799 22.9332 49.6767 22.9301 49.6736C22.6507 49.3829 22.5047 
                    48.9892 22.5269 48.5867L23.4667 29.92C23.4816 29.6189 23.3684 29.3256 23.1552 
                    29.1125L20.2667 26.2251V17.0667C20.2667 16.4776 19.7891 16 19.2 16C18.6109 
                    16 18.1333 16.4776 18.1333 17.0667V26.6667C18.1333 26.9496 18.2459 27.2208 
                    18.4459 27.4208L21.3109 30.2869L20.4011 48.4832C20.3043 50.4708 21.8371 
                    52.1607 23.8247 52.2575C25.8123 52.3543 27.5021 50.8215 27.5989 48.8339C27.6047 
                    48.7171 27.6047 48.6001 27.5989 48.4833L26.6891 30.2871L29.5541 27.4209C29.7541 
                    27.2209 29.8667 26.9497 29.8667 26.6668V17.0668C29.8667 16.4776 29.3891 16 28.8 16Z"/>
                    <path d="M22.4 16C21.8109 16 21.3333 16.4776 21.3333 17.0667V25.6C21.3333 26.1891 
                    21.8109 26.6667 22.4 26.6667C22.9891 26.6667 23.4667 26.1891 23.4667 25.6V17.0667C23.4667 
                    16.4776 22.9891 16 22.4 16Z"/>
                    <path d="M25.6 16C25.0109 16 24.5333 16.4776 24.5333 17.0667V25.6C24.5333 26.1891 
                    25.0109 26.6667 25.6 26.6667C26.1891 26.6667 26.6667 26.1891 26.6667 25.6V17.0667C26.6667 
                    16.4776 26.1891 16 25.6 16Z"/>
                    <path d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 
                    64 32C63.98 14.3352 49.6648 0.02 32 0ZM32 61.8667C15.5051 61.8667 2.13333 48.4949 
                    2.13333 32C2.13333 15.5051 15.5051 2.13333 32 2.13333C48.4949 2.13333 61.8667 
                    15.5051 61.8667 32C61.8479 48.4871 48.4871 61.8479 32 61.8667Z"/>
                    <path d="M35.4625 52.0229C35.4053 51.4367 34.8836 51.0077 34.2972 51.0649C34.2835 
                    51.0663 34.2697 51.0679 34.256 51.0697L34.2603 51.0687C32.7585 51.2431 31.2415 
                    51.2431 29.7397 51.0687C29.1544 51 28.6244 51.4188 28.5557 52.0041C28.4871 
                    52.5895 28.9059 53.1195 29.4912 53.1881C31.1567 53.3827 32.8391 53.3827 
                    34.5045 53.1881C35.0908 53.1311 35.5197 52.6093 35.4625 52.0229Z"/>
                    <path d="M48.32 18.2549C47.9414 17.8035 47.2686 17.7445 46.8173 18.1231C46.8158 
                    18.1243 46.8144 18.1257 46.8128 18.1269C46.3625 18.5066 46.3052 19.1794 46.6848 
                    19.6298C53.1161 27.2645 52.6241 38.5537 45.553 45.5999C45.1357 46.0158 45.1345 
                    46.6914 45.5504 47.1087C45.9662 47.5261 46.6418 47.5273 47.0592 47.1114C54.9174 
                    39.283 55.4654 26.7387 48.32 18.2549Z"/>
                    <path d="M24.851 14.0992C24.8505 14.0992 24.85 14.0991 24.8495 14.0991C24.8487 
                    14.0991 24.8478 14.0992 24.8469 14.0992H24.851Z"/>
                    <path d="M37.0315 11.263C32.8628 10.2639 28.4908 10.5324 24.4757 12.0342C23.9243 
                    12.2415 23.6455 12.8567 23.8528 13.408C24.0091 13.8236 24.4064 14.0987 24.8503 
                    14.0991C24.9779 14.0984 25.1043 14.0751 25.2235 14.0299C28.8392 12.6778 32.7763 
                    12.4363 36.5301 13.3366C37.1028 13.475 37.6792 13.1231 37.8176 12.5504C37.956 
                    11.9778 37.6041 11.4014 37.0315 11.263Z"/>
                    <path d="M18.3989 45.5466C14.8031 41.9569 12.7877 37.081 12.8 32C12.7895 
                    27.9405 14.0753 23.9837 16.4704 20.7061C16.8244 20.2352 16.7296 19.5665 
                    16.2587 19.2125C15.7877 18.8585 15.1191 18.9533 14.7651 19.4243C14.7588 
                    19.4327 14.7527 19.441 14.7467 19.4496C8.5796 27.928 9.48706 39.6308 
                    16.8875 47.057C17.3045 47.4744 17.9811 47.4746 18.3984 47.0576C18.8157 
                    46.6405 18.816 45.964 18.3989 45.5466Z"/>
                </svg>
                    <h1 class="display-5 fw-bold">Centered hero</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="px-4 py-5 my-5 text-center">
                <img alt='hehe' src='logo.png'/>
                    <h1 class="display-5 fw-bold">Centered hero</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row featurette">
            <div class="col-md-7">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Let's talk</span>
                    <h2 class="section-title contact__initial">Contact us</h2>
                    <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                </div>
            </div>
            <div class="col-md-5">
            <div class="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage;
