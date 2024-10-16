function adjustBackgroundScale() {
    const scaleSky = window.innerWidth / 1920; // 1920はデザインベースの幅
    const scaleCloud = window.innerWidth / 1920;

    document.querySelector('.back-sky [data-multiple] [data-movement] span').style.transform = `translateZ(-2px) scale(${scaleSky * 1.5})`;
    document.querySelector('.back-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(-1px) scale(${scaleCloud * 1.2})`;
    document.querySelector('.front-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(0px) scale(${scaleCloud})`;
}

window.addEventListener('resize', adjustBackgroundScale);
adjustBackgroundScale(); // 初期読み込み時にも実行


document.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    document.querySelector('.back-sky [data-multiple] [data-movement] span').style.transform = `translateZ(-2px) translateY(-${offset * 0.2}px) scale(1.5)`;
    document.querySelector('.back-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(-1px) translateY(-${offset * 0.5}px) scale(1.2)`;
    document.querySelector('.front-cloud [data-multiple] [data-movement] span').style.transform = `translateZ(0px) translateY(-${offset}px) scale(1)`;
});

