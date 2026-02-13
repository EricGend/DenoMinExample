import { WebUI } from "jsr:@webui/deno-webui";


export async function simpleWebUi(){
    const win = new WebUI();

    win.show('<html><script src="webui.js"></script> Hello World from Deno! </html>');
    await WebUI.wait();

    //const myWindow = new WebUI();


}