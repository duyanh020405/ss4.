export function formatDate(date){
   let day = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();
   return (`${day}/${month}/${year}`)
}   
