const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let angle = 0


animation({
    clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    },
    update() {
        angle += Math.PI * 0.01;
    },
    render() {

        context.beginPath();

        context.arc(
            canvas.width / 2 ,
            250 - (150 *  Math.sin(angle)),
            25,
            0,
            Math.PI * 2,
        );

        context.fillStyle = "white";
        context.fill()
    }
})

function animation(obj) {
    const {clear, update, render} = obj;
    let pTimestamp = 0;

    requestAnimationFrame(tick);

    function tick(timestamp) {
        requestAnimationFrame(tick);

        const diff = timestamp - pTimestamp;
        pTimestamp = timestamp;
        const fps = 1000 / diff;
        const secondPart = diff / 1000;

        const params = {
            timestamp,
            pTimestamp,
            diff,
            fps,
            secondPart,
        };

        update(params);
        clear();
        render(params);
    }
}

