const api = async () => {
    
    const res = await fetch(` https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
        const items = data.data.tools;
        // console.log(data)
      
        buttonGroup(items);
        // console.log(data.data)
    
}

//for showing button and passing id 

const buttonGroup =(items) =>{
     console.log(items)
      const tabs = document.getElementById('tab-container');
      items.slice(0,3).forEach(item=>{
          const div= document.createElement('div');
          div.classList = `tabs`;
          div.innerHTML =`
          <button onclick="handleNews('${item.id}')"  class="btn btn-secondary">sort</button>
          
          `
          
          tabs?.appendChild(div);
      })
}

const handleNews =async(tabId) =>{
       const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${tabId}`);
       const data = await res.json();
    //    console.log(data.data)
       const items = data.data;
    //   console.log(item)
    displayAi(items)
}

//for showing cards 
const displayAi = items => {
    console.log(items)
    const cardContainer = document.getElementById('cards');
    items.forEach(item => {
        console.log(item)
         let count =0;
        const div = document.createElement('div');
        div.classList = `card  bg-base-100 shadow-xl`;
        div.innerHTML = `
        <figure><img src="${item.link[0]}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p>${++count}. ${item.features[0]}</p>
          <p>${++count }. ${item.features[1]}</p>
          <p>${++count}. ${item.features[2]}</p>

          <div class="card-actions items-center justify-between">
            <h2 class="card-title">${item.name}</h2>
            <button class="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          </div>
        `;
        cardContainer.appendChild(div);
    });
}

function handleSearch(){
    
}
api();