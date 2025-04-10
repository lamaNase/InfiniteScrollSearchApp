import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "../../UI/infinitScroll";
import Classes from "./searchResults.module.css";
import SearchForm from "../../UI/searchForm/searchForm";
import FilteringOptions from "../../UI/filteringOptions/filteringOptions";

function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    return (
        <div className={Classes.main}>
            <main>
                <p>نتائج البحث</p>
                < SearchForm />
                < FilteringOptions />

                {query ? (
                    <InfiniteScroll query={query} />
                ) : (
                    <p style={{ padding: "1rem", color: "gray" }}>
                        الرجاء إدخال كلمة بحث...
                    </p>
                )}
            </main>
        </div>
    );
}

export default Results;