const defaultValue=document.querySelector("#counter");
const increment=()=>{
    //get value from UI
    let value=parseInt(defaultValue.innerText);
    // upadte value
    value=value+1;
    //set value from UI
    document.querySelector("#counter").innerText=value;

}
const decrement=()=>{
    //get value
    let value=parseInt(defaultValue.innerText);
    // upadte value
    value=value-1;
    //set value
    document.querySelector("#counter").innerText=value;

}