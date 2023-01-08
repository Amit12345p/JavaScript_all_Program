//back.html///
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//    <style>
//     .button_su {
//   background-color: #4CAF50;
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// }
//    </style>
// </head>
// <body style="background-color:powderblue;">

//    <h1><p style="text-align: center;">Press back button to go previes page</p></h1>
    
//     <button class = "button_su" onclick="goback()">Go Back</button>
//     <script>
//         function goback(){
//             window.history.back();

//         }

//         // alert (location.herf);
//         // if(confirm("want to visit youtube?")){
//         //     location.href = "https://www.youtube.com/";
//         // }



//     </script>

    
// </body>
// </html>


//index.html///
{/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Click the button to show the date</p>

    <button onclick="myfunction()">Try It</button>

    <p id="Demo"></p>

    <script>
        // function myfunction(){
        //     var d = new Date();
        //     d.setHours(6);
        //     document.getElementById("Demo").innerHTML = d;


        // }
       

        (function(){
            setInterval(() => {
                var d = new Date().toLocaleString();
                document.getElementById("Demo").innerHTML = d;
            }, 1000)

        })();

        

    </script>
</body>
</html> */}


//search.html//
{/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .button{
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1><p class="para" style="text-align: center;">i am the one</p></h1>
    <h1><p class="para" style="text-align: center;">i am the only one</p></h1>
    <h1><p id="heading" style="text-align: center;">I am Amit Patel</p></h1>

    <form action="" style="text-align: center;">
        <label for="">male</label>
        <input type="radio" name="gender" id="">
        <label for="">female</label>
        <input type="radio" name="gender" id="">
        <label for="">malefemale</label>
        <input type="radio" name="gender" id="">

    </form>
    <button onclick="changecontent()">Click me</button>
    <script>
        const changecontent = () => { 
        document.getElementById('heading').innerHTML = "Welcome to RKU";

    }

    console.log(document.getElementsByClassName('para'));
    </script>
</body>
</html> */}


{/* ///dom/// */}
{/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="main-div">
        <div class="child-one">
            <h1><p style="text-align: center;">i am child one</p></h1>  
        </div>
        <div class="child-two">
            <h1><p style="text-align: center;">i am child two</p></h1>
        </div>
        <div class="child-three">
            <h1><p style="text-align: center;">i am child three</p></h1>
        </div>

    </div>

    <script>
        const firstchild = document.body.firstElementChild.firstElementChild;
        console.log(firstchild);
        firstchild.style.color = 'red';

        const childTwo = document.querySelector('.child-two');
        console.log(childTwo);
        childTwo.style.color = 'green';

        const childThree = document.querySelector('.child-three');
        console.log(childThree);
        childThree.style.color = 'yellow';

        document.body.style.background='grey';



    </script>
</body>
</html> */}