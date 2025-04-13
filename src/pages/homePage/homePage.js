import MainSearchSection from "../../components/widgets/mainSearchSection/mainSearchSection";
import HeaderButtons from "../../components/UI/headerButtons/headerButtons";
import Classes from "./homePage.module.css";

function HomePage () {
    return (
        <div>
            < MainSearchSection/>
            <div className={Classes.headerButtons}>< HeaderButtons /></div>
        </div>
    );
}

export default HomePage;