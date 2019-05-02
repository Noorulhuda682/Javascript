if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: nicer and cooler one ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ',err);
    });
  }



// Initialize Firebase
var config = {
    apiKey: "AIzaSyC0Jyx5vlwDdrRBJ1EuGw-QTrtZays4Azg",
    authDomain: "chatapp-f4825.firebaseapp.com",
    databaseURL: "https://chatapp-f4825.firebaseio.com",
    projectId: "chatapp-f4825",
    storageBucket: "chatapp-f4825.appspot.com",
    messagingSenderId: "564289029210"
};
firebase.initializeApp(config);


function sUPage() {
    document.getElementById('entryPage').style.display = 'none';
    document.getElementById('sUPage').style.display = 'block';
}
function clearSUPage() {
    document.getElementById('entryPage').style.display = 'none';
    document.getElementById('sUPage').style.display = 'none';
}

// SIGN UP CODE IS HERE
function signUp() {
    console.log('you are right');
    let name = document.getElementById("name").value;
    let email = document.getElementById("emails").value;
    let password = document.getElementById("passwords").value;
    let img = document.querySelector('#img').files[0];

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            var userObj = {
                name,
                password,
                email,
                createTime: firebase.database.ServerValue.TIMESTAMP
            }
            let userId = firebase.auth().currentUser.uid;
            let storageRef = firebase.storage().ref().child(`Userimages/${img.name}`)
            storageRef.put(img)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((sanpUrl) => {
                        userObj.img = sanpUrl
                        console.log(userObj)
                        firebase.database().ref('Users/' + userId).set(userObj)
                            .then((success) => {
                                swal({
                                    title: "Your SignUP is Successful Now SignIN",
                                    text: "You can use this account to proceed further features",
                                    icon: "success",
                                    button: "Done",
                                });
                                // document.getElementById('profImg').src        = sanpUrl;
                                // document.getElementById('profName').innerHTML =  userObj.name;
                                document.getElementById('entryPage').style.display = 'none';
                                document.getElementById('sUPage').style.display = 'none';
                                document.getElementById('siPage').style.display = 'block';





                            })
                            .catch((error) => {

                                swal({
                                    title: "Plug In", text: error.message, icon: "warning", button: "OK",
                                });
                            })
                    })

                })
                .catch((error) => {

                    var errorCode = error.code;
                    var errorMessage = error.message;
                    swal({
                        title: "Connection Error", text: errorMessage, icon: "warning", button: "OK",
                    });
                });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Connection Error", text: errorMessage, icon: "warning", button: "OK",
            });
        });
}

function entryPage() {
    document.getElementById('entryPage').style.display = 'block'
}
function clearEntry() {

    document.getElementById('olxLogo').style.display = 'block'
    document.getElementById('entryPage').style.display = 'none'


}

function signInPage() {
    document.getElementById('entryPage').style.display = 'none';
    document.getElementById('siPage').style.display = 'block';
}
function clearSIPage() {
    document.getElementById('entryPage').style.display = 'none';
    document.getElementById('siPage').style.display = 'none';
}


// SIGN IN CODE IS HERE
function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            localStorage.setItem("userAuth", JSON.stringify(success))
            swal({
                title: "Welcome",
                text: "You can use this account to proceed further features",
                icon: "success",
                button: "Done",
            });


            document.getElementById('siPage').style.display = 'none';

            firebase.database().ref('Users/')
                .once('value', (data) => {
                    let forArr = data.val();
                    for (var key in forArr) {


                        if (key == success.user.uid) {
                            document.getElementById('profName').innerHTML = forArr[key].name;
                            document.getElementById('profImg').src = forArr[key].img;
                        }

                    }
                })




        })
        .catch(function (error) {
            var errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
        });
}

function sellForm() {
    document.getElementById('sellPanel').style.display = 'block';
}

function clearSellForm() {
    document.getElementById('sellPanel').style.display = 'none';
}

