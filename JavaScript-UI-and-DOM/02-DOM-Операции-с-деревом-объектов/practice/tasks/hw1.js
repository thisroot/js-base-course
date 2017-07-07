function builder(element, contents) {

    var container = document.getElementById(element);

    if(!container) {
        throw new Error("element with id " + element + " not exist")
    }

    if(!contents) {
        throw new Error("contents not defined")
    }

    if(typeof contents != 'object') {
        contents = [contents]
    }

    var frag = document.createDocumentFragment()
    var tmp = document.createElement('div')
    tmp.className = "block"

    for(item of contents) {
        el = tmp.cloneNode(true);
        el.innerHTML = item
        frag.appendChild(el)
    }

    container.appendChild(frag)

    console.log(container, contents);
}
