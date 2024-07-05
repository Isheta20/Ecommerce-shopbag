document.addEventListener('DOMContentLoaded', ()=>{
    const searchBar = document.getElementById('search-bar');
    const resultsContainer = document.getElementById('results');
    let apiData = [];

    fetch('https://fakestoreapi.com/products').then((response)=>response.json()).then((data)=>{
        displayResults(data);
        data.forEach((element)=>{
            apiData.push(element);
        })
    });

    console.log(apiData);


    searchBar.addEventListener('input', ()=>{
        const query = searchBar.value.trim().toLowerCase();//remove before and after blank space
        // console.log(query);

        if(query.length>0){
            // fetch('https://fakestoreapi.com/products').then((response) => response.json()).then(data=>{//removed parenthisis around data to return value o/w hv to specify
            //     const filteredItems = data.filter((item)=>{
            //         return item.title.toLowerCase().includes(query);
            //         //includes chks if preesent in string returns boolean
            //     });
            //     // console.log(filteredItems);
            //     displayResults(filteredItems);
            // });
            // //fetch ->response converted json to array then got data



            const filteredItems = apiData.filter((item)=>{
                return item.title.toLowerCase().includes(query);
                //includes chks if preesent in string returns boolean
            });
            // console.log(filteredItems);
            displayResults(filteredItems);
        }
    });

    function displayResults(items){
        resultsContainer.innerHTML=" ";//remove all the earlier displayed items so that the new items according to search don't get appended

        items.forEach(item=>{
            const itemDiv = document.createElement("div");
            itemDiv.classList.add('item');

            itemDiv.innerHTML = `
                <div id="image"><img src="${item.image}"/></div>
                <h3>${item.title}</h3>
                <h2>$${item.price}</h2>
            `;

            resultsContainer.appendChild(itemDiv);
        })
    }

    const lowtohigh = document.querySelectorAll("option")[1];
    lowtohigh.addEventListener('click', ()=>{
        
    })
})

// console.log(document.querySelectorAll("option")[1]);

