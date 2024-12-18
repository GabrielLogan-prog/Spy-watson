/**
 * Lê as contas de redes sociais conectadas no navegador e executa uma ação de callback.
 * 
 * @param {function} callback - Função de callback que será chamada com o nome da rede social e o estado de login.
 */
var leakSocialMediaAccounts = function(callback) {
    var platforms = [{
        domain: "https://squareup.com",
        redirect: "/login?return_to=%2Ffavicon.ico",
        name: "Square"
    }, {
        domain: "https://twitter.com",
        redirect: "/login?redirect_after_login=%2f..%2ffavicon.ico",
        name: "Twitter"
    }, {
        domain: "https://www.facebook.com",
        redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico",
        name: "Facebook"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        name: "Gmail"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        name: "Youtube"
    }, {
        domain: "https://plus.google.com",
        redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
        name: "Google Plus"
    }, {
        domain: "https://login.skype.com",
        redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        name: "Skype"
    }, {
        domain: "https://www.spotify.com",
        redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
        name: "Spotify"
    }, {
        domain: "https://www.reddit.com",
        redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
        name: "Reddit"
    }, {
        domain: "https://www.tumblr.com",
        redirect: "/login?redirect_to=%2Ffavicon.ico",
        name: "Tumblr"
    }, {
        domain: "https://www.expedia.de",
        redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        name: "Expedia"
    }, {
        domain: "https://www.dropbox.com",
        redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
        name: "Dropbox"
    }, {
        domain: "https://www.amazon.com",
        redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        name: "Amazon.com"
    }, {
        domain: "https://www.pinterest.com",
        redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
        name: "Pinterest"
    }, {
        domain: "https://de.foursquare.com",
        redirect: "/login?continue=%2Ffavicon.ico",
        name: "Foursquare"
    }, {
        domain: "https://eu.battle.net",
        redirect: "/login/de/index?ref=http://eu.battle.net/favicon.ico",
        name: "Battle.net"
    }, {
        domain: "https://store.steampowered.com",
        redirect: "/login/?redir=favicon.ico",
        name: "Steam"
    }, {
        domain: "https://www.academia.edu",
        redirect: "/login?cp=/favicon.ico&cs=www",
        name: "Academia.edu"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
        name: "Blogger"
    }, {
        domain: "https://github.com",
        redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        name: "Github"
    }, {
        domain: "https://medium.com",
        redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        name: "Medium"
    }, {
        domain: "https://news.ycombinator.com",
        redirect: "/login?goto=y18.gif%23",
        name: "Hackernews"
    }, {
        domain: "https://carbonmade.com",
        redirect: "/signin?returnTo=favicon.ico",
        name: "Carbonmade"
    }, {
        domain: "https://courses.edx.org",
        redirect: "/login?next=/favicon.ico",
        name: "EdX"
    }, {
        domain: "https://slack.com",
        redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        name: "Slack"
    }, {
        domain: "https://www.khanacademy.org",
        redirect: "/login?continue=https%3A//www.khanacademy.org/favicon.ico",
        name: "Khan Academy"
    }, {
        domain: "https://www.paypal.com",
        redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        name: "Paypal"
    }, {
        domain: "https://500px.com",
        redirect: "/login?r=%2Ffavicon.ico",
        name: "500px"
    }, {
        domain: "https://www.airbnb.com",
        redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        name: "Airbnb"
    }, {
        domain: "https://disqus.com",
        redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
        name: "Disqus"
    }, {
        domain: "https://secure.meetup.com",
        redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
        name: "Meetup"
    }, {
        domain: "https://bitbucket.org",
        redirect: "/account/signin/?next=/favicon.ico",
        name: "BitBucket"
    }, {
        domain: "https://secure.indeed.com",
        redirect: "/account/login?continue=%2ffavicon.ico",
        name: "Indeed"
    }, {
        domain: "https://vk.com",
        redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
        name: "VK"
    }];

    platforms.forEach(function(network) {
        var img = document.createElement('img');
        img.referrerPolicy = 'no-referrer';
        img.src = network.domain + network.redirect;
        /**
         * Verifica se a imagem carregou corretamente.
         * Se carregou, significa que o usuario esta logado na rede social.
         * @listens img:load
         */
        img.onload = function() {
            callback(network, true);
        };
        img.onerror = function() {
            callback(network, false);
        };
    });
};


/*************  ✨ Codeium Command 🌟  *************/
/**
 * Verifica se o usuario esta logado em alguma rede social e
 * chama um callback com o resultado.
 * @param {function} callback Funcao a ser chamada com o resultado.
 * O callback recebe dois argumentos: o primeiro e o nome da rede social
 * e o segundo e um booleano indicando se o usuario esta logado.
 */
function testSocialMedia() {
    leakSocialMediaAccounts(function(network, isLoggedIn) {
        console.log(network, isLoggedIn);
        var item = document.querySelector(`.platform-item[data-platform="${network.name}"]`);

        if (item) {
            if (isLoggedIn) {
                document.getElementById('logged-in').appendChild(item);
            } else {
                document.getElementById('not-logged-in').appendChild(item);
            }
        }
    });
}


/**
 * Navega para uma pagina.
 * @param {string} page - A pagina para onde sera feita a navegacao.
 */

function navigateTo(page) {
    window.location.href = page;
}
