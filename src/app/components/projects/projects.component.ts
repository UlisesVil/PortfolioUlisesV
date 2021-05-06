import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public url: string;
  public elements;

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit():void{

    this.elements=[
      {
        "name" : "Top Racing Games Site",
        "description" : "This fully Responsive application is available on the web, built-in Angular on the Frontend, and communicates with a Node JS REST API, deployed on Heroku on the backend, and the database comes from Mongo DB Atlas."+
          "*On the Main page, we use the Scroll to control the video forwards and backward."+
          "*This application uses the JSON Web Token library to manage user sessions, their data, and the encryption of their passwords to save them in the database."+
          "*The button to send data of the forms is not activated unless the data are complete and that the password field is the same as the confirmed password. It is the same when we create a new article for a game."+
          "*This application recognizes the difference between a user and an administrator. When logging in as an administrator, the ADD GAME option is activated, which will allow adding a new article."+
          "*The options edit and delete article will be activated for an administrator too."+
          "*If the delete option is selected, it will ask for confirmation."+
          "*When adding a new article, the upload image button will change to the name of the image selected to indicate that the image is ready."+
          "*When editing an article, if the user wants to change the image, the user will preview the current and the new one."+
          "*The users can Register and log in, which will allow them to make comments if they wish in any of the articles of this application. The user can also edit or delete comments he has made previously."+
          "*If the users want to comment in the game detail section and have not logged in, clicking on the comment section, a Modal will pop up to log in, and now the comment section is activated."+
          "*The comments are sorted, from the most recent order to the oldest."+
          "*If the users want to edit or delete one of their comments, they must log in to activate this function then clicking on edit will open a modal to do so, and if they want to delete it, it will ask for confirmation."+
          "*The Games section loads the articles (Projects) saved in the database and sent from the backend showing its image, title, and type of vehicle that uses the game."+
          "*When the user selects a game, it shows us the complete information related to it, extracted from the backend, and the comments that users made about this game showing them at the bottom of the page."+
          "*In the Gallery section, the BxSlider library will display images related to the game in this application.",
        "category" : "Angular",
        "year" : 2020,
        "langs" : "Angular, JavaScript, TypeScript, NodeJS, MongoDB Atlas, ExpressJS, jQuery, Css3, Heroku, JSON Web Token, Box Slider Library",
        "image" : "01.jpg",
        "git" : "https://github.com/UlisesVil/TopRacingGames",
        "site" : "https://ulisesvil.github.io/TopRacingGames"
      },
      {
        "name" : "API Rest Top Racing Games Site",
        "description" : "This API works for the Top Racing Games site, is built with NodeJS and Express, manages both article and user information, and saves the data in MongoDB Atlas through Mongoose."+
          "*This REST API is deployed in the Heroku service, uses the JSON Web Token library to manage user sessions, their data, and the encryption of their passwords to save them in the database in MongoDB Atlas.",
        "category" : "Node JS",
        "year" : 2020,
        "langs" : "NodeJS, ExpressJS, Mongoose, MongoDB Atlas, Heroku, JSON Web Token",
        "image" : "02.jpg",
        "git" : "https://github.com/UlisesVil/TopRacingGames-API",
        "site" : "https://top-racing-games-api.herokuapp.com"
      },
      {
        "name" : "Pic N Share",
        "description" : "Application made with Laravel (PHP) and MySQL is fully Responsive and is available on the web."+
          "*The users can sign up to create an account, and then they can log in."+
          "*User data and activity will store in the database with their encrypted password."+
          "*In a new account, the user will have a default image in his profile which the users can change to the image they like."+
          "*When you log in, the main page is showed with the publications that other users have made, showing the most recent ones first."+
          "*This application has pagination, showing five publications per page."+
          "*Publications will show the number of likes and the number of comments it has received, and the heart will remain red if the user has already liked it or gray if they have not clicked on it yet."+
          "*Any publication that users have made can edit or delete. If the user chooses to delete some publication, a modal will pop up to ask for confirmation."+
          "*The user can enter any publication to add a comment and can later edit or delete."+
          "*The community section lists the users registered in the app showing their profile image, their name, nickname, since when they have been members, and a button that shows only the publications from that user has made."+
          "*In the favorites section, the users will see only the publications of other users and his own that he has given like, if they click on the favorite button with a red heart shape again, it will change to gray. The publication is going to be deleted from this list the next time the user enters this section."+
          "*The Upload Image option will allow users to prepare and upload a publication. In this view, they will see a preview of their image, and they can add a comment or description so that the community can see it."+
          "*The upload image button is customized. When users choose the image to upload, the button's text will change to the image name file they have already chosen."+
          "*In the option: My posts, the user can see only the publications he has made."+
          "*In the option profile. The users can see their personal information and edit it if they wish, also their image profile. When they change their image, the user will be able to view his old image and the new image that he has selected to replace the previous one, and the upload button image will change its text to the name of the new image the user has chosen.",
        "category" : "Laravel",
        "year" : 2020,
        "langs" : "Laravel, PHP, My SQL, jQuery, CSS3, PHP my Admin, Tail Wind Library, Moment JS Library",
        "image" : "06.jpg",
        "git" : "https://github.com/UlisesVil/Laravel-SocialApp-PicnShare",
        "site" : "http://ulises-social-app.atwebpages.com"
      },
      {
        "name" : "Tasks App",
        "description" : "Application made with Symfony (PHP), MySQL, is fully Responsive and is available on the web."+
          "*App created for a work team. Users must register and log in."+
          "*All the tasks in the main section of all users members of the work team are listed, then they can monitor their status and know to whom each task corresponds."+
          "*All the functions are activated if the user who has logged in is the owner of the task, and tasks that are not from the user will only have activated the Detail button."+
          "*Each user must add their tasks in the create task section specifying the description, priority, and budgeted hours. The application will add the date and time of creation, the name of the user who created it."+
          "*My Tasks section will list only the tasks of the logged user and will have available all the functions enabled."+
          "*When the user finishes a task, they must press the finish button to close the said task, then the app will add the date and time of completion and calculate the time it took to complete this task, and now any user can compare it with the budgeted time."+
          "*The Actions section in the main table will change if the user who logged in created the task or not. If the user created that task, actions: detail, edit, and delete will be available. If the user is not the owner of this task, only the action detail will appear"+
          "*The user who owns a task will have the option to add a completion comment, which is available only if this task has the status \"completed\" and can also edit the comment."+
          "*The application has a random background function to give a dynamic view. The background image will change every time the user changes the section or updates the browser.",
        "category" : "Symfony",
        "year" : 2020,
        "langs" : "Symfony, PHP, My SQL, PHP my Admin, Twig, CSS3",
        "image" : "08.jpg",
        "git" : "https://github.com/UlisesVil/Symfony-TasksApp",
        "site" : "http://ulises-tasksapp.atwebpages.com"
      },
      {
        "name" : "Shop",
        "description" : "This application is made with PHP and MySQL using the Model View Controller (MVC). This project is running on a host with all its functions and is fully responsive."+
          "*The application allows the user to see the products and add items to the cart without having logged in. When the buyer makes an order, the application will ask to log in to continue with the purchase process."+
          "*In this application, we can register and log in by saving the user's data in the database with an encrypted password."+
          "*In addition, the application distinguishes between an administrator and a customer user of the store."+
          "*If the user has logged in as an administrator. We will have more options available in the menu that will allow us to manage categories, products, orders, add or delete products, change the status of Orders between Pending, Preparing, Ready to Ship, and Shipped."+
          "*The main menu will add items automatically when the administrator creates a new category."+
          "*Product and order data will be store in the database for its administration."+
          "*When the user visits the main page, random products appear to give the user a purchase suggestion."+
          "*The application keeps track of the available inventory, and if the item is out of stock, it will no longer be displayed."+
          "*The Shopping Cart section will keep track of product type, individual items, and the total price."+
          "*The detail of the shopping cart will show the list of all the items the user has added. There are buttons to increase or decrease the number of them. "+
          "*The user can delete a product individually or empty the cart in its entirety. Also has the option to continue shopping to add more products or place the order and finish the purchase process."+
          "*When the customer confirms the order, he is asked for his address to send his products and shows the confirmation screen with the detail, assigned order number of his purchased products, and the products in the cart will be zero again.",
        "category" : "PHP MVC",
        "year" : 2020,
        "langs" : "PHP, My SQL, PHP my Admin, CSS3",
        "image" : "07.jpg",
        "git" : "https://github.com/UlisesVil/project-shop-PHP-MySQL-POO-MVC",
        "site" : "http://ulisestore.atwebpages.com"
      },
      {
        "name" : "1up-Games News",
        "description" : "This application uses PHP and MySQL. It is running on a host with all its functions, and it is fully responsive."+
          "*In this application, we can register and log in by saving the user's data in the database with an encrypted password."+
          "*In addition, the application distinguishes between a user or Administrator. If you log in as an administrator, we will have more options available in the menu that will allow us, Create, Edit and delete an entry (news) and Create a new category of games."+
          "*The user is allowed to enter and navigate the site without registration. The user can make comments only if he is registered and logged in. He will also be able to edit or delete his comments."+
          "*If the user does not log in, the comment box will remain inactive."+
          "*jQuery is present in the Sidebar menu control."+
          "*A feeling of dynamism has been added to the page, with particles JS library to animate the background. Particles react to the mouse pointer in certain parts of the page.",
        "category" : "PHP",
        "year" : 2020,
        "langs" : "JavaScript, jQuery, PHP, My SQL, CSS3,  PHP my Admin, Particles JS library, Font Awesome library",
        "image" : "03.jpg",
        "git" : "https://github.com/UlisesVil/GamesNews-PHP-mysql",
        "site" : "http://1up-gamesnews.atwebpages.com"
      },
      {
        "name" : "Project JS",
        "description" : "The purpose of this page is to change themes. There are three available it uses CSS and Local Storage."+
          "*Changes applied to the background image, button color, box-shadow of the main container, and the color of the menus."+
          "*The BxSlider library attaches a fresh view, with the images on the main page."+
          "*The Moment JS library is incorporated to display a clock."+
          "*jQuery is present using accordion element in about section and control of certain elements.",
        "category" : "JavaScript",
        "year" : 2020,
        "langs" : "JavaScript, jQuery, Moment library, Box Slider Library, CSS3 ",
        "image" : "04.jpg",
        "git" : "https://github.com/UlisesVil/Web-JavaScript-Project",
        "site" : "https://ulisesvil.github.io/Web-JavaScript-Project/"
      },
      {
        "name" : "Chat App",
        "description" : "The basis of the development of this app is React on the frontend, hosted on GitHub pages, and Node JS, Socket.io, and Express on the backend with the Heroku service. Furthermore, the application is fully responsive."+
          "*We use the UUID library to generate secure and automatic IDs to log in to the application. You can also add the phone number as an ID, although there are still restrictions in the code to identify that other users do not log in with the same number."+
          "*The user will be able to add contacts and will be able to establish individual or group conversations."+
          "*The data of this application is store in Local Storage.",
        "category" : "React - Socket io",
        "year" : 2020,
        "langs" : "React, NodeJS, Socket.io, Express, CSS3, Heroku",
        "image" : "05.jpg",
        "git" : "https://github.com/UlisesVil/React-Socket-io-Chat",
        "site" : "https://ulisesvil.github.io/React-Socket-io-Chat"
      },
      {
        "name" : "Markdown Previewer",
        "description" : "This application uses the Marked library, is fully responsive, and was created to learn React and the operation and applications of the Marked language.",
        "category" : "React",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass,  Font Awesome Library, Marked Library",
        "image" : "09.jpg",
        "git" : "https://github.com/UlisesVil/markdownpreviewer",
        "site" : "https://ulisesvil.github.io/markdownpreviewer/"
      },
      {
        "name" : "Random Quote Machine",
        "description" : "An application that shows a quote randomly and it changes when the user presses the Random Quote button. This app is fully responsive."+
          "*The Twitter button shares the current quote, its author, and the site link."+
          "*The Facebook button shares the site on this social network.",
        "category" : "React",
        "year" : 2020,
        "langs" : "React, JavaScript, CSS3",
        "image" : "10.jpg",
        "git" : "https://github.com/UlisesVil/ReactRandomQuote",
        "site" : "https://ulisesvil.github.io/ReactRandomQuote/"
      },
      {
        "name" : "Pomodoro Clock",
        "description" : "A fully responsive countdown application, built with React, can help the user scheduling study sessions or any other activity they need to focus on or dedicate a specific time."+
          "*The user can adjust the session time between 1 and 60 minutes. When the first session ends, it will automatically start again with the time adjustment of the break length."+
          "*Break length has values between 1 and 60 min."+
          "*The count will not stop until the user decides to stop it by pressing the start button."+
          "*The clock will start the countdown. If it reaches zero, the alarm will be activated."+
          "*The user can pause his session and can also restore the initial values."+
          "*The time indicator will turn white when active and red when it reaches 1 minute.",
        "category" : "React",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass, Font Awesome Library",
        "image" : "11.jpg",
        "git" : "https://github.com/UlisesVil/ReactPomodoroClock",
        "site" : "https://ulisesvil.github.io/ReactPomodoroClock"
      },
      {
        "name" : "Drum Machine",
        "description" : "This application is fully Responsive and built with React and consists of emitting different sounds when pressing keys to make music."+
          "*The application can be completely disabled with the power button."+
          "*It has 18 different sounds divided into two kits of 9."+
          "*The user can activate a kit depending on the position of the Bank button."+
          "*The name of the active kit will be in the center display."+
          "*The slider below the display controls the volume of the application."+
          "*Pressing the main buttons will emit sounds depending on the active kit at that moment."+
          "*The user can activate the sounds with the keyboard keys by pressing the letters Q, W, E, A, S, D, Z, X, and C. that each button has in the center.",
        "category" : "React",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass",
        "image" : "12.jpg",
        "git" : "https://github.com/UlisesVil/ReactDrumMachine",
        "site" : "https://ulisesvil.github.io/ReactDrumMachine/"
      },
      {
        "name" : "React Calc",
        "description" : "This application is fully Responsive and built with React."+
          "*It is a calculator with primary functions and ready to use on the web.",
        "category" : "React",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass",
        "image" : "13.jpg",
        "git" : "https://github.com/UlisesVil/ReactJavascriptCalculator",
        "site" : "https://ulisesvil.github.io/ReactJavascriptCalculator/"
      },
      {
        "name" : "JavaScript  Calc",
        "description" : "This calculator is fully responsive and built with JavaScript, CSS3, and HTML."+
          "*The calculator responds to the keyboard."+
          "*The eval() method is not present in the development of this application.",
        "category" : "JavaScript",
        "year" : 2020,
        "langs" : "JavaScript, CSS3",
        "image" : "14.jpg",
        "git" : "https://github.com/UlisesVil/CalculatorJS-whitout-eval-method",
        "site" : "https://ulisesvil.github.io/CalculatorJS-whitout-eval-method/"
      },
      {
        "name" : "Etch A Sketch",
        "description" : "This application is fully responsive, and its purpose is to draw pixel art style."+
          "*The application has two modes:"+
          "*The rainbow mode, which allows the user to fill the grid with random colors."+
          "*The drawing mode, which allows the user to draw whatever he can imagine."+
          "*To start in the Drawing Mode, we must adjust the grid with the first section on the left and write the desired number of frames."+
          "*For example, if we write the number ten, we will have a 10x10 grid, the size of the canvas will not change, and the squares will adjust the size."+
          "*The users will be able to draw what they wanted."+
          "*Fifty pictures are available, from which they can choose with the arrows in the change image section above the selected image. They can navigate forward and backward to choose one and take it as a guide."+
          "*Below the image, there is a color picker to change color and draw with the selected color."+
          "*The user can save their drawing in PNG format at any time with the Save Sketch button."+
          "*The Reset initial button will return to the initial state with the 16x16 grid and erase what the user did to that moment.",
        "category" : "JavaScript",
        "year" : 2020,
        "langs" : "JavaScript, CSS3, jQuery, Font Awesome library, Colorpicker Library, html2canvas Library, canvas2image library",
        "image" : "15.jpg",
        "git" : "https://github.com/UlisesVil/Etch-a-sketch",
        "site" : "https://ulisesvil.github.io/Etch-a-sketch/"
      },
      {
        "name" : "Rock Paper Scissors Game",
        "description" : "This application is fully responsive and is available on the web, built with JavaScript HTML and CSS3."+
          "*The classic rock-paper-scissors game allows the user to enter their name before starting the game and placed it on the scoreboard."+
          "*The game has retro-style background music that will change depending on which section of the application is active, and the user can increase or decrease its volume."+
          "*To start the game, the user must select one of the three animated characters on the screen. Selecting one of them will start the game and face a virtual player."+
          "*The central animation will show who beats whom and will take a count of games won or lost by each player and a count of the tied games."+
          "*The player will win when his score reaches five games won before the other competitor. *As soon as the winner is determined, the winner or game over screen appears depending on the obtained result."+
          "*On the winning player and game over screen, the user will have the option of playing again or quit the game."+
          "*If the user chooses the option to leave the game, the goodbye screen displays.",
        "category" : "JavaScript",
        "year" : 2020,
        "langs" : "JavaScript, CSS3",
        "image" : "16.jpg",
        "git" : "https://github.com/UlisesVil/project_rock_paper_scissors",
        "site" : "https://ulisesvil.github.io/project_rock_paper_scissors"
      }
    ];

    $(document).ready(this.addAnimate);
  }

  openDialog(project): void{

    const dialogRef = this.dialog.open(ProjectDialogComponent,{
      data: {
        name: project.name,
        description: project.description,
        langs: project.langs,
        image: project.image,
        git: project.git,
        site: project.site
      }
    });

  }

  addAnimate(){
    var cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      $('.card').mouseenter(function(){
        let randomNumber=Math.floor(Math.random()*Math.floor(6));
        //console.log(randomNumber);
        switch(randomNumber){
          case 0:
          $(this).find('.card_layer').addClass('colorOne');
          $(this).find('.card_layer').removeClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 1:
          $(this).find('.card_layer').addClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 2:
          $(this).find('.card_layer').addClass('colorThree');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 3:
          $(this).find('.card_layer').addClass('colorFour');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 4:
          $(this).find('.card_layer').addClass('colorFive');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 5:
          $(this).find('.card_layer').addClass('colorSix');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          break;
        }
      });
      $('.card').mouseleave(function(){
        $(this).find('.card_layer').removeClass('colorOne', 'colorTwo','colorThree', 'colorFour', 'colorFive', 'colorSix');
      });
    });
  }
}
