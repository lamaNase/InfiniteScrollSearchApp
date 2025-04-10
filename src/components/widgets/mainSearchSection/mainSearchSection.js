import Group from "../../../assetes/group.svg";
import Classes from "./mainSearchSection.module.css";
import SearchForm from "../../UI/searchForm/searchForm";

function MainSearchSection() {
    return (
        <main className={Classes.main}>
            <SearchForm />
            <img className={Classes.group} src={Group} alt="Group" />
        </main>
    );
}

export default MainSearchSection;