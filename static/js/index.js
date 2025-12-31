let c1_tk = document.querySelector("c1");
let c2_tk = document.querySelector("c2");
async function c1(){
    alert("tokens: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\n");
    await navigator.clipboard.writeText("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");
}
async function c2(){
    alert("tokens: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")
    await navigator.clipboard.writeText("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")
}
c1_tk.addEventListener("click",c1);
c2_tk.addEventListener("click",c2);
