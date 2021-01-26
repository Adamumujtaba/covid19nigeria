//https://covidnigeria.herokuapp.com/api    
//used serinterval to auto update the record 
//sample tested Add Sample tested 
//Refresh rate limit 



// Closing Nav Links for small devices

function closeNav(){
   const check = document.getElementById('bar');
   var switNav = false;
   if(check.checked === true)
        check.checked = switNav;
   }





    
const api_url = 'nigeria.json';

// Chart Library from Chart.js 
async function CovidChart(){
    const data = await DataInfo();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.xs,
        datasets: [{
            label: 'Confirmed Cases',
            data: data.ys,
            fill:false,
            backgroundColor:[ 
                'rgb(255, 200, 19)'],
            borderColor: 
                ['rgb(255, 200, 19)'],
            borderWidth: 1
        },
        {
            label: 'Cases On Admission',
            data: data.yOnAd,
            fill:false,
            backgroundColor:[ 
                'rgb(0, 0, 255)'],
            borderColor: 
                ['rgb(0, 0, 255)'],
            borderWidth: 1
        },
        {
            label: 'Discharge',
            data: data.yDis,
            fill:false,
            backgroundColor:[ 
                'rgb(13, 134, 81)'],
            borderColor: 
                ['rgb(13, 134, 81)'],
            borderWidth: 1
        },
        {
            label: 'Death',
            data: data.yDeath,
            fill:false,
            backgroundColor:[ 
                'rgb(255, 0, 0)'],
            borderColor: 
                ['rgb(255, 0, 0)'],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

} //end of fun chart
CovidChart()

// End of Chart Library
 
// List of State Function 

async function DataInfo(){
    
    const xs = [];
    const ys = [];
    const yOnAd = [];
    const yDis = [];
    const yDeath = [];
    
    const response = await fetch(api_url);
    const data = await response.json();
    const mainData = data.data;
    const allState = mainData.states;
    const allConfCases = mainData.confirmedCases;


    allState.forEach(ele =>{    

        const listAllStates = ele.state;
        xs.push(listAllStates);
        const listAllConfCase = ele.confirmedCases;
        ys.push(listAllConfCase);
        const listAllCaseOnAd = ele.casesOnAdmission;
        yOnAd.push(listAllCaseOnAd);
        const listAllDischarge = ele.discharged;
        yDis.push(listAllDischarge);
        const listAllDeath = ele.death;
        yDeath.push(listAllDeath);

        // console.log(listAllDischarge)
        for(let i=0; i<listAllStates.length; i++){
            const myTable = document.getElementById('myTable');
            const row = `<tr>
                            <th>${listAllStates}</th>    
                            <th>${listAllConfCase}</th>
                            <th>${listAllCaseOnAd}</th>
                            <th>${listAllDischarge}</th>
                            <th>${listAllDeath}</th>
                        </tr>`            
            myTable.innerHTML += row;     
            if(i<listAllStates.length){
                break;
            }
        }
        
    });
    return {xs ,ys, yOnAd, yDis, yDeath}
    
    
    // console.log(allState); 

}    

setInterval(DataInfo(), 1000)
// End of list State Funtion
 
 




async function TconfCase(){
        const response  = await fetch(api_url);
        const data = await response.json();
        const dataInfo = data.data;
        const totalConfCases =  dataInfo.totalConfirmedCases;
        const divCase = document.getElementById('conf');
        divCase.append(totalConfCases);
       
        // console.log(totalConfCases)
    }
    TconfCase();


    // total Active Cases 
    async function TactiveCase(){
        const response  = await fetch(api_url);
        const data = await response.json();
        const dataInfo = data.data;
        const totalactCases =  dataInfo.totalActiveCases;
        const divCase = document.getElementById('active_case');
        divCase.append(totalactCases);
        // console.log(totalactCases)
    }
    TactiveCase();

    
// total Discharge Cases
async function TdischargeCase(){
    const response  = await fetch(api_url);
    const data = await response.json();
    const dataInfo = data.data;
    const totaldisCases =  dataInfo.discharged;
    const divCase = document.getElementById('discharge');
    divCase.append(totaldisCases);
    // console.log(dataInfo)
}
TdischargeCase();





async function deathCase(){
    const response  = await fetch(api_url);
    const data = await response.json();
    const dataInfo = data.data;
    const deathCases =  dataInfo.death;
    const divCase = document.getElementById('death');
    divCase.append(deathCases);
    // console.log(dataInfo.death)
}
deathCase();



