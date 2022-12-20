
document.addEventListener("DOMContentLoaded", function(event){

// function handleSubmit(){                                   
let submit = document.getElementById("github-form") ////we need to prevent default on whole form
console.log(submit)


submit.addEventListener("submit", function(event) {  ///submit event will ignore type=text so we get action on submit bottom
    event.preventDefault()                                        
    let forminput = document.querySelector("#search")
    
    console.log(forminput.value)
    getDataAndInputUserName(forminput.value)

    
})

// }


function getDataAndInputUserName(user){

    let onlyAUserURL = `https://api.github.com/search/users?q=${user}`
 
 fetch( onlyAUserURL
    
     ,{
    method: "GET",
    headers: {"Accept":"application/vnd.github.v3+json"}
 }).
    then(response => response.json()).
    then(data =>{console.log(data)
      let items =  data.items
      handleUserDetail(items)//array of objects

    
    }
)}
   





function handleUserDetail(items){

 let list = document.querySelector("#user-list")
  //user.forEach(element => {
  

    for(let item of items){ console.log(item)
        
      
        
      let listItem =  document.createElement("li")

      listItem.addEventListener("click", x => dataRender(item))
      
      
         //let datarender = item.login; items[0].avatar_url; element.items[0].html_url
         listItem.innerText =   item.login
         listItem.setAttribute("id", "n" +  Math.random().toString(16).slice(2))
        // item.innertext = item.avatar_url        // console.log(list.innertext)
         list.appendChild(listItem)  //console.log(list.append(github-container))

 
    }
// }
// )
}

let unorder = document.querySelector("#user-list")

// unorder.addEventListener("click", dataRender(this.childNodes) )





function dataRender(item){



    let repoURL = `https://api.github.com/users/${item.login}/repos`
    fetch(repoURL).then(res => res.json())
    .then(data => 
        {
           let contRepos =  document.querySelector("#repos-list")
           for(let repo of data){
                let a = document.createElement("a")
                a.setAttribute("href", repo.html_url)
                a.innerText = repo.name
                contRepos.append(a)
           }

        })

 


}






































// data.items[0].avatar_url
// data.items[0].login
// data.items[0].html_url
// call a for each on items?































})