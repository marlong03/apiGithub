const btn = document.getElementById("btn")
            const followers = document.getElementById("followers")
            const following = document.getElementById("following")
            const namePerson = document.getElementById("namePerson")
            const cards = document.querySelector(".cards")
            const bio = document.getElementById("bio")
            const search = document.getElementById("search")
            const API = "https://api.github.com/users/"
            const imgAvatar = document.getElementById("imgAvatar")
            btn.addEventListener("click",busqueda)
            search.addEventListener("keyup",function(x){
                if(x.keyCode == 13){
                    busqueda()
                }
            })
            function busqueda(){
                
                let nombre = search.value
                if(nombre != ""){

                    fetch(API + nombre)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        cards.innerHTML = '<a href="'+res.html_url+'" target="_blank"><div class="card" style="width: 14rem;"><img class="card-img-top" src="'+res.avatar_url+'"id ="imgAvatar"alt="Card image cap"><div class="card-body"><h3 id="namePerson">'+res.name+'</h3><div class="stadist"><div class="stadistDesign"><small>Following </small><h3 id="following">'+res.following+'</h3></div><div class="stadistDesign"><small>Followers </small><h3 id="followers">'+res.followers+'</h3></div></div></div></div></a>'
                    })
                }else{
                    alert("no se a podido encontrar el usuario")
                }
            }