// PRODUCT SENDING CODE
function sendProduct() {

    let productName = document.getElementById('productName').value;
    let price = document.getElementById('price').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let sectionVal = document.getElementById('sectionVal').value;
    let img = document.getElementById('picture').files[0];

    if (productName != '' && price != '' && picture != '') {

        let userId = firebase.auth().currentUser.uid;

        let userObj = {
            productName,
            sectionVal,
            price,
            phoneNumber,
            userId
        }
        let storageRef = firebase.storage().ref().child(`Userimages/${img.name}`)
        storageRef.put(img)
            .then((snapshot) => {
                snapshot.ref.getDownloadURL().then((sanpUrl) => {
                    userObj.img = sanpUrl
                    console.log(userObj)
                    firebase.database().ref('PRODUCTS/' + userId).push(userObj)
                        .then((success) => {
                            swal({

                                title: "Successfull",
                                text: "your product has been added",
                                icon: "success",
                                button: "Done",
                            });

                            document.getElementById('sellPanel').style.display = 'none'

                        })
                        .catch((error) => {
                            let errorMessage = error.message;
                            swal({
                                title: "Plug In",
                                text: errorMessage,
                                icon: "warning",
                                button: "OK",
                            });
                        })

                })

            })
            .catch((error) => {

                let errorCode = error.code;
                let errorMessage = error.message;
                swal({
                    title: "Connection Error",
                    text: errorMessage,
                    icon: "warning",
                    button: "OK"
                });
            });




    } else {

        swal({
            title: "Field Error",
            text: "please complete your fields ",
            icon: "warning",
            button: "OK",
        });

    }


    //  POST RECIEVING IN THE SAME UPLOADING FUNCTION
    firebase.database().ref('PRODUCTS/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                console.log(key1)
                for (var key2 in forArr[key1]) {
                    console.log(key2);
                    // console.log(forArr[key1][key2].userId)

                    let uID = JSON.stringify(forArr[key1][key2].userId)
                    let currentUser = firebase.auth().currentUser.uid;

                    if (currentUser == forArr[key1][key2].userId) {
                        document.getElementById('productSearchBlock').innerHTM += `
 <div style="border:2px solid black;height:130px;width:95%;margin-top:5px;border-radius:5px;box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.4);">
    <div style="margin-top:10px;margin-left:-50px;">
         <img src="${forArr[key1][key2].img}"  style="border:2px solid black;width:150px;height:100px;border-radius: 5px;"/>
         <span style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].price}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <span   key='${key2}' style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].productName} </span> &nbsp;&nbsp; &nbsp;&nbsp;
         <button key='${uID}' onClick="chate(this)"  style="padding:14px 53px;background:rgb(12, 12, 99);color:white;
         border:none;border-radius:5px;position: relative;left:50px;bottom:39px;">Chat</button>
    </div>
</div>
     `
                    }
                }

            }

        })




}



// PRODUCT RECIEVING CODE
window.addEventListener('load', function displayProduct() {


    firebase.database().ref('PRODUCTS/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                console.log(key1)
                for (var key2 in forArr[key1]) {
                    console.log(key2);
                    // console.log(forArr[key1][key2].userId)

                    let uID = JSON.stringify(forArr[key1][key2].userId)
                    document.getElementById('productBlock').innerHTML += `
     <div style="border:2px solid black;height:130px;width:95%;margin-top:5px;border-radius:5px;box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.4);">
        <div style="margin-top:10px;margin-left:-50px;">
             <img src="${forArr[key1][key2].img}"  style="border:2px solid black;width:150px;height:100px;border-radius: 5px;"/>
             <span style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].price}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span   key='${key2}' style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].productName} </span> &nbsp;&nbsp; &nbsp;&nbsp;
             <button key='${uID}' onClick="chate(this)"  style="padding:14px 53px;background:rgb(12, 12, 99);color:white;
             border:none;border-radius:5px;position: relative;left:50px;bottom:39px;">Chat</button>
        </div>
    </div>`


                }

            }

        })

});






