function onswitch()
{
    document.getElementById("bulbImg").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent="Switched On";
    document.getElementById("on").style.backgroundColor="#cbd2d9";
    document.getElementById("off").style.backgroundColor="red";
}
function offswitch()
{
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("heading").textContent="Switched Off";
    document.getElementById("on").style.backgroundColor="green";
    document.getElementById("off").style.backgroundColor="#cbd2d9";
}