function a() {
    function b() {
        console.log(myVar);
    }
    var myVar = 1;
    b();
}

var myVar = 1;
a();