// THIS IS CHATBUTTON FUNCTION
function chate(e) {
    console.log(e.parentNode);
    var imges = e.parentNode.getElementsByTagName('img');
// =========================    Sending Buttons   ====================================//
document.getElementById('chatBtn1').style.visibility = 'block';
document.getElementById('chatBtn2').style.display = 'none';

    document.getElementById('productImg').src = imges[0].src
    var spans = e.parentNode.getElementsByTagName('span')
    document.getElementById('productPrice').innerHTML = spans[0].innerHTML;
    document.getElementById('productsName').innerHTML = spans[1].innerHTML;

    localStorage.setItem('proInfParent', spans[1].getAttribute('key'))

    var o = e.getAttribute('key');
    var clickedUid = JSON.parse(o);

    localStorage.setItem('productId', clickedUid);

    firebase.database().ref('Users/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                if (key1 == clickedUid) {
                    // console.log(forArr[key1].name)
                    document.getElementById('chatUserImg').src = forArr[key1].img;
                    document.getElementById('chatUserName').innerHTML = forArr[key1].name;

                }
            }
        });

    document.getElementById('chatSectionBlock').style.display = 'block'
    document.getElementById('homeNavbar').style.display = 'none'
    document.getElementById('olxLogo').style.display = 'none'
    document.getElementById('productDisplayBlock').style.display = 'none'


}






// CHAT CODE STARTS OVER HERE
function sendMessage() {

    var message = document.getElementById('message').value;
    var userUid = firebase.auth().currentUser.uid;
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    if (hours > 12) {
        hours = hours-12;
        var time = hours + ':' + minutes + 'pm';
    }
    else {
        var time = hours + ':' + minutes + 'am';
    }

    var messageNode = {
        message,
        userUid,
        time
    }

    document.getElementById('userChatData').innerHTML = '';

    let productId = localStorage.getItem('productId');
    let proInfParent = localStorage.getItem('proInfParent');
    firebase.database().ref('PRODUCTS/' + productId).child(proInfParent).child('BUYERS/' + userUid).push(messageNode)
        .then((success) => {
            // swal({

            //     title: "Successfull",
            //     text: "your Messag has been sent",
            //     icon: "success",
            //     button: "Done",
            // });


            firebase.database().ref('PRODUCTS/' + productId).child(proInfParent).child('BUYERS/')
            .once('value', (data) => {
                var chatData = data.val();
                console.log(chatData)
                for (var key in chatData) {
                    for (var key1 in chatData[key]) {
                        console.log(chatData[key][key1].message);
                        console.log(chatData[key][key1].time);
                        if (userUid == chatData[key][key1].userUid) {
                            document.getElementById('userChatData').innerHTML += `
    <h5 style="text-align:right;margin-bottom: -6px;">
    <span style="color : green ;font-family: 'Courier New', Courier, monospace;position: relative;left:-3px;top: 10px;">${chatData[key][key1].time} </span>
    <span style="background: green;padding:9px 16px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);text-align: left;font-weight:normal;
    color:white;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; display:block;width: 150px;margin-bottom:11px;
    margin-right: 50px;border-radius: 10px;float: right;
    "> ${chatData[key][key1].message} </span></h5><br><br>`
                        }
                        else {
                            document.getElementById('userChatData').innerHTML += `
        <h5 style="text-align:left;margin-bottom: -6px;"> <span style="background: rgb(9, 9, 126);padding:9px 16px;
        color:white;margin-left: 50px;border-radius: 10px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);display:block;width: 150px;margin-bottom:11px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;float: left;">${chatData[key][key1].message}</span>
     <span style="color : rgb(5, 5, 112) ;font-family: 'Courier New', Courier, monospace;position: relative;left:7px;top: 10px;">${chatData[key][key1].time}</span>
    </h5><br><br> `
                        }
    
                    }
                }
    
            })
    
    
        document.getElementById('message').value = '';
    

        })
        .catch((error) => {
            let errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
        })

 
}




















