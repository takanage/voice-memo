export default class Media {

    async getAudio() {
        return navigator.mediaDevices.getUserMedia({
            audi: true,
        });
       
    };
};