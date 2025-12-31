const c1_tk = document.getElementById("c1")
async function c1() {
    try {
        await navigator.clipboard.writeText('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\n');
        console.log('Text copied to clipboard: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\n');
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
}
c2_tk.addEventListener("click",c2)
const c2_tk = document.getElementById("c2")
async function c2() {
    try {
        let user_check = confirm("这个秘钥很重要！你确定要吗？")
        if(user_check){
            let user_check2 = confirm("真的?")
            if(user_check2){
                await navigator.clipboard.writeText('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\n');
                console.log('Text copied to clipboard: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\n');
            }
            else {
                alert("明智之举！");
            }
        else {
            alert("太明智了");
        }
        }
        await navigator.clipboard.writeText('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\n');
        console.log('Text copied to clipboard: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\n');
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
}
c1_tk.addEventListener("click",c2)
