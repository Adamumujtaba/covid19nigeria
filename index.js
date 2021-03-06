<html>
<head>
<title>COVID-19</title>    
<link rel="stylesheet" href="style.css" />
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="JavaScript.js"></script>
 
</head>
<body>
   
   
<!--Header-->
    <header>
    <div class="container">
                <img src="Images/coat.png" id="coat"  alt="logo">            
                <div class="header_text">
                <h2>Covid-19 <span>Nigeria</span></h2>
                </div>
                <img src="Images/ncdc.jpg" id="ncdc"  alt="NCDC logo">
    </div>    
    </header>

<!-- End of Header  -->

    
    
<!----------------Navigation Bar----------------->
    <nav>
        <div class="container"> 
            <input type="checkbox" id="bar">
            <label for="bar">
        <div class="bar">
            <div class="bars"></div>
            <div class="bars"></div>
            <div class="bars"></div>
        </div>
        </label>

            <div class="nav">
            <ul>
                <a href="./index.js" ><li>Home</li></a>
                <a href="./#state" onclick="closeNav()"><li>State</li></a>
                <a href="./#map" onclick="closeNav()"><li>Map</li></a>
                <a href="https://covid19.ncdc.gov.ng/"><li>NCDC</li></a>
                <a href="aboutMe.js"><li>About</li></a>  
            </ul>
            </div>
            
            </div>
    
    </nav>
<!----------------End of Navigation bar--------->
    
    <main>
        <div class="container">
            <div class="main">
                <div class="case_conf">
                <h2 >Total Confirmed Cases</h2>        
                </div>

                <div class="total_conf">              
                 <h1><span id="conf"></span></h1>
                </div>
            </div>       

            <div class="main">
                <div class="case_act">
                <h2>Active Cases</h2>        
                </div>

                <div class="total_act">                   
                <h1><span id="active_case"></span></h1>
                </div>
            </div>
            
            
            <div class="main">
                <div class="case_dis">
                <h2 >Discharge Cases</h2>        
                </div>

                <div class="total_dis">
                    <h1><span id="discharge"></span></h1>
                </div>
            </div>
            
            <div class="main">
                <div class="case_d">
                <h2 >Death</h2>        
                </div>

                <div class="total_d">
                    <h1><span id="death"></span></h1>
                 </div>
            </div>
             
        
        </div>
    
    </main>
    
<!---------------Main------------------------->

<!----------  Table for each state--------->

    <section id="state">

        <div class="container">
            <table>
                <thead>
                    <th>State</th>
                    <th>Confirmed Cases</th>
                    <th>Cases On Admission</th>
                    <th>Discharge</th>
                    <th>Death</th>
                </thead>

                <tbody id="myTable">
                                            
                </tbody>

            </table>
        </div>

    </section>


    <div class="chart">
        <h1>chart</h1>
        <div class="container">
        
    <canvas id="myChart" width="200" height="150"></canvas>
           
        </div>
    </div>


<!---------- End Of  Chart--------->

    <div class="map">
        <h1 id="map">Mapping Of Goelocation</h1>
        <div class="container">

            <div>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070159.765541064!2d4.177499039943095!3d9.017364398026197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1611354047034!5m2!1sen!2sng" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070159.765541064!2d4.177499039943095!3d9.017364398026197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1611353897973!5m2!1sen!2sng" width="400" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

           
            
            <div class="prevent">
               <h3>  To prevent the spread of COVID-19:</h3>
               <ol>
                <li> Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                <li> Maintain a safe distance from anyone who is coughing or sneezing. </li>
                <li> Wear a mask when physical distancing is not possible.</li>
                <li> Don’t touch your eyes, nose or mouth. </li>
                <li> Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                <li> Stay home if you feel unwell. </li>
                <li> 
                    If you have a fever, cough and difficulty breathing, seek medical attention.</li>
            </ol> 
            
            </div>

        </div>


    </div> 
<!-- End of Map -->



    <!-- Footer -->
    <footer>
        <div class="container">
            
            <div>
                <h2>Quick Links</h2>
                <ul>
                    
                    <a href="./index.js"><li>Home</li></a>
                    <a href="./#state"><li>State</li></a>
                    <a href="#map"><li>Map</li></a>
                    <a href="https://covid19.ncdc.gov.ng/"><li>NCDC</li></a>
                    <a href="aboutMe.js"><li>About Me</li></a>
                
            </ul>
            </div>

            <div>
                <h2>NCDC Connect Center</h2>
                <ol>
                    <li><i class="fa fa-phone"></i> 0800 9700 0010, 6232</li>
                    <li><i class="fa fa-whatsapp"></i> +2347087110839</li>
                    <li><i class="fa fa-envelope"></i> Sms +2348099555577</li>
                </ol>
            </div>
            

            <div>
                <h2>About Me</h2>
                <p>
                    Hi, I'm Mujtaba Adamu Flexisaf Interns Student
                </p>
                <ol class="social">
             
                    <li><a id="email" href="mailto:mujtabaadamu1998@gmail.com"><i class="fa fa-envelope"></i></a></li>
                    <li><a id="whatsapp" href="https://wa.me/8068279731"><i class="fa fa-whatsapp"></i></a></li>
                   <li><a id="twitter" href="https://twitter.com/Mujtaba__ibb?ref_src=twsrc%5Etfw"><i class="fa fa-twitter"></i></a></li>
                    <li><a id="fb" href="https://web.facebook.com/mujtaba.adamu.77"><i class="fa fa-facebook"></i></a></li>

                </ol>
            </div>

        </div>

    </footer>




</body>

</html>