const wakeUp = () => console.log('Acordando!');
const breakfest = () => console.log('Bora tomar café!!!');
const goingSleep = () => console.log('Partiu dormir!!!');

const doingThings = (things) => {
    if (things === wakeUp) {
        return wakeUp();
    } else if (things === breakfest) {
        return breakfest();
    } else if (things === goingSleep) {
        return goingSleep();
    }
};
doingThings(breakfest);