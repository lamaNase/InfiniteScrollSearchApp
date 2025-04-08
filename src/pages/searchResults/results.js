import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import classificationsImage from "../classifications.svg";
import InfiniteScroll from "../../components/infinitScroll";
import Classes from "./results.module.css";

function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const [selectedFilter, setSelectedFilter] = useState("الجميع (32)");

    const filterOptions = ["الجميع (32)", "مراجعات (12)", "تسريبات (2)", "نماذج (15)"];

    return (
        <div className={Classes.main}>
            <main>
                <p>نتائج البحث</p>

                <form className={Classes.form}>
                    <div className={Classes.inputWrapper}>
                        <input
                            type="text"
                            id="question"
                            placeholder="ابحث هنا..."
                            defaultValue={query || ""}
                        />
                    </div>
                </form>

                <div className={Classes.options}>
                    <div>
                        {filterOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setSelectedFilter(option)}
                                style={{
                                    backgroundColor:
                                        selectedFilter === option ? "#1CB0F6" : "white",
                                    color:
                                        selectedFilter === option ? "white" : "black",
                                    border:
                                        selectedFilter === option ? "none" : "1px solid lightgray",
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <button className={Classes.classifications}>
                        <img src={classificationsImage} alt="Classifications" />
                        التصنيفات
                    </button>
                </div>

                {query ? (
                    <InfiniteScroll query={query} filter={selectedFilter} />
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