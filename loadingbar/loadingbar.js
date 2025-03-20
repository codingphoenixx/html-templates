function setProgress(key, targetPercent) {
    const container = document.querySelector("." + key + " .loading-container");
    const bar = document.querySelector("." + key + " .loading-bar");
    const text = document.querySelector("." + key + " .progress-text");

    let currentPercent = parseInt(bar.getAttribute("progress"));
    var step = (targetPercent - currentPercent) / 100;
    if (step < 0)
        step *= -1;
    var down = currentPercent > targetPercent;


    bar.style.width = Math.round(targetPercent) + "%";

    function updateProgress() {
        if (!down) {
            currentPercent += step;
            if (currentPercent > targetPercent) {
                currentPercent = targetPercent;
                return;
            }
            text.textContent = Math.round(currentPercent) + "%";
            bar.setAttribute("progress", Math.round(currentPercent) + "%");
            bar.style.width = Math.round(currentPercent) + "%";
            requestAnimationFrame(updateProgress);
        } else {
            currentPercent -= step;
            if (currentPercent < targetPercent) {
                currentPercent = targetPercent;
                return;
            }
            text.textContent = Math.round(currentPercent) + "%";
            bar.setAttribute("progress", Math.round(currentPercent) + "%");
            bar.style.width = Math.round(currentPercent) + "%";
            requestAnimationFrame(updateProgress);
        }
    }

    updateProgress();
}



document.addEventListener('DOMContentLoaded', function () {
    var containers = document.getElementsByClassName("loading-container")
    console.info(containers)
    console.info(containers[0])

    for (let i = 0; i < containers.length; i++) {
        let container = containers[i];
        console.info(container);
        const bar = container.getElementsByClassName("loading-bar")[0];
        const text = container.getElementsByClassName("progress-text")[0];
    
        let currentPercent = parseInt(bar.getAttribute("progress"));
        bar.style.width = Math.round(currentPercent) + "%";
    }
}, false);