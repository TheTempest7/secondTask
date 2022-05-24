

let currentDate= new Date();
currentDate=currentDate.getFullYear(); /* take current year */



let currentYearMomentObject=moment(`${currentDate}`,'YYYY');/**  take data due to moment.js labrary */
let months=currentYearMomentObject._locale._months;



let eachMonthMomentObject= Object.keys(months).map(item=>
    moment((`2022-${+item+1}`),'YYYY-M'));
let amountOfDaysInEachMonth=eachMonthMomentObject.map(item=>item.daysInMonth());/** get amount of days in every month in array */


let collection=[];

if(months.length==amountOfDaysInEachMonth.length)
{
    for(let i=0;i<months.length;i++){
    collection.push([months[i],amountOfDaysInEachMonth[i]])           /* to form all i need data collection  */
    }
}
else{
    alert('data error')
} 


let entrancePoint=document.body.querySelector('table');

entrancePoint.innerHTML=collection.map(item=>(                       /* insert data in HTML  */
`<tr class="table__range">
    <td class="table__month">${item[0]}</td>
    <td class="table__days">${item[1]}</td>
</tr>`
)).join("")



