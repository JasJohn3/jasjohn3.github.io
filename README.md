# Portfolio Jason Lane Johnson
This is a personal portfolio of various HTML and CSS works.  The site is meant to demonstrate my skills and education as well as highlight various projects.  The site was based off of the EdgeLedger designs and customized to fit my educational experience.

##Hamburger Menu and Javascript
Utilizing Javascript, the Hamburger Menu design was built for responsive mobile experience.  To accomplish this task, a custom css class was created called .show.  This class is then added to the classlistID using javascript creating a toggle on effect.  This can be viewed in the following code example.
Targeted HTML Elements:
```
      <nav class="navbar" id="navbar">
        
        <h1 class="logo">
          <span class="text-primary">Portfolio</span> J<span class="text-secondary"></span>L</span>J
          </h1>
          <button class="hamburger btn btn-primary" id="hamburger">
            <i class="fas fa-bars fa-2x"></i>
          </button>
        <ul class="nav-ul" id="nav-ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> 
```
Javascript Example: 
```
  const hamburger = document.getElementById('hamburger');
  const navUL = document.getElementById('nav-ul');

  hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
  })
``` 

  Additionally, we then add a toogle to navUL that toggles the option off when any link withing the hamburger menu is selected.  This can be view in the following code.
``` 
  navUL.addEventListener('click',()=>{
    navUL.classList.toggle('show');
  })
```
