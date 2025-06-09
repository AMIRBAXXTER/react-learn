export default async function useFetch(url, options={}, setData) {
    const res = await fetch(url, options);
    const rows = await res.json();
    setData(rows);
    return rows;
}
