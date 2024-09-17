import "./Home.css";
import Banner from '../../components/banner/Banner';  // Use two levels up to find the Banner
import Promo from '../../components/promo/Promo';    // Similarly, adjust the path for Promo


export default function Home() {
    return (
        <div>
            <Banner />
            <Promo />
           
        </div>
    );
}
