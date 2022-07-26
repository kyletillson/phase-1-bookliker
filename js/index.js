
document.addEventListener("DOMContentLoaded", function() {});

fetch(`http://localhost:3000/books`)
.then(res => res.json())
.then((data) => {

    data.forEach(book => {
        // create a new li
        const li = document.createElement('li')
        //set text of that li to the book.title
        li.innerText = book.title
        //append the li to the ul
        const ul = document.querySelector('#list')
       
        
        ul.append(li)

        
         })
         
    });



   


   



    
        





        


