import Group from "~/assetes/group.svg";
import Classes from "./mainSearchSection.module.css";
import SearchForm from "~/components/UI/searchForm/searchForm";

function MainSearchSection(props) {
    return (
        <div>
            <main className={Classes.main}>
                <div className={Classes.searchForm}><SearchForm /></div>
                <img className={Classes.group} src={Group} alt="Group" />
            </main>
        </div>
    );
}

export default MainSearchSection;