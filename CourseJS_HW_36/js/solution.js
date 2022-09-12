let = elementOutput =( function() {
    const arr = [];
    const showList = document.querySelectorAll("li");
    for (let li of showList) {
        arr.push(li.firstChild.data);
    }
console.log(showList.length);
console.log(arr);
})();