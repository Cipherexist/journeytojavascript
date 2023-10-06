  //   console.log("DOM", document)

  function showpokemon(searchstring,typeselect)
  {
              fetch("https://pokeapi.co/api/v2/pokemon").then(function(response)
          {
              return response.json()
          }).then(function(data)
          {   
              let x = 0; 
              // const content = document.getElementById("pokebox")
              // const newpokebox = document.createElement("div")
              // content.appendChild(newpokebox)

              // const newimage  = document.createElement("img") 
              // const newname = document.createElement("p") 

              // console.log(content)
              // newimage.srcset = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+ 1 +".svg"
              // newname.textContent = "name"
              // newpokebox.appendChild(newimage)
              // newpokebox.appendChild(newname)
             // document.getElementById("pokebox").empty() 
              document.getElementById("pokebox").innerHTML = ""
             const content = document.getElementById("pokebox")
           
              data.results.forEach(pokemon => {
                  x= x+ 1; 
              //      console.log(pokemon.name)
              //     console.log("https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+ x +".svg")
              if(searchstring==""&&typeselect=="ALL")
              {
                 
                  const newpokebox = document.createElement("div")
                  let pokejsonattributes = ""
                  content.appendChild(newpokebox)
                  const newimage  = document.createElement("img") 
                  const newname = document.createElement("p") 
                  newimage.srcset = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+ x +".svg"
                  newname.textContent = pokemon.name
                  newpokebox.appendChild(newimage)
                  newpokebox.appendChild(newname)
              
                  //GETTING ATTRIBUTES
                  // getPokeAttributes(pokemon.name, pokemon.url); 
                  // console.log(pokejsonattributes)
                  fetch(pokemon.url).then(function(response)
                  {
                      return response.json();
                  }).then(function(pokeatr)
                  {
                      // return pokemonresult
                  //    console.log(pokename, pokemonresult.types[0].type.name)
                  //   console.log(pokename, pokemonresult.types[1].type.name)
                  //    console.log(pokename, pokemonresult.types)
                  //    console.log(pokemon.name,pokeatr)
                      pokeatr.types.forEach(atr => {
                      //  console.log(pokemon.name, atr.type.name)
                      //  const content = document.getElementById("pokebox")
                          const attrbox  = document.createElement("span")
                          let attrname = atr.type.name.toUpperCase(); 
                          attrbox.textContent = attrname
                          
                         // console.log("ATTRIBUTE:",attrname)
                          switch (attrname) {
                              case "GRASS":
                                  attrbox.style.backgroundColor = "#A8DF8E";
                                
                              break; 
                              case "POISON": 
                                 attrbox.style.backgroundColor = "#836096";
                                 attrbox.style.color = "#FFFFFF";
                              break; 
                              case "FIRE":
                              attrbox.style.backgroundColor = "#C70039";
                              attrbox.style.color = "#FFFFFF";
                              break;
                              case "FLYING":
                              attrbox.style.backgroundColor = "#1D5B79";
                              attrbox.style.color = "#FFFFFF";
                              break; 
                              case "WATER":
                              attrbox.style.backgroundColor = "#78C1F3";
                              break;  
                              case "BUG":
                              attrbox.style.backgroundColor = "#1A5D1A";
                              attrbox.style.color = "#FFFFFF";
                              break;
                              case "NORMAL":
                              attrbox.style.backgroundColor = "#ECE5C7";
                              break;  
                              default:
                              attrbox.style.backgroundColor = "1AACAC";
                              break;
                          }




                      newpokebox.appendChild(attrbox)
                      });

                  //   return pokejsonattributes =  pokemonresult

                  }).catch(function(error)
                  {
                      console.log("Error",error)
                  })
              }
              else 
              {
                 
                if(searchstring!="")
                {

                    if(pokemon.name.toLowerCase().includes(searchstring.toLowerCase()))
                    {
                    
                    const newpokebox = document.createElement("div")
                    let pokejsonattributes = ""
                    content.appendChild(newpokebox)
                    const newimage  = document.createElement("img") 
                    const newname = document.createElement("p") 
                    newimage.srcset = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+ x +".svg"
                    newname.textContent = pokemon.name
                    newpokebox.appendChild(newimage)
                    newpokebox.appendChild(newname)
                
                    fetch(pokemon.url).then(function(response)
                    {
                        return response.json();
                    }).then(function(pokeatr)
                    {
                       
                        pokeatr.types.forEach(atr => {
                   
                            const attrbox  = document.createElement("span")
                            let attrname = atr.type.name.toUpperCase(); 
                            attrbox.textContent = attrname
                        
  
  
                              // console.log("ATTRIBUTE:",attrname)
                              switch (attrname) {
                                case "GRASS":
                                    attrbox.style.backgroundColor = "#A8DF8E";
                                  
                                break; 
                                case "POISON": 
                                   attrbox.style.backgroundColor = "#836096";
                                   attrbox.style.color = "#FFFFFF";
                                break; 
                                case "FIRE":
                                attrbox.style.backgroundColor = "#C70039";
                                attrbox.style.color = "#FFFFFF";
                                break;
                                case "FLYING":
                                attrbox.style.backgroundColor = "#1D5B79";
                                attrbox.style.color = "#FFFFFF";
                                break; 
                                case "WATER":
                                attrbox.style.backgroundColor = "#78C1F3";
                                break;  
                                case "BUG":
                                attrbox.style.backgroundColor = "#1A5D1A";
                                attrbox.style.color = "#FFFFFF";
                                break;
                                case "NORMAL":
                                attrbox.style.backgroundColor = "#ECE5C7";
                                break;  
                                default:
                                attrbox.style.backgroundColor = "1AACAC";
                                break;
                            }
  
  
  
                        newpokebox.appendChild(attrbox)
                        });
  
                    }).catch(function(error)
                    {
                        console.log("Error",error)
                    })
  
                    }
                }
                else 
                {
                    let detected = false; 
                    
                    const newpokebox = document.createElement("div")
                    let pokejsonattributes = ""
                  
                    const newimage  = document.createElement("img") 
                    const newname = document.createElement("p") 
                    newimage.srcset = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"+ x +".svg"
                    newname.textContent = pokemon.name
                    newpokebox.appendChild(newimage)
                    newpokebox.appendChild(newname)
                
                    fetch(pokemon.url).then(function(response)
                    {
                        return response.json();
                    }).then(function(pokeatr)
                    {
                       
                               pokeatr.types.forEach(atr => {
                   
                            const attrbox  = document.createElement("span")
                            let attrname = atr.type.name.toUpperCase(); 
                            attrbox.textContent = attrname
                        
  
  
                              // console.log("ATTRIBUTE:",attrname)
                              switch (attrname) {
                                case "GRASS":
                                    attrbox.style.backgroundColor = "#A8DF8E";
                                  
                                break; 
                                case "POISON": 
                                   attrbox.style.backgroundColor = "#836096";
                                   attrbox.style.color = "#FFFFFF";
                                break; 
                                case "FIRE":
                                attrbox.style.backgroundColor = "#C70039";
                                attrbox.style.color = "#FFFFFF";
                                break;
                                case "FLYING":
                                attrbox.style.backgroundColor = "#1D5B79";
                                attrbox.style.color = "#FFFFFF";
                                break; 
                                case "WATER":
                                attrbox.style.backgroundColor = "#78C1F3";
                                break;  
                                case "BUG":
                                attrbox.style.backgroundColor = "#1A5D1A";
                                attrbox.style.color = "#FFFFFF";
                                break;
                                case "NORMAL":
                                attrbox.style.backgroundColor = "#ECE5C7";
                                break;  
                                default:
                                attrbox.style.backgroundColor = "1AACAC";
                                break;
                            }
  
  
                            if(typeselect.includes(attrname))
                            {
                                detected = true
                            }
                        newpokebox.appendChild(attrbox)
                        });
                        if(detected == true)
                        {
                            content.appendChild(newpokebox)
                        }
                    
                    }).catch(function(error)
                    {
                        console.log("Error",error)
                    })
  
                 
                }
                
                
                  
              }
                

              });



              //let bulba = data.results[1].url
              // console.log(data)
              // console.log(bulba)
              
          }).catch(function(error)
          {
              console.log(error)
          })
  }

  //RUNNING IN FIRST LOAD
  showpokemon("","ALL")


  const textsearch = document.getElementById("search_text")


  textsearch.addEventListener("change",function()
  {
      // console.log("TEXT",textsearch.value)
      showpokemon(textsearch.value,"ALL")
  })

  const sortbyattr  = document.getElementById("search_selector") 

  sortbyattr.addEventListener("change",function()
  {
   // console.log(sortbyattr.value)
    showpokemon("",sortbyattr.value)
  })

  function getPokeAttributes(pokename, pokelink)
  {  
     
      fetch(pokelink).then(function(response)
      {
          return response.json();
      }).then(function(pokemonresult)
      {
          // return pokemonresult
      //    console.log(pokename, pokemonresult.types[0].type.name)
       //   console.log(pokename, pokemonresult.types[1].type.name)
      //    console.log(pokename, pokemonresult.types)

          // pokemonresult.types.forEach(atr => {
          //     console.log(pokename, atr.type.name)
          //     const content = document.getElementById("pokebox")
      
          // });

          return pokejsonattributes =  pokemonresult

      }).catch(function(error)
      {
          console.log("Error","error inside")
      })

    
  }
