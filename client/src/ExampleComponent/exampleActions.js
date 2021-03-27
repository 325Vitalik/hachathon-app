export const SEARCH_ACTION= 'SEARCH_ACTION';

export function searchAction(query){
    return (dispatch)=>{
        const url=new URL('http://localhost:5000/');
        const params={search:query};
        url.search=new URLSearchParams(params).toString();

        fetch(url).then(async (response)=>{
        })
    }
}