export async function fetchQuestions(page, limit = 10) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    return data;
}