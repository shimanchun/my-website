function adjustBackgroundScale() {
    const scaleSky = Math.max(window.innerWidth / 1920, 1); // 画面幅に応じて最小スケールを1とする
    const scaleCloud = Math.max(window.innerWidth / 1920, 1);

    updateTransforms(scaleSky, scaleCloud);
}

function updateTransforms(scaleSky, scaleCloud) {
    const offset = window.pageYOffset;
     document.querySelector('.back-sky [data-multiple] [data-movement] span').style.transform = `translateZ(-2px) translateY(-${offset * 0.2}px) scale(1.5)`;
     document.querySelector('.back-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(-1px) translateY(-${offset * 0.5}px) scale(1.2)`;
     document.querySelector('.front-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(0px) translateY(-${offset}px) scale(1)`;
}

window.addEventListener('resize', adjustBackgroundScale);
document.addEventListener('scroll', () => updateTransforms(window.innerWidth / 1920, window.innerWidth / 1920));
adjustBackgroundScale(); // 初期読み込み時にも実行