// BACK HOME FUNCTION
function backHome() {

    document.getElementById('chatSectionBlock').style.display = 'none'
    document.getElementById('homeNavbar').style.display = 'block'
    document.getElementById('olxLogo').style.display = 'block'
    document.getElementById('productDisplayBlock').style.display = 'block'
}




function showPhoneBlock() {
    document.getElementById('phoneBlock').style.display = 'block'
}
function clearPhoneBlock() {
    document.getElementById('phoneBlock').style.display = 'none'
}


// NOW THIS IS SEARCH BOX FUNCTION
function searchProduct() {
    document.getElementById('productSearchBlock').innerHTML = '';
    var searchInp = document.getElementById('searchInp').value;
    searchInp = searchInp.toLowerCase();
    //  alert(searchInp);

    firebase.database().ref('PRODUCTS/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                console.log(key1)
                for (var key2 in forArr[key1]) {
                    console.log(forArr[key1][key2].price);
                    console.log(forArr[key1][key2].sectionVal)
                    let uID = JSON.stringify(forArr[key1][key2].userId)
                    var catageryName = forArr[key1][key2].sectionVal.toLowerCase();
                    var productName = forArr[key1][key2].productName.toLowerCase();
                    alert(catageryName);
                    alert(productName);
                    if (searchInp == productName || searchInp == catageryName && catageryName != '' && catageryName != ' ' && catageryName != null) {
                        document.getElementById('productSearchBlock').innerHTML += `
          <div style="border:2px solid black;height:130px;width:95%;margin-top:5px;border-radius:5px;box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.4);">
             <div style="margin-top:10px;margin-left:-50px;">
                  <img src="${forArr[key1][key2].img}"  style="border:2px solid black;width:150px;height:100px;border-radius: 5px;"/>
                  <span style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].price}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style="position: relative;left:50px;bottom:33px;font-size:20px; ">${forArr[key1][key2].productName} </span> &nbsp;&nbsp; &nbsp;&nbsp;
                  <button key='${uID}' onClick="chate(this)"  style="padding:14px 53px;background:rgb(12, 12, 99);color:white;
                  border:none;border-radius:5px;position: relative;left:50px;bottom:39px;">Chat</button>
             </div>
         </div>  `
                    }

                }

            }

        })

}




// BUYERS FUNCTIOS AND CODE IS HERE
function backHomeFromBuyers() {
    document.getElementById('buyers').style.display = 'none'
    document.getElementById('homeNavbar').style.display = 'block'
    document.getElementById('olxLogo').style.display = 'block'
    document.getElementById('productDisplayBlock').style.display = 'block'
}

async function buyers() {

    document.getElementById('buyers').style.display = 'block'
    document.getElementById('homeNavbar').style.display = 'none'
    document.getElementById('olxLogo').style.display = 'none'
    document.getElementById('productDisplayBlock').style.display = 'none'


    document.getElementById('buyersDisplay').innerHTML = '';
    var buyersArray = [];
    firebase.database().ref('PRODUCTS/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                // console.log(forArr[key1])
                let userUID = firebase.auth().currentUser.uid;
                for (var key2 in forArr[key1]) {
                    if (key1 == userUID) {
                        //key2 is  product parent
                        // console.log(forArr[key1][key2])
                        for (var key3 in forArr[key1][key2].BUYERS) {
                            //    console.log(key3)
                            buyersArray.push(key3);
                            for (var key4 in forArr[key1][key2].BUYERS[key3]) {
                                // console.log(key4)  has messages nodes
                                // console.log(     key4 );
                            }


                        }


                    }

                }
            }

            buyersArray.map((e) => {
                firebase.database().ref('Users/')
                    .once('value', (data) => {

                        let forArr = data.val();
                        for (var key in forArr) {
                            if (key == e) {
                                console.log(e)
                                console.log(key)
                                document.getElementById('buyersDisplay').innerHTML += `
                         <div onClick="BuyerChat(this)" key="${key}" id="buyerDiv" style="background: white;width: 98%;z-index: 2px;font-family: Arial, Helvetica, sans-serif;font-size: 18px;
                              box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);margin-left:  1%;border-radius: 5px;font-weight: bold;margin-bottom:10px;">
                                 <table>
                                     <tr>
                                        <td><img  id="productImg" src="${forArr[key].img}" style="width:90px;height:60px;border-radius: 5px;margin-bottom: -3px;" > </td>
                                        <td></td><td></td><td></td>
                                        <td  id="productsName" style="position: relative;top:-13px;">${forArr[key].name}</td>
                                     </tr>
                                 </table>
                          </div>`;

                            }

                        }
                    })
            })

        })

}



