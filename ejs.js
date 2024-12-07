let d=new Date();
const yyear=d.getFullYear();
document.getElementById('currentyear').textContent="Copyright © "+ yyear+", Kian Boon New. All Rights Reserved.";

// this is the js for the pop up box
// MessageBox1
const showMessage1 = document.getElementById('showMessage1');
const messageBox1 = document.getElementById('messageBox1');
const closeMessage1 = document.getElementById('closeMessage1');

        // Show the modal
        showMessage1.addEventListener('click', function (event) {
            event.preventDefault();
            messageBox1.style.display = 'flex';
        });

        // Close the modal
        closeMessage1.addEventListener('click', function () {
            messageBox1.style.display = 'none';
        });

        // Close the modal when clicking outside the content
        window.addEventListener('click', function (event) {
            if (event.target === messageBox1) {
                messageBox1.style.display = 'none';
            }
        });

// MessageBox2
const showMessage2 = document.getElementById('showMessage2');
const messageBox2 = document.getElementById('messageBox2');
const closeMessage2 = document.getElementById('closeMessage2');
// Show the modal
showMessage2.addEventListener('click', function (event) {
    event.preventDefault();
    messageBox2.style.display = 'flex';
});
// Close the modal
closeMessage2.addEventListener('click', function () {
    messageBox2.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === messageBox2) {
        messageBox2.style.display = 'none';
    }
});


// MessageBox3
const showMessage3 = document.getElementById('showMessage3');
const messageBox3 = document.getElementById('messageBox3');
const closeMessage3 = document.getElementById('closeMessage3');
// Show the modal
showMessage3.addEventListener('click', function (event) {
    event.preventDefault();
    messageBox3.style.display = 'flex';
});
// Close the modal
closeMessage3.addEventListener('click', function () {
    messageBox3.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === messageBox3) {
        messageBox3.style.display = 'none';
    }
});
// MessageBox4
const showMessage4 = document.getElementById('showMessage4');
const messageBox4 = document.getElementById('messageBox4');
const closeMessage4 = document.getElementById('closeMessage4');
// Show the modal
showMessage4.addEventListener('click', function (event) {
    event.preventDefault();
    messageBox4.style.display = 'flex';
});
// Close the modal
closeMessage4.addEventListener('click', function () {
    messageBox4.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === messageBox4) {
        messageBox4.style.display = 'none';
    }
});
// MessageBox5
const showMessage5 = document.getElementById('showMessage5');
const messageBox5 = document.getElementById('messageBox5');
const closeMessage5 = document.getElementById('closeMessage5');
// Show the modal
showMessage5.addEventListener('click', function (event) {
    event.preventDefault();
    messageBox5.style.display = 'flex';
});
// Close the modal
closeMessage5.addEventListener('click', function () {
    messageBox5.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === messageBox5) {
        messageBox5.style.display = 'none';
    }
});
// MessageBox6
const showMessage6 = document.getElementById('showMessage6');
const messageBox6 = document.getElementById('messageBox6');
const closeMessage6 = document.getElementById('closeMessage6');
// Show the modal
showMessage6.addEventListener('click', function (event) {
    event.preventDefault();
    messageBox6.style.display = 'flex';
});
// Close the modal
closeMessage6.addEventListener('click', function () {
    messageBox6.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === messageBox6) {
        messageBox6.style.display = 'none';
    }
});