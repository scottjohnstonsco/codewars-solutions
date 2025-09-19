function isIsogram(str){
    str = new str.toLowerCase();
    return new Set(str).size === str.length;
}