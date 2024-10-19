function adjustBackgroundScale() {
    const scaleSky = Math.max(window.innerWidth / 1920, 1); // 画面幅に応じて最小スケールを1とする
    const scaleCloud = Math.max(window.innerWidth / 1920, 1);

    updateTransforms(scaleSky, scaleCloud);
}

function updateTransforms(scaleSky, scaleCloud) {
    const offset = window.pageYOffset;
    const offset1 = -offset + 300;
    const offset2 = -offset + 400;
    -offset;
    document.querySelector('.back-sky [data-multiple] [data-movement] span').style.transform = `translateZ(-2px) translateY(${offset * 0.2}px) scale(1)`;
    document.querySelector('.back-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(-1px) translateY(${offset2 * 0.5}px) scale(1.1)`;
    document.querySelector('.front-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(0px) translateY(${offset1}px) scale(1)`;
}

window.addEventListener('resize', adjustBackgroundScale);
document.addEventListener('scroll', () => updateTransforms(window.innerWidth / 1920, window.innerWidth / 1920));
adjustBackgroundScale(); // 初期読み込み時にも実行

anime({
    targets: '.hero h1, .hero p',
    translateY: [50, 0], // 30pxから0pxへ移動
    opacity: [0, 1], // 透明から不透明へ
    //delay: anime.stagger(1000), // 各ターゲットのアニメーション開始を100ミリ秒ずらす
    duration: 4000, // 1000ミリ秒（1秒）でアニメーション完了
    easing: 'easeOutExpo' // イージング関数
});
