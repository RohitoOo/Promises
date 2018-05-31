let promiseToCleanRoom = new Promise(function(resolve,reject){

  let isClean = true;

// let isClean = false;

  if(isClean){
    resolve("Clean")
  }else{
    reject("Dirtty!")
  }

})

promiseToCleanRoom

.then(function(response){
  console.log("The room is " + response)
})

.catch(function(response){
  console.log("The room is " + response)
})


/// Embedded Promises




let cleanRoom = function(){
  return new Promise(function(resolve,reject){
     reject('Cleaned the Room')
//   resolve('Cleaned the Room')

  })
}

let removeGarbage = function(){
  return new Promise(function(resolve,reject){
    reject('Garbage Removed')
//  resolve('Garbage Removed')

  })
}


let rewardEarned = function(){
  return new Promise(function(resolve, reject){
    reject("Here's your Cookie")
//  resolve("Here's your Cookie")

  })
}

cleanRoom().then(function(message){
  console.log(message)
      return removeGarbage()
    }).then(function(message){
      console.log(message)
      return rewardEarned()
    }).then(function(message){
      console.log(message)
      console.log("Well Done!")
    })
