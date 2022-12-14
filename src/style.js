import styled from "styled-components"
import {Cart} from "@styled-icons/bootstrap/Cart"
import BestAtmosImg from "./assets/images/bg-3.jpg"
import SliderImg1 from "./assets/images/slide-1-1920x753.jpeg"
import SliderImg2 from "./assets/images/slide-2-1920x753.jpeg"
import SliderImg3 from "./assets/images/lukas-bee-T-SkHm-18qQ-unsplash.jpg"

const All=styled.div`
font-family: 'Poppins',sans-serif;
`
const Container = styled.div`
  position: fixed!important;
  z-index: 9999999!important;
  top: 0!important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  padding: 10px 100px;
  margin: auto;
  //position: relative;
  background: #F5F5F5;
  overflow: hidden;
  height: 80px;
`

const SliderContainer = styled.div`
  z-index: 2133131;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 753px;
  width: 100vw;
  margin-top: -24px;
`

const getBg = (bg) => bg === 1 ? SliderImg1 : bg === 2 ? SliderImg2 : SliderImg3

const Slide = styled.div`
  z-index: 12;
  background-image: url(${({bg}) => getBg(bg)});
  height: 100%;
  width: 100%;
  display: flex;
  padding-left: 10rem;
  flex-direction: column;
  justify-content: center;
  background-position: ${({bg}) => bg === 3 && "center"};
`

const LeftArrow = styled.div`
  z-index: 1232432523;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 370px;
  left: 0;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background-color: rgba(0,0,0,0.3);
`

const RightArrow = styled.div`
  z-index: 1232432523;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 370px;
  right: 0;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);
`



const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  z-index: 2324342;
`

const LogoWrapperBefore = styled.div`
  position: absolute;
  right: 0;
  height: 150%;
  width: 100vw;
  background: #ffffff;
  transform: skewX(16deg);
  transform-origin: 50% 100%;
  will-change: transform;
  pointer-events: none;
  z-index: -1;
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const Button = styled.button`
    border: none;
    outline: none;
    font-weight: 500;
    background-color: transparent;
    margin: 0 10px;
    font-size: 22px;
    line-height: 1.34;
    padding: 10px 0;
    border-bottom: ${({borderBottom}) => borderBottom ? "5px solid #6046b6" : "5px solid transparent"};
    cursor: pointer;
    z-index: 1;
`

const CartIcon = styled(Cart)`
    width: 30px;
    height: 30px;
    color: #6046B6;
`

const CartItems = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    background: deepskyblue;
    right: -10px;
    top: -5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
`

const OurMenuTitle=styled.h1`
text-align: center;
font-weight: 400;
  font-size: 65px;
  letter-spacing: 2px;
  font-family: 'Times New Roman', Times, serif;
  
