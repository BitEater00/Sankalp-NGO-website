const counters = document.querySelectorAll('.counter');
//const speed = 1000; // The lower the slower

//variableloader = document.getElementById("loadingneeded");
//variableloader.addEventListener('load' , e => {countermover()});
function countermover()
{

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = 1;
            const toreach = 300/target;
            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount,toreach);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

var $carousel = $('.main-carousel');
var memory = 0;
$carousel.on( 'select.flickity', function( event, index ) {
    if(memory >= 0)
    {
        document.getElementById(""+(memory+1)+"b").classList.remove("centercardb");
        document.getElementById(""+(memory+1)+"b").classList.add("commonb");
        document.getElementById(""+(memory+1)).classList.remove("centercard");
        document.getElementById(""+(memory+1)).classList.add("common");    
    }
    memory = index;
    document.getElementById(""+(index+1)).classList.remove("common");
    document.getElementById(""+(index+1)).classList.add("centercard");
    document.getElementById(""+(index+1) + "b").classList.remove("commonb");
    document.getElementById(""+(index+1)+ "b").classList.add("centercardb");

  });


  function myFunction(indexbutton) 
  {
    var dots = document.getElementById("dots"+indexbutton);
    var moreText = document.getElementById("more"+indexbutton);
    var btnText = document.getElementById("myBtn"+indexbutton);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
    $carousel.flickity('reloadCells')
  }