import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si";
import shirt from "../assets/shirt.png";
import bag from "../assets/bag.png";
import sound from "../assets/sound.png";
import shelf from "../assets/shelf.png";

export const Categoriesdata =[
    {
        id:1,
        icon:<CiMobile4 size={50} />,
        name:"phones",
    },
    {
        id:2,
        icon:<HiOutlineDesktopComputer size={50} />,
        name:"computers",
    },
    {
        id:3,
        icon:<BsSmartwatch size={50} />,
        name:"SmartWatch",
    },
    {
        id:4,
        icon:<CiCamera size={50} />,
        name:"Camera",
    },
    {
        id:5,
        icon:<LuHeadphones size={50} />,
        name:"Headphones",
    },
    {
        id:6,
        icon:<SiYoutubegaming size={50} />,
        name:"Gaming",
    },
]

export const recentproductsdata = [
    {
        id:1,
        image: shirt ,
        name:"The north coat",
        newprice:"$260",
        oldprice:"$360",
        ratcount:"65"
    },
    {
        id:2,
        image: bag,
        name:"Gucci duffle bag",
        newprice:"$960",
        oldprice:"$1160",
        ratcount:"65"
    },
    {
        id:3,
        image: sound,
        name:"RGB liquid CPU Cooler",
        newprice:"$160",
        oldprice:"$170",
        ratcount:"65"
    },
    {
        id:4,
        image: shelf,
        name:"Small BookSelf",
        newprice:"$360",
        oldprice:"",
        ratcount:"65"
    },
]

export const productsowndata=[
    {
        id:1,
        image: shirt,
        name:"breed dry dog food",
        price:"$100",
        rating:3,
        ratcount:35
    },
    { 
        id:2,
        image: shirt,
        name:"CANON EOS DSLR Camera",
        price:"$360",
        rating:4,
        ratcount:95
    },
    {
        id:3,
        image: shirt,
        name:"ASUS FHD Gaming Laptop",
        price:"$700",
        rating:5,
        ratcount:325
    },
    {
        id:4,
        image: shirt,
        name:"Curology Product Set ",
        price:"$500",
        rating:4,
        ratcount:145
    },
    
    {
        id:5,
        image: shirt,
        name:"Kids Electric Car",
        price:"$960",
        rating:5,
        ratcount:65
    },
    {
        id:6,
        image: shirt,
        name:"Jr. Zoom Soccer Cleats",
        price:"$1160",
        rating:5,
        ratcount:35
    },
    {
        id:7,
        image: shirt,
        name:"GP11 Shooter USB Gamepad",
        price:"$660",
        rating:5,
        ratcount:55
    },
    {
        id:8,
        image: shirt,
        name:"Quilted Satin Jacket",
        price:"$660",
        rating:4,
        ratcount:55
    },
]


export const wishlistData = [
    { id: 1, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, discount: '-35%', image: shirt },
    { id: 2, name: 'RGB liquid CPU Cooler', price: 1960, image: shirt},
    { id: 3, name: 'GP11 Shooter USB Gamepad', price: 550, image: shirt },
    { id: 4, name: 'Quilted Satin Jacket', price: 750, image: shirt },
  ];
  
export const justForYouData = [
    { id: 5, name: 'ASUS FHD Gaming Laptop', price: 960, originalPrice: 1160, discount: '-35%', image: shirt, rating: 65 },
    { id: 6, name: 'IPS LCD Gaming Monitor', price: 1160, image: shirt, rating: 65 },
    { id: 7, name: 'HAVIT HV-G92 Gamepad', price: 560, label: 'NEW', image: shirt, rating: 65 },
    { id: 8, name: 'AK-900 Wired Keyboard', price: 200, image: shirt, rating: 65 },
  ];