

function redirectToGmail(){

    var emailAddress = 'MindfeedOficial@gmail.com';

    
    var subject = 'Información sobre Mindfeed';

    
    var mailtoURL = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);

    
    window.location.href = mailtoURL;
}