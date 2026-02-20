import { Webview } from "jsr:@webview/webview";


export async function simpleWebUi(){
    
  const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}</h1>
    <p>Build with webview</p>
  </body>
  </html>
`;


const webview = new Webview();

webview.loadUrl("file:///android_asset/index.html");

webview.("file:///Resources/html/Editor.html");

webview.navigate(`data:text/html,${encodeURIComponent(html)}`);
webview.run();


}