import Classes from "./suggestionsList.module.css";

function SuggestionsList (props) {
  return (
    <ul className={Classes.suggestionsList}>
      {props.suggestions.map((item, index) => (
        <li
          key={index}
          onMouseDown={(e) => props.onSuggestionClick(e, item)}
          className={`${Classes.suggestionItem} ${index === props.activeIndex ? Classes.active : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionsList;