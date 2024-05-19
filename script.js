function project(){
    window.open("https://github.com/mohammadzaid8/Web-site-Small-Project.git",'_blank')
}

function hire(){
    var email = "masizaid10@gmail.com";
            var subject = "Hire Me";
            var body = "Hi there,%0A%0AI am interested in hiring you.%0A%0AThanks!";
            var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            
            window.location.href = mailtoLink;
}