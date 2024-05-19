function project(){
    window.open("https://github.com/mohammadzaid8/Web-site-Small-Project.git",'_blank')
}

function hire(){
    var email = "masizaid10@gmail.com";
            var subject = "Hire ";
            var body = "Hi there,I am interested in hiring you.Thanks!";
            var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            
            window.location.href = mailtoLink;
}
