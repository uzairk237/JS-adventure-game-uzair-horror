document.addEventListener("DOMContentLoaded", function() {
    const taskButton = document.getElementById("task-button");

    taskButton.addEventListener("click", function() {
        // Perform the initial task
        // Change background image
        document.body.style.backgroundImage = "url(https://c1.staticflickr.com/4/3716/9861415114_846924dac5_b.jpg)";
        // Clear the game screen
        document.getElementById("game-screen").innerHTML = "";

        // Update game text with options
        document.getElementById("game-screen").innerHTML = `
<h1 style="color: white;">You hear whispers on the other side what do you do?</h1>
            <button id="option1">Barge In</button>
            <button id="option2">Wait and then go in</button>
        `;

      document.getElementById("option1").addEventListener("click", function() {
        // Change background image
        document.body.style.backgroundImage = "url(http://www.freaktography.com/wp-content/uploads/2016/11/two-doors.jpg)";

        // Clear the game screen
        document.getElementById("game-screen").innerHTML = "";

            // Add two options after clearing
            document.getElementById("game-screen").innerHTML = `
                <h1 style="color: white;">You see see 2 door which do you pick?</h1>
                <button id="option3">red door</button>
                <button id="option4">blue door</button>
            `;

        
        });

          document.getElementById("option2").addEventListener("click", function() {
            // Change background image
            document.body.style.backgroundImage = "url(http://www.freaktography.com/wp-content/uploads/2016/11/two-doors.jpg)";

            // Clear the game screen
            document.getElementById("game-screen").innerHTML = "";

            // Add two options after clearing
            document.getElementById("game-screen").innerHTML = `
                <h1 style="color: white;">You see see 2 door which do you pick?</h1>
                <button id="option3">red door</button>
                <button id="option4">blue door</button>
            `;

            // Handle option 2
        });

        // Handle dynamically added option button clicks
        document.getElementById("game-screen").addEventListener("click", function(event) {
            if (event.target.id === "option3") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";
              document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/b8/78/53/b878535f5e4e55947857544c077aa385.jpg)";

                // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                    <h1 style="color: black;">You fall in a shallow lake and see a shack what do you do?</h1>
                    <button id="option5">go to shack</button>
                    <button id="option6">build a fire and camp out</button>
                `;
                // Handle option 3
            } else if (event.target.id === "option4") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";

              // Show background image
              document.body.style.backgroundImage = "url(https://media.sciencephoto.com/image/c0123352/800wm/C0123352-Abandoned_Farmhouse_in_Wheat_Field,_USA.jpg)";
            
              

 
              // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                    <h1 style="color: white;">You fall in a field and see a house</h1>
                    <button id="option7">break in</button>
                    <button id="option8">camp outside</button>
                `;
                // Handle option 4
            } else if (event.target.id === "option5") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";
              // Show background image
              document.body.style.backgroundImage = "url(https://1.bp.blogspot.com/-P4TryEmu9qg/T7kebeIcE6I/AAAAAAAAAD4/Qpmc2b-Vdx4/s1600/2844710051_417e8f5fdb_z.jpg)";
              
          
                // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                    <h1 style="color: white;">you see a comfy bed and a closet where do you go and you hear a loud snarl</h1>
                    <button id="option9">Hide in closet and wait out the night</button>
                    <button id="option10">get in the bed and sleep through the night</button>
                `;
                // Handle option 5
            } else if (event.target.id === "option6" || event.target.id === "option8" || event.target.id === "option10" || event.target.id === "option11" || event.target.id === "option13") {
                // Display "You died" message
                document.getElementById("game-screen").innerHTML = "<h1 style='color: red;'>You died</h1>";
              document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/1ValqnZLS00/maxresdefault.jpg)";
            

            } else if (event.target.id === "option7") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";
              document.body.style.backgroundImage = "url(https://1.bp.blogspot.com/-P4TryEmu9qg/T7kebeIcE6I/AAAAAAAAAD4/Qpmc2b-Vdx4/s1600/2844710051_417e8f5fdb_z.jpg)";

                // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                    <h1 style="color: white;">you see a comfy bed and a closet where do you go and you hear a loud snarl</h1>
                    <button id="option9">Hide in closet and wait out the night</button>
                    <button id="option10">get in the bed and sleep through the night</button>
                `;
                // Handle option 7
            } else if (event.target.id === "option9") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";
              document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/530932358/photo/old-attic.jpg?s=612x612&w=0&k=20&c=EHO0klTUJ0dWdheVvgvv5DNc25BSMm0zv8g2X_n9Nmg=)";
              

                // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                   <h1 style="color: white;">You hear the monster roaring and snarling near the room what do you do?</h1>
                    <button id="option11">Leave and run out of house outside</button>
                    <button id="option12">stay in the house and look around carefully</button>
                `;
                // Handle option 9
            } else if (event.target.id === "option12") {
                // Clear the game screen
                document.getElementById("game-screen").innerHTML = "";
              document.body.style.backgroundImage = "url(http://farm9.staticflickr.com/8033/7942497114_3ab16ff694_z.jpg)";

                // Add two options after clearing
                document.getElementById("game-screen").innerHTML = `
                   <h1 style="color: white;">You see a glowing white door What do you want to do next?</h1>
                    <button id="option13">stay in house and wait until the monster leaves</button>
                    <button id="option14">go in the door</button>
                `;

              
document.getElementById("option14").addEventListener("click", function() {
    // Clear the game screen
    document.getElementById("game-screen").innerHTML = "";
  
    // Show background image
    document.body.style.backgroundImage = "url(https://st4.depositphotos.com/9625262/19860/v/600/depositphotos_198604266-stock-video-you-win-word-retro-cartoon.jpg)";
});
                // Handle option 12
            } else if (event.target.id === "option11") {
                // Handle option 11
            } else if (event.target.id === "option13") {
               
              
                // Handle option 14
              
            }
        });
    });
});