`
const MenuChild=styled.div`
margin: 30px 0;
`



const ImgWrapper=styled.div`
opacity: 0.9;
filter: brightness(0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  transition: filter 0ms, opacity 0ms;
  &:hover{
    transition: filter 0ms, opacity 0ms;
  }
`

const ImgDiv=styled.div`
position: relative;
`

const MenuIconDiv=styled.div`
  &:hover {
    background-color: #FFE745;
  }

  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #6046B6;
  border: 5px solid #cecdcd;
  top: 30%;
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`
 
const MenuSubtitle=styled.h4`
position: absolute;
  &:hover{
    color: #FFE745
  }
color: white;
top: 68%;
left: 37%;
  font-weight: 700;
`

const MenuParent=styled.div`
margin: 20px 0;
`
const BestAtmosDiv=styled.div`
display: flex;
justify-content: end;
margin: 70px 0;
background-size: cover;
width: 100vw;
height: 500px;
background-image: url(${BestAtmosImg});
  background-position: bottom;
  overflow: hidden;
  position: relative;
`
const BestAtmosTitle=styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: 500;
font-size: 65px;
  color: #fff
`
const BestAtmosBtn=styled.button`
&:hover{
  background-color: #FFE745;
  color: #000;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}
  background-color: lightseagreen;
  color: #fff;
  height: ${({small}) => small ? "60px" : "75px"};
  width: ${({small}) => small ? "145px" : "250px"};
border: none;
margin: 20px 0;
letter-spacing: 1px;
font-size: 16px;
font-weight: 700;
`
const Line=styled.span`
display: inline-block;
margin: 7px 0;
width: 60px;
height: 4px;
background-color: #FFE745;
`
const BestAtmosPersonSubt=styled.h4`
display: inline-block;
margin: 10px 20px;
  font-size: 18px;
color: #777;
`
const PizzasTitle=styled.h1`
font-size: 70px;
letter-spacing: 3px;
text-align: center;
font-family: 'Times New Roman', Times, serif;
`

const BgBlack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
`

const SlideBtn = styled.button`
  &:hover{
    background-color: lightseagreen;
    color: #fff;
    letter-spacing: 2px;
    transition: all 0.5s ease;
  }
  height: ${({small}) => small ? "60px" : "75px"};
  width: ${({small}) => small ? "145px" : "250px"};
  background-color: #FFE745;
  color: #000;
  font-weight: 700;
  border: none;
  margin: 20px 0;
  letter-spacing: 1px;
  font-size: 16px;
`

const PizzaImg=styled.img`
width: 100%;
height: 250px;
object-fit: cover;
border-top-right-radius:24px;
border-top-left-radius:24px;
`
const PizzaCard=styled.div`
border-radius:24px;
border: none;
position:relative;
`
const BetweenReverseCard=styled.div`
display: flex;
flex-direction: revert;
justify-content: space-between;
`
const MoreBtn=styled.button`
&:hover{
  background-color: #FFE745;
  color: #000;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}
  background-color: lightseagreen;
  color: #fff;
  padding: 5px;
border: none;
margin: 20px 0;
letter-spacing: 1px;
font-size: 16px;
font-weight: 500;
`
const LikeBtn=styled.button`
border: none;
background: none;
font-size: 24px;
`
const PurchaseDiv=styled.div`
display:flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
position:absolute;
border-radius:24px;
`
const BgOpacity=styled.div`
  width: 100%;
  height: 100%;
  filter: blur(5px);
  background-color: rgba(0,0,0,0.3);
  border-radius:24px;
  position: absolute;
`
const PurchaseBtn=styled.button`
&:hover{
  background-color: lightseagreen;
  color: #fff;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}
  background-color: #FFE745;
  color: #000;
  height: 65px;
width: 150px;
border: none;
margin: 10px 0;
letter-spacing: 1px;
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
z-index:3;
`
const BookTable=styled.div`
min-width: 1000px;
min-height: 430px;
`
const BookInputDiv=styled.div`
display: flex;
justify-content:space-around;
`
const TextAreaDiv=styled.div`
display: flex;
justify-content: center;
margin: 50px 20px;
`
const SwiperCard=styled.div`
border: none;
width: 100%;
display: block;
padding: 20px;
height: 100%;
`
const SwiperImgDiv=styled.div`
margin: 30px;
display: flex;
align-items: center;
justify-content: center;
`
const SwiperImg=styled.img`
height: 200px;
width: 200px;
object-fit: cover;
border-radius: 50%;
`




export {
    Container,
    Wrapper,
    Button,
    LogoWrapper,
    PizzasTitle,
    ImgDiv,
    Line,
    BestAtmosBtn,
    BestAtmosPersonSubt,
    LogoWrapperBefore,
    CartIcon,
    BestAtmosTitle,
    MenuIconDiv,
    MenuSubtitle,
    BestAtmosDiv,
    CartItems,
    OurMenuTitle,
    MenuChild,
    MenuParent,
    All,
    ImgWrapper,
    BgBlack,
    SliderContainer,
    Slide,
    SlideBtn,
    LeftArrow,
    RightArrow,
    PizzaImg,
    PizzaCard,
    BetweenReverseCard,
    MoreBtn,
    LikeBtn,
    PurchaseDiv,
    PurchaseBtn,
    BgOpacity,
    BookTable,
    BookInputDiv,
    TextAreaDiv,
    SwiperImgDiv,
    SwiperImg,
    SwiperCard
} 
