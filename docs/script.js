element = document.getElementById('mytext');
let ints = document.getElementById('content');

setUserAgent(
    document.querySelector('iframe').contentWindow, 
    'Aakash Chakravarthy Mobile Agent'
);

function btn1Click(){
  
  console.log("https://www.youtube.com/watch?v=" + element.value);
document.getElementById("ifr").src="https://www.youtube-nocookie.com/embed/" + element.value;
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = {
      get: function() {
        return userAgent;
      }
    };
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      });
    }
  }
}


function clicks(){
  console.log(element.value);
　document.getElementById("ifr2").src=ints.value;
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = {
      get: function() {
        return userAgent;
      }
    };
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      });
    }
  }

}
function clicker(){
  console.log(element.value);
　document.getElementById("tiktok").src = "6921270833801415937";
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = {
      get: function() {
        return userAgent;
      }
    };
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      });
    }
  }

}

function cc(){
  console.log(element.value);
　window.open('https://math.005net.com/youten.php')

}

document.addEventListener('keypress', keypress_ivent);

