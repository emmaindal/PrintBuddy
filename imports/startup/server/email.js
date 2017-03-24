smtp = {
    username: 'email',
    password: 'dittlösentillgmail',
    server:   'smtp.gmail.com',
    port: 465
}

process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;


