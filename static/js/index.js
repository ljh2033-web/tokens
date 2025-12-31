// 等待DOM完全加载
        document.addEventListener('DOMContentLoaded', function() {
            const c1_tk = document.getElementById("c1");
            const c2_tk = document.getElementById("c2");
            
            // 检查元素是否存在
            if (!c1_tk || !c2_tk) {
                console.error("错误：未找到按钮元素");
                return;
            }
            
            // 绑定事件
            c1_tk.addEventListener("click", c1);
            c2_tk.addEventListener("click", c2);
            
            console.log("事件监听器绑定成功");
        });

        async function c1() {
            try {
                await navigator.clipboard.writeText('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\n');
                console.log('密钥1已复制');
                alert('密钥1已复制到剪贴板！');
            } catch (err) {
                console.error('复制失败:', err);
                alert('自动复制失败，请手动选择并复制密钥');
            }
        }

        async function c2() {
            try {
                const userCheck1 = confirm("这个秘钥很重要！你确定要吗？");
                if (!userCheck1) {
                    alert("太明智了");
                    return;
                }

                const userCheck2 = confirm("真的?");
                if (!userCheck2) {
                    alert("明智之举！");
                    return;
                }

                await navigator.clipboard.writeText('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\n');
                console.log('密钥2已复制');
                alert('密钥2已复制！请谨慎使用。');
            } catch (err) {
                console.error('复制失败:', err);
                alert('复制过程中出现错误');
            }
        }c2)
