export async function fetchQuestions(page, limit = 10) {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${baseUrl}/posts?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    return data;
}  