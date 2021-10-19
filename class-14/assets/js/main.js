        // var, let, const

        let demo = document.getElementById('test');
        demo.innerHTML = 'Anis'
        //Variable
        let name = 'Pixel IT' //string
        let x = 500; //number
        let y = 300;
        let result = x / y;
        // console.log(result);
        // alert("I am From Alert")
        
        // Array
        let moreArray = [20, 30, 40, 'Anis', "pixel It", 30, 'New Value', 'another post']
        // console.log(moreArray[4]);

        //loop

       for(let i= 0; i < moreArray.length; i++){
            console.log(moreArray[i]);
       }

        //object
        let obj ={
            name:"anis",
            age: 30,
            district:'comilla',
        }

        // console.log(obj.district);


        //Conditional Statement
        let newAge=60;
        if(newAge>18){
                console.log('You are adult');
        }else if(newAge<18 && newAge> 10){
            console.log('You Are Boy' );
        }else{
            console.log('You Are Kids');
        }

        let fName= 20;
        let lName= 50;

        let func = function(x,y) {
            let res= fName + lName;
            
            return res;
        }
        console.log(func());

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
        })