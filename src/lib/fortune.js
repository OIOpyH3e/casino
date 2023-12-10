const fortuneCookies = [

    "Ставь на Зеро, не прогадаешь.",
    "Играй в Техас, шанс выиграть выше.",
    "Ставь всё на черное.",
    "Ставь всё на красное.",
    "Пять карт, можно поменять, можно докупить одну - это Русски поккер."
]
exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}
