import { useState } from "react";
import classificationsImage from "../../../assetes/classifications.svg";
import Classes from "./filteringOptions.module.css";

function FilteringOptions () {
    const [selectedFilter, setSelectedFilter] = useState("الجميع (32)");
    const filterOptions = ["الجميع (32)", "مراجعات (12)", "تسريبات (2)", "نماذج (15)"];
    return (
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
    );
}

export default FilteringOptions;