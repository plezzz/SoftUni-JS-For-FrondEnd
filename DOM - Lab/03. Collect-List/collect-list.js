function extractText() {
    let lis = document.getElementById("items").getElementsByTagName("li");
    let text = '';
    for (const el of lis) {
        text += el.textContent + '\n'
    }
    document.getElementById('result').value = text;
}