// RETRIEVING CHAT DATA
function BuyerChat(e) {

    var CurrentBuyer = e.getAttribute('key');
    localStorage.setItem('recieverSending',CurrentBuyer);

    // =========================    Sending Buttons   ====================================//
    document.getElementById('chatBtn2').style.visibility = 'block';
    document.getElementById('chatBtn1').style.display = 'none';


    document.getElementById('buyers').style.display = 'none';
    document.getElementById('chatSectionBlock').style.display = 'block';
    document.getElementById('userChatData').innerHTML = '';

    firebase.database().ref('PRODUCTS/')
        .once('value', (data) => {
            let forArr = data.val();
            for (var key1 in forArr) {
                // console.log(forArr[key1])
                var UserUID = firebase.auth().currentUser.uid;
                for (var key2 in forArr[key1]) {
                    if (key1 == UserUID) {
                        //key2 is  product parent
                        // console.log(forArr[key1][key2])
                        for (var key3 in forArr[key1][key2].BUYERS) {
                            console.log(key3)
                            if (key3 == CurrentBuyer) {
                                for (var key4 in forArr[key1][key2].BUYERS[key3]) {
                                    // console.log(key4)  has messages nodes
                                    //   console.log(  key4 );
                                    console.log(forArr[key1][key2].BUYERS[key3][key4].message);

                                    if (UserUID == forArr[key1][key2].BUYERS[key3][key4].userUid) {
                                        document.getElementById('userChatData').innerHTML += `
                                <h5 style="text-align:right;margin-bottom: -6px;">
                                <span style="color : green ;font-family: 'Courier New', Courier, monospace;position: relative;left:-3px;top: 10px;">${forArr[key1][key2].BUYERS[key3][key4].time} </span>
                                <span style="background: green;padding:9px 16px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);text-align: left;font-weight:normal;
                                color:white;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; display:block;width: 150px;margin-bottom:11px;
                                margin-right: 50px;border-radius: 10px;float: right;
                                ">${ forArr[key1][key2].BUYERS[key3][key4].message} </span></h5><br><br>`
                                    }
                                    else {
                                        document.getElementById('userChatData').innerHTML += `
                                    <h5 style="text-align:left;margin-bottom: -6px;"> <span style="background: rgb(9, 9, 126);padding:9px 16px;
                                    color:white;margin-left: 50px;border-radius: 10px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);display:block;width: 150px;margin-bottom:11px;
                                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;float: left;">${ forArr[key1][key2].BUYERS[key3][key4].message} </span>
                                 <span style="color : rgb(5, 5, 112) ;font-family: 'Courier New', Courier, monospace;position: relative;left:7px;top: 10px;">${forArr[key1][key2].BUYERS[key3][key4].time}</span>
                                </h5><br><br> `
                                    }


                                }
                            }
                        }


                    }

                }

            }
        })

}





