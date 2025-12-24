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
c1_tk.addEventListener("click",c1)
