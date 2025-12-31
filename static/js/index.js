async function c1() {
    try {
        await navigator.clipboard.writeText('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\n');
        console.log('Text copied to clipboard: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\n');
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
}

async function c2() {
    try {
        let user_check = confirm("这个秘钥很重要！你确定要吗？")
        if(user_check){
            let user_check2 = confirm("真的?")
            if(user_check2){
                await navigator.clipboard.writeText('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\n');
                console.log('Text copied to clipboard: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\n');
            } else {
                alert("明智之举！");
            }
        } else {
            alert("太明智了");
        }
        // 注意：你原来的代码在这里还有重复的复制操作，考虑是否必要
        // await navigator.clipboard.writeText('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\n');
        // console.log('Text copied to clipboard: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\n');
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// 为元素添加事件监听
c1_tk.addEventListener("click", c1) // 这里假设你是想绑定 c1 函数
c2_tk.addEventListener("click", c2)