// ============================  BUYERS MESSAGE SENDING CODE  =======================================
function recieverSending(){
var getCurrentBuyer = localStorage.getItem('recieverSending');
console.log(getCurrentBuyer);



var message = document.getElementById('message').value;
var userUid = firebase.auth().currentUser.uid;
var t = new Date();
var hours = t.getHours();
var minutes = t.getMinutes();
if (hours > 12) {
    hours = hours-12;
    var time = hours + ':' + minutes + 'pm';
}
else {
    var time = hours + ':' + minutes + 'am';
}

var messageNode = {
    message,
    userUid,
    time
}

document.getElementById('userChatData').innerHTML = '';

// let productId = localStorage.getItem('productId');
let productInfParent = localStorage.getItem('proInfParent');

firebase.database().ref('PRODUCTS/' + userUid).child(productInfParent).child('BUYERS/' + getCurrentBuyer).push(messageNode)
    .then((success) => {



    //   alert('message sent');

      firebase.database().ref('PRODUCTS/')
      .once('value', (data) => {
          let forArr = data.val();
          for (var key1 in forArr) {
              // console.log(forArr[key1])
              var UserUID = firebase.auth().currentUser.uid;
              for (var key2 in forArr[key1]) {
                  if (key1 == UserUID) {
                      //key2 is  product parent
                      // console.log(forArr[key1][key2])
                      for (var key3 in forArr[key1][key2].BUYERS) {
                          console.log(key3)
                          if (key3 == getCurrentBuyer) {
                              for (var key4 in forArr[key1][key2].BUYERS[key3]) {
                                  // console.log(key4)  has messages nodes
                                  //   console.log(  key4 );
                                  console.log(forArr[key1][key2].BUYERS[key3][key4].message);

                                  if (UserUID == forArr[key1][key2].BUYERS[key3][key4].userUid) {
                                      document.getElementById('userChatData').innerHTML += `
                              <h5 style="text-align:right;margin-bottom: -6px;">
                              <span style="color : green ;font-family: 'Courier New', Courier, monospace;position: relative;left:-3px;top: 10px;">${forArr[key1][key2].BUYERS[key3][key4].time} </span>
                              <span style="background: green;padding:9px 16px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);text-align: left;font-weight:normal;
                              color:white;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; display:block;width: 150px;margin-bottom:11px;
                              margin-right: 50px;border-radius: 10px;float: right;
                              ">${ forArr[key1][key2].BUYERS[key3][key4].message} </span></h5><br><br>`
                                  }
                                  else {
                                      document.getElementById('userChatData').innerHTML += `
                                  <h5 style="text-align:left;margin-bottom: -6px;"> <span style="background: rgb(9, 9, 126);padding:9px 16px;
                                  color:white;margin-left: 50px;border-radius: 10px;box-shadow:  3px 3px  rgba(0, 0, 0, 0.5);display:block;width: 150px;margin-bottom:11px;
                                  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;float: left;">${ forArr[key1][key2].BUYERS[key3][key4].message} </span>
                               <span style="color : rgb(5, 5, 112) ;font-family: 'Courier New', Courier, monospace;position: relative;left:7px;top: 10px;">${forArr[key1][key2].BUYERS[key3][key4].time}</span>
                              </h5><br><br> `
                                  }


                              }
                          }
                      }


                  }

              }

          }
      })
      .then((success)=>{
        //   alert('messages retirved');
      })
      .catch((error)=>{
        let errorMessage = error.message;
          swal({
            title: "Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
         })
      })


    })
    .catch((error)=>{
        let errorMessage = error.message;
        swal({
            title: "Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
        });

    })


}








































// SIGN OUT CODE IS HERE
function logOut() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
        // Sign-out successful.
        window.location = 'index.html';


    }).catch(function (error) {
        var errorMessage = error.message;
        swal({
            title: "Internet Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
        });
    });
}

if ('serviceWorker' in navigator) {

    console.log('Service Worker is supported');

    // if service worker supported then register my service worker
    navigator.serviceWorker.register('firebase-messaging-sw.js').then(function (reg) {
        console.log('Successfully Register :^)');

        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (subscription) {
            console.log('subscription:', subscription.toJSON());
            // GCM were used this endpoint
            console.log('endpoint:', subscription.endpoint);
        });
    })
        .catch((err) => {
            console.log('service worker failed', err);
        })
